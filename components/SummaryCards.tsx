'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

type Transaction = {
  amount: number;
  description: string;
  date: string;
};

export default function SummaryCards() {
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
        console.error('Error loading summary:', err);
      }
    };

    fetchTransactions();
  }, []);

  const totalSpent = transactions.reduce((sum, t) => sum + t.amount, 0);
  const recentTxn = transactions[0];
  const txnCount = transactions.length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
      <Card>
        <CardContent className="p-4">
          <h3 className="text-sm text-gray-500">Total Expenses</h3>
          <p className="text-xl font-bold text-rose-600">₹{totalSpent}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h3 className="text-sm text-gray-500">Transactions</h3>
          <p className="text-xl font-bold">{txnCount}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h3 className="text-sm text-gray-500">Most Recent</h3>
          {recentTxn ? (
            <>
              <p className="text-sm font-medium">{recentTxn.description}</p>
              <p className="text-xs text-gray-400">
                {new Date(recentTxn.date).toLocaleDateString()}
              </p>
            </>
          ) : (
            <p className="text-sm text-gray-400">No data</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
