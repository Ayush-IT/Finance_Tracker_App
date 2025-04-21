
import TransactionForm from "@/components/TransactionForm";
import TransactionList from "@/components/TransactionList";
import SummaryCards from "@/components/SummaryCards";
import CategoryPieChart from "@/components/CategoryPieChart";

import SpendingInsights from "@/components/SpendingInsights";
import MonthlySpendingTrend from "@/components/MonthlySpendingTrend";
import BudgetComparisonChart from '@/components/BudgetComparisonChart';
import CategoryBudgetForm from '@/components/CategoryBudgetForm';



export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">💸 Finance Tracker</h1>

      {/* --- Transaction Input Section --- */}
      <section className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Add a Transaction</h2>
        <p className="text-sm text-gray-500 mb-4">Enter your daily expenses with category and description.</p>
        <TransactionForm />
      </section>

      {/* --- Budget Setup Section --- */}
      <section className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-2">Set Monthly Budgets</h2>
        <p className="text-sm text-gray-500 mb-4">
          Assign monthly budgets for each category to track your spending habits.
        </p>
        <CategoryBudgetForm />
      </section>

      {/* --- Analytics & Insights --- */}
      <SummaryCards />
      <CategoryPieChart />
      <BudgetComparisonChart />
      <SpendingInsights />
      <MonthlySpendingTrend />
      <TransactionList />
    </main>
  );
}






