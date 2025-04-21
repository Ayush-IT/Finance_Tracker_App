import mongoose, { Schema, models } from 'mongoose';

const BudgetSchema = new Schema({
  category: {
    type: String,
    required: true,
    enum: ['Food', 'Travel', 'Shopping', 'Utilities', 'Entertainment', 'Other'],
  },
  budget: {
    type: Number,
    required: true,
  },
});

export const Budget = models.Budget || mongoose.model('Budget', BudgetSchema);