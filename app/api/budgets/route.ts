import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import { Budget } from '@/models/Budget';

export async function POST(req: Request) {
  try {
    const { category, budget } = await req.json();

    if (!category || !budget) {
      return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 });
    }

    await connectToDB();

    const updatedBudget = await Budget.findOneAndUpdate(
      { category },
      { budget },
      { upsert: true, new: true }
    );

    return NextResponse.json({ success: true, budget: updatedBudget });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to save budget' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDB();
    const budgets = await Budget.find({});
    return NextResponse.json({ success: true, budgets });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch budgets' }, { status: 500 });
  }
}