
import { connectToDB } from '@/lib/mongodb';
import { Transaction } from '@/models/Transaction';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { amount, description, date, category } = await req.json();

    if (!amount || !description || !date || !category) {
      return NextResponse.json(
        { success: false, message: 'Missing fields' },
        { status: 400 }
      );
    }

    await connectToDB();

    const newTransaction = await Transaction.create({
      amount,
      description,
      date: new Date(date),
      category,
    });

    return NextResponse.json({ success: true, transaction: newTransaction });
  } catch (err) {
    console.error('POST /transactions error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to create transaction' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDB();
    const transactions = await Transaction.find().sort({ date: -1 }); // latest first
    return NextResponse.json({ success: true, transactions });
  } catch (err) {
    console.error('GET /transactions error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch transactions' },
      { status: 500 }
    );
  }
}

