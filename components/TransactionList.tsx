

'use client';

import { useEffect, useState } from 'react';

type Transaction = {
  _id: string;
  amount: number;
  description: string;
  date: string;
  category: string; // ✅ new field
};

export default function TransactionList() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch('/api/transactions');
        const data = await res.json();
        if (data.success) {
          setTransactions(data.transactions);
        }
      } catch (err) {
        console.error('Failed to fetch:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Transaction History</h2>

      {loading ? (
        <p>Loading...</p>
      ) : transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((txn) => (
            <li
              key={txn._id}
              className="p-4 border rounded-md"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{txn.description}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(txn.date).toLocaleDateString()}
                  </p>
                  <p>• {txn.category}</p>
                </div>
                <p className="font-semibold text-green-600">₹{txn.amount}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

