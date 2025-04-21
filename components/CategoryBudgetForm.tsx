// 'use client';

// import { useState } from 'react';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';

// const categories = ['Food', 'Travel', 'Shopping', 'Utilities', 'Entertainment', 'Other'];

// export default function CategoryBudgetForm() {
//   const [category, setCategory] = useState('');
//   const [budget, setBudget] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!category || !budget) return alert('All fields are required');

//     const res = await fetch('/api/transactions', {
//       method: 'POST',
//       body: JSON.stringify({ category, budget: +budget }),
//     });

//     if (res.ok) {
//       setCategory('');
//       setBudget('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end mb-6">
//       <Select value={category} onValueChange={(value) => setCategory(value)}>
//         <SelectTrigger>
//           <SelectValue placeholder="Select Category" />
//         </SelectTrigger>
//         <SelectContent>
//           {categories.map((cat) => (
//             <SelectItem key={cat} value={cat}>{cat}</SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//       <Input
//         type="number"
//         placeholder="Set Monthly Budget"
//         value={budget}
//         onChange={(e) => setBudget(e.target.value)}
//       />
//       <Button type="submit" className="col-span-full sm:col-auto">Set Budget</Button>
//     </form>
//   );
// }




// 'use client';

// import { useState } from 'react';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';

// const categories = ['Food', 'Travel', 'Shopping', 'Utilities', 'Entertainment', 'Other'];

// export default function CategoryBudgetForm() {
//   const [category, setCategory] = useState('');
//   const [budget, setBudget] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!category || !budget) return alert('All fields are required');

//     const res = await fetch('/api/budgets', {
//       method: 'POST',
//       body: JSON.stringify({ category, budget: +budget }),
//     });

//     if (res.ok) {
//       setCategory('');
//       setBudget('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end mb-6">
//       <Select value={category} onValueChange={(value) => setCategory(value)}>
//         <SelectTrigger>
//           <SelectValue placeholder="Select Category" />
//         </SelectTrigger>
//         <SelectContent>
//           {categories.map((cat) => (
//             <SelectItem key={cat} value={cat}>{cat}</SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//       <Input
//         type="number"
//         placeholder="Set Monthly Budget"
//         value={budget}
//         onChange={(e) => setBudget(e.target.value)}
//       />
//       <Button type="submit" className="col-span-full sm:col-auto">Set Budget</Button>
//     </form>
//   );
// }




// 'use client';

// import React, { useState } from 'react'; // ✅ Import React for FormEvent
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';

// const categories = ['Food', 'Travel', 'Shopping', 'Utilities', 'Entertainment', 'Other'];

// export default function CategoryBudgetForm() {
//   const [category, setCategory] = useState('');
//   const [budget, setBudget] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!category || !budget) return alert('All fields are required');

//     const res = await fetch('/api/budgets', {
//       method: 'POST',
//       body: JSON.stringify({ category, budget: +budget }),
//     });

//     if (res.ok) {
//       setCategory('');
//       setBudget('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end mb-6">
//       <Select value={category} onValueChange={(value) => setCategory(value)}>
//         <SelectTrigger>
//           <SelectValue placeholder="Select Category" />
//         </SelectTrigger>
//         <SelectContent>
//           {categories.map((cat) => (
//             <SelectItem key={cat} value={cat}>{cat}</SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//       <Input
//         type="number"
//         placeholder="Set Monthly Budget"
//         value={budget}
//         onChange={(e) => setBudget(e.target.value)}
//       />
//       <Button type="submit" className="col-span-full sm:col-auto">Set Budget</Button>
//     </form>
//   );
// }



// 'use client';
// import React, { useState } from 'react'; // ✅ Import React for FormEvent
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';

// export default function CategoryBudgetForm() {
//   const [category, setCategory] = useState('');
//   const [budget, setBudget] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!category || !budget) return alert('All fields are required');

//     const res = await fetch('/api/budgets', {
//       method: 'POST',
//       body: JSON.stringify({ category, budget: +budget }),
//     });

//     if (res.ok) {
//       setCategory('');
//       setBudget('');
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end"
//     >
//       <div>
//         <label className="text-sm font-medium block mb-1">Select Category</label>
//         <Select value={category} onValueChange={(value) => setCategory(value)}>
//           <SelectTrigger>
//             <SelectValue placeholder="Choose category" />
//           </SelectTrigger>
//           <SelectContent>
//             {categories.map((cat) => (
//               <SelectItem key={cat} value={cat}>
//                 {cat}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       <div>
//         <label className="text-sm font-medium block mb-1">Monthly Budget (₹)</label>
//         <Input
//           type="number"
//           placeholder="e.g., 3000"
//           value={budget}
//           onChange={(e) => setBudget(e.target.value)}
//         />
//       </div>

//       <Button type="submit" className="mt-2 sm:mt-0">
//         Set Budget
//       </Button>
//     </form>
//   );
// }



// 'use client';
// import React, { useState } from 'react';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';

// // ✅ Define the categories array
// const categories = ['Food', 'Travel', 'Shopping', 'Utilities', 'Entertainment', 'Other'];

// export default function CategoryBudgetForm() {
//   const [category, setCategory] = useState('');
//   const [budget, setBudget] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!category || !budget) return alert('All fields are required');

//     const res = await fetch('/api/budgets', {
//       method: 'POST',
//       body: JSON.stringify({ category, budget: +budget }),
//     });

//     if (res.ok) {
//       setCategory('');
//       setBudget('');
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end"
//     >
//       <div>
//         <label className="text-sm font-medium block mb-1">Select Category</label>
//         <Select value={category} onValueChange={(value) => setCategory(value)}>
//           <SelectTrigger>
//             <SelectValue placeholder="Choose category" />
//           </SelectTrigger>
//           <SelectContent>
//             {categories.map((cat) => (
//               <SelectItem key={cat} value={cat}>
//                 {cat}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       <div>
//         <label className="text-sm font-medium block mb-1">Monthly Budget (₹)</label>
//         <Input
//           type="number"
//           placeholder="e.g., 3000"
//           value={budget}
//           onChange={(e) => setBudget(e.target.value)}
//         />
//       </div>

//       <Button type="submit" className="mt-2 sm:mt-0">
//         Set Budget
//       </Button>
//     </form>
//   );
// }




'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';

// ✅ Defined categories array
const categories = ['Food', 'Travel', 'Shopping', 'Utilities', 'Entertainment', 'Other'];

export default function CategoryBudgetForm() {
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!category || !budget) return alert('All fields are required');

    const res = await fetch('/api/budgets', {
      method: 'POST',
      body: JSON.stringify({ category, budget: +budget }),
    });

    if (res.ok) {
      setCategory('');
      setBudget('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:grid sm:grid-cols-3 gap-4 items-end"
    >
      <div className="w-full">
        <label className="text-sm font-medium block mb-1">Select Category</label>
        <Select value={category} onValueChange={(value) => setCategory(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose category" />
          </SelectTrigger>
          <SelectContent className="w-full max-w-[90vw] z-50">
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="w-full">
        <label className="text-sm font-medium block mb-1">Monthly Budget (₹)</label>
        <Input
          type="number"
          placeholder="e.g., 3000"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>

      <Button type="submit" className="mt-2 sm:mt-0 w-full sm:w-auto">
        Set Budget
      </Button>
    </form>
  );
}







