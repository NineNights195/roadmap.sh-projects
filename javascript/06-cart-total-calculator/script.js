const calculateSubtotal = (items) => {
    return items.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);
};

const calculateDiscount = (subtotal, discountPercent) => {
    return (discountPercent/100) * subtotal;
};

const calculateTax = (amountAfterDiscount, taxPercent) => {
    return (taxPercent/100) * amountAfterDiscount;
};

const createCartSummary = (items, discountPercent, taxPercent) => {
    const subtotal = calculateSubtotal(items);
    const amountAfterDiscount = subtotal - calculateDiscount(subtotal, discountPercent);
    return sum = {
        subtotal: subtotal,
        discount: calculateDiscount(subtotal, discountPercent),
        tax: calculateTax(amountAfterDiscount, taxPercent),
        total: amountAfterDiscount + calculateTax(amountAfterDiscount, taxPercent)
    }
};

const cartItems = [
    { name: 'Notebook', price: 10, quantity: 2 },
    { name: 'Pen', price: 2, quantity: 5 },
    { name: 'Bag', price: 30, quantity: 1 },
];

console.log(createCartSummary(cartItems, 10, 5)); // { subtotal: 60, discount: 6, tax: 2.7, total: 56.7 }
console.log(calculateSubtotal(cartItems)); // 60
  
const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10)); // { subtotal: 50, discount: 0, tax: 5, total: 55 }
