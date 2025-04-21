// import mongoose, { Schema, models } from 'mongoose';

// const TransactionSchema = new Schema({
//   amount: {
//     type: Number,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     required: true,
//   },
// }, {
//   timestamps: true,
// });

// export const Transaction = models.Transaction || mongoose.model('Transaction', TransactionSchema);




import mongoose, { Schema, models } from 'mongoose';

const TransactionSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Food', 'Travel', 'Shopping', 'Utilities', 'Entertainment', 'Other'],
  },
});

// export default mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);
export const Transaction = models.Transaction || mongoose.model('Transaction', TransactionSchema);






