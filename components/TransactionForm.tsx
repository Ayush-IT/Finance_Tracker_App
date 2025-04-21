

'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';

const categories = ['Food', 'Travel', 'Shopping', 'Utilities', 'Entertainment', 'Other'];

export default function TransactionForm() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [showMessage, setShowMessage] = useState(false); // ✅ State for popup

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !description || !date || !category) {
      return alert('All fields are required');
    }

    const res = await fetch('/api/transactions', {
      method: 'POST',
      body: JSON.stringify({
        amount: +amount,
        description,
        date,
        category,
      }),
    });

    if (res.ok) {
      setAmount('');
      setDescription('');
      setDate('');
      setCategory('');

      // ✅ Show the success message
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end relative"
    >
      <div>
        <label className="text-sm font-medium block mb-1">Amount (₹)</label>
        <Input
          type="number"
          placeholder="e.g., 1200"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm font-medium block mb-1">Description</label>
        <Input
          type="text"
          placeholder="e.g., Grocery shopping"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm font-medium block mb-1">Date</label>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm font-medium block mb-1">Category</label>
        <Select value={category} onValueChange={(value) => setCategory(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="relative col-span-full sm:col-auto mt-2 sm:mt-0">
        <Button type="submit">Add Transaction</Button>

        {/* ✅ Popup Message */}
        {showMessage && (
          <div className="absolute left-0 top-full mt-2 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded shadow-md text-sm">
            Transaction added successfully!
          </div>
        )}
      </div>
    </form>
  );
}