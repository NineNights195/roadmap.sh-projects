# Expense Summary

Given a list of expenses, calculate useful totals and identify the largest expense. The final summary should reuse the smaller helper functions.

Write these functions:
- `calculateTotal(expenses)` should return the total amount spent.
- `calculateCategoryTotal(expenses, category)` should return the total for one category.
- `findLargestExpense(expenses)` should return the full expense object with the largest amount.
- `createExpenseSummary(expenses)` should return `total`, `foodTotal`, `transportTotal`, and `largestExpense`.

Sample checks:
```js
const expenses = [
  { id: 1, category: 'food', amount: 24 },
  { id: 2, category: 'transport', amount: 15 },
  { id: 3, category: 'food', amount: 18 },
  { id: 4, category: 'books', amount: 40 },
];

console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));
```

Expected output:
```txt
{ total: 97, foodTotal: 42, transportTotal: 15, largestExpense: { id: 4, category: "books", amount: 40 } }
42
0
{ id: 4, category: "books", amount: 40 }
```

`findLargestExpense` should return the whole expense object, not only the amount.

---
https://roadmap.sh/projects/js-expense-summary