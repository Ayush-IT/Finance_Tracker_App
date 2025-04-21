'use client';

import { useEffect, useState } from 'react';


type Transaction = {
  amount: number;
  category: string;
  date: string;
};

type Budget = {
  category: string;
  budget: number;
};

export default function SpendingInsights() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [budgets, setBudgets] = useState<Budget[]>([]);

  useEffect(() => {
    const fetchTransactionsAndBudgets = async () => {
      try {
        const res = await fetch('/api/transactions');
        const data = await res.json();
        if (data.success) {
          setTransactions(data.transactions);
        }

        const budgetRes = await fetch('/api/budgets');
        const budgetData = await budgetRes.json();
        if (budgetData.success) {
          setBudgets(budgetData.budgets);
        }
      } catch (err) {
        console.error('Error loading data for spending insights:', err);
      }
    };

    fetchTransactionsAndBudgets();
  }, []);

  const totalSpending = transactions.reduce((acc, txn) => acc + txn.amount, 0);

  const categorySpending = transactions.reduce((acc: Record<string, number>, txn) => {
    if (!acc[txn.category]) acc[txn.category] = 0;
    acc[txn.category] += txn.amount;
    return acc;
  }, {});

  const highestSpendingCategory = Object.entries(categorySpending).reduce(
    (acc, [category, amount]) => (amount > acc.amount ? { category, amount } : acc),
    { category: '', amount: 0 }
  );

  const budgetData = budgets.reduce((acc: Record<string, number>, budget) => {
    acc[budget.category] = budget.budget;
    return acc;
  }, {});

  const remainingBudget = budgets.map((budget) => ({
    category: budget.category,
    remaining: budget.budget - (categorySpending[budget.category] || 0),
  }));

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Spending Insights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium">Total Spending</h3>
          <p className="text-2xl font-semibold"> ₹{totalSpending.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium">Highest Spending Category</h3>
          <p className="text-2xl font-semibold">{highestSpendingCategory.category}</p>
          <p className="text-xl"> ₹{highestSpendingCategory.amount.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium">Remaining Budgets</h3>
          {remainingBudget.map(({ category, remaining }) => (
            <p key={category} className="text-xl">
              {category}:  ₹{remaining.toFixed(2)} remaining
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}







