const calculateTotal = (expenses) => {
    return expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);
};

const calculateCategoryTotal = (expenses, category) => {
    return calculateTotal(expenses.filter((expense) => expense.category === category));
};

const findLargestExpense = (expenses) => {
    return expenses.reduce((largest, expense) => {
        return (expense.amount > largest.amount) ? expense : largest;
    });
};

const createExpenseSummary = (expenses) => {
    return sum = {
        total: calculateTotal(expenses),
        foodTotal: calculateCategoryTotal(expenses, 'food'),
        transportTotal: calculateCategoryTotal(expenses, 'transport'),
        largestExpense: findLargestExpense(expenses)
    }
}

const expenses = [
    { id: 1, category: 'food', amount: 24 },
    { id: 2, category: 'transport', amount: 15 },
    { id: 3, category: 'food', amount: 18 },
    { id: 4, category: 'books', amount: 40 },
];

console.log(calculateTotal(expenses));
console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));
