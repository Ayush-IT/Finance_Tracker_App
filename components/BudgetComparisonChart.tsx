
'use client';

import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { toast } from 'sonner'; // toast from shadcn

export default function BudgetComparisonChart() {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [overspentCategories, setOverspentCategories] = useState([]);
  const [hoveredCategories, setHoveredCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res1 = await fetch('/api/transactions');
      const txns = await res1.json();
      if (txns.success) setTransactions(txns.transactions);

      const res2 = await fetch('/api/budgets');
      const bdata = await res2.json();
      if (bdata.success) setBudgets(bdata.budgets);
    };
    fetchData();
  }, []);

  const categoryData = transactions.reduce((acc, txn) => {
    if (!acc[txn.category]) acc[txn.category] = 0;
    acc[txn.category] += txn.amount;
    return acc;
  }, {});

  const chartData = budgets.map((b) => {
    const actual = categoryData[b.category] || 0;
    return {
      category: b.category,
      actual,
      budget: b.budget,
      overspent: actual > b.budget,
    };
  });

  // Initial overspending alert
  useEffect(() => {
    const overspent = chartData.filter((entry) => entry.overspent);

    if (overspent.length > 0) {
      const newCategories = overspent
        .map((entry) => entry.category)
        .filter((cat) => !overspentCategories.includes(cat));

      if (newCategories.length > 0) {
        toast.warning(`Overspending detected in: ${newCategories.join(', ')}`);
      }

      setOverspentCategories(overspent.map((entry) => entry.category));
    }
  }, [budgets, transactions]);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Budget vs Actual Comparison</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="budget" fill="#8884d8" />

          <Bar
            dataKey="actual"
            fill="#82ca9d"
            onMouseEnter={(data) => {
              const { payload } = data;
              if (payload.overspent && !hoveredCategories.includes(payload.category)) {
                toast.warning(`⚠️ Overspending on ${payload.category}`, {
                  description: `Budget: ₹${payload.budget} | Actual: ₹${payload.actual}`,
                });
                setHoveredCategories((prev) => [...prev, payload.category]);
              }
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

