# 💸 Finance Tracker App

A modern, full-stack finance tracking application built with Next.js and TypeScript. This app helps users manage their daily expenses, set budgets for different categories, and gain insights into their spending habits through interactive analytics and charts.

---

## 🚀 Features

- **Add Transactions:** Log daily expenses with categories and descriptions.
- **Set Monthly Budgets:** Assign and manage budgets for each spending category.
- **Analytics & Insights:**
  - View summary cards for quick financial stats.
  - Visualize spending by category (pie chart).
  - Compare actual spending vs. budget (bar/line chart).
  - Track monthly spending trends.
  - Get actionable spending insights.
- **Transaction History:** Review and manage all past transactions.
- **Responsive UI:** Clean, user-friendly interface with reusable components.

---

## 📂 Project Structure

```
financeapp/
│
├── app/                   # Main app logic, routes, and pages (Next.js app directory)
│   ├── api/               # API route handlers (e.g., for transactions, budgets)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page (main dashboard)
│
├── components/            # Reusable UI and dashboard components
│   ├── BudgetComparisonChart.tsx
│   ├── CategoryBudgetForm.tsx
│   ├── CategoryPieChart.tsx
│   ├── MonthlySpendingTrend.tsx
│   ├── SpendingInsights.tsx
│   ├── SummaryCards.tsx
│   ├── TransactionForm.tsx
│   └── TransactionList.tsx
│
├── lib/                   # Utility functions and database connectors
│   ├── mongodb.ts         # MongoDB connection logic
│   └── utils.ts           # Miscellaneous utilities
│
├── models/                # Data models (TypeScript interfaces/schemas)
│   ├── Budget.ts
│   └── Transaction.ts
│
├── public/                # Static assets (images, icons, etc.)
│
├── .env                   # Environment variables (not committed)
├── package.json           # Project metadata and dependencies
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
├── eslint.config.mjs      # Linting configuration
├── postcss.config.mjs     # PostCSS configuration
├── README.md              # Project documentation
└── ...
```

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Database:** MongoDB (via lib/mongodb.ts)
- **Styling:** Tailwind CSS, PostCSS
- **Charts:** Likely using a charting library (e.g., Chart.js or Recharts)
- **Linting:** ESLint

---

## ⚙️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/financeapp.git
   cd financeapp
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
yarn install
   ```
3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in required values (e.g., MongoDB URI).

4. **Run the development server:**
   ```bash
   npm run dev
   # or
yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📡 API Endpoints

### Transactions

**Base URL:** `/api/transactions`

- **GET** `/api/transactions`
  - **Description:** Fetch all transactions (sorted by latest first).
  - **Response:**
    ```json
    {
      "success": true,
      "transactions": [
        {
          "_id": "...",
          "amount": 100,
          "description": "Grocery shopping",
          "date": "2025-04-21T00:00:00.000Z",
          "category": "Food"
        },
        ...
      ]
    }
    ```

- **POST** `/api/transactions`
  - **Description:** Add a new transaction.
  - **Request Body:**
    ```json
    {
      "amount": 100,
      "description": "Grocery shopping",
      "date": "2025-04-21",
      "category": "Food"
    }
    ```
  - **Response:**
    ```json
    {
      "success": true,
      "transaction": { ... }
    }
    ```

### Budgets

**Base URL:** `/api/budgets`

- **GET** `/api/budgets`
  - **Description:** Fetch all category budgets.
  - **Response:**
    ```json
    {
      "success": true,
      "budgets": [
        {
          "_id": "...",
          "category": "Food",
          "budget": 500
        },
        ...
      ]
    }
    ```

- **POST** `/api/budgets`
  - **Description:** Set or update a budget for a category.
  - **Request Body:**
    ```json
    {
      "category": "Food",
      "budget": 500
    }
    ```
  - **Response:**
    ```json
    {
      "success": true,
      "budget": { ... }
    }
    ```

---

## 📝 Usage Guide

- **Add a Transaction:**
  - Use the "Add a Transaction" form to log new expenses.
- **Set Budgets:**
  - Assign monthly budgets per category in the "Set Monthly Budgets" section.
- **View Analytics:**
  - Explore summary cards, pie charts, budget comparisons, and trends.
- **Review Transactions:**
  - Scroll down to see your transaction history and insights.

---

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes and push: `git push origin feature/your-feature`
4. Open a Pull Request describing your changes.

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgements

- Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [MongoDB](https://www.mongodb.com/).
- Inspired by the need for better personal finance management.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
