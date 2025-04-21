'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Transaction = {
  amount: number;
  category: string;
  date: string;
};

export default function MonthlySpendingTrend() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch('/api/transactions');
        const data = await res.json();
        if (data.success) {
          setTransactions(data.transactions);
        }
      } catch (err) {
        console.error('Error loading transactions for monthly trend:', err);
      }
    };

    fetchTransactions();
  }, []);

  // Group transactions by month and year
  const monthlySpending = transactions.reduce((acc: Record<string, number>, txn) => {
    const monthYear = new Date(txn.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    if (!acc[monthYear]) acc[monthYear] = 0;
    acc[monthYear] += txn.amount;
    return acc;
  }, {});

  const chartData = Object.entries(monthlySpending).map(([date, amount]) => ({
    date,
    amount,
  }));

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Monthly Spending Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
