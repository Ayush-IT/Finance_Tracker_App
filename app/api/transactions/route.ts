import { connectToDB } from '@/lib/mongodb';
import { Transaction } from '@/models/Transaction';
import { NextResponse } from 'next/server';


// export async function POST(req: Request) {
//   try {
//     const { amount, description, date } = await req.json();
//     await connectToDB();

//     const newTransaction = await Transaction.create({
//       amount,
//       description,
//       date: new Date(date),
//     });

//     return NextResponse.json({ success: true, transaction: newTransaction });
//   } catch (err) {
//     return NextResponse.json({ success: false, error: 'Failed to create transaction' }, { status: 500 });
//   }
// }


export async function POST(req: Request) {
    try {
      const { amount, description, date, category } = await req.json();
  
      // ✅ Validate fields
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
      return NextResponse.json(
        { success: false, error: 'Failed to create transaction' },
        { status: 500 }
      );
    }
  }


// export async function POST(req: Request) {
//     try {
//       const { amount, description, date, category, budget } = await req.json();
  
//       // Validate required fields
//       if (!amount || !description || !date || !category) {
//         return NextResponse.json(
//           { success: false, message: 'Missing fields' },
//           { status: 400 }
//         );
//       }
  
//       await connectToDB();
  
//       const newTransaction = await Transaction.create({
//         amount,
//         description,
//         date: new Date(date),
//         category,
//         ...(budget && { budget }), // ✅ Only include if budget is provided
//       });
  
//       return NextResponse.json({ success: true, transaction: newTransaction });
//     } catch (err) {
//       return NextResponse.json(
//         { success: false, error: 'Failed to create transaction' },
//         { status: 500 }
//       );
//     }
//   }



// export async function POST(req: Request) {
//     await connectDB();
  
//     const { amount, description, date, category } = await req.json();
  
//     if (!amount || !description || !date || !category) {
//       return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 });
//     }
  
//     const newTransaction = await Transaction.create({ amount, description, date, category });
  
//     return NextResponse.json({ success: true, data: newTransaction });
//   }
  
  // ✅ NEW: GET all transactions
  export async function GET() {
    try {
      await connectToDB();
      const transactions = await Transaction.find().sort({ date: -1 }); // latest first
      return NextResponse.json({ success: true, transactions });
    } catch (err) {
      return NextResponse.json({ success: false, error: 'Failed to fetch transactions' }, { status: 500 });
    }
  }
