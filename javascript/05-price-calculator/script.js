const calculateDiscount = (price, discountPercent) => {return (discountPercent/100) * price}
const calculateTax = (priceAfterDiscount, taxPercent) => {return (taxPercent/100) * priceAfterDiscount}
const calculateFinalPrice = (price, discountPercent, taxPercent) => {
    let priceAfterDiscount = price - calculateDiscount(price, discountPercent);
    finalPrice = priceAfterDiscount + calculateTax(priceAfterDiscount, taxPercent);
    return finalPrice;
}
const createPriceSummary = (price, discountPercent, taxPercent) => {
    let priceAfterDiscount = price - calculateDiscount(price, discountPercent);
    const summary = {
        price: price,
        discount: calculateDiscount(price, discountPercent),
        tax: calculateTax(priceAfterDiscount, taxPercent),
        finalPrice: calculateFinalPrice(price, discountPercent, taxPercent)
    }
    return summary;
}

console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));
