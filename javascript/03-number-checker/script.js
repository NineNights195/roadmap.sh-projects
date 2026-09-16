const isPositive = (number) => {return number>0};
const isNegetive = (number) => {return number<0};
const isZero = (number) => {return number==0};
const isEven = (number) => {return number%2==0};

const describeNumber = (number) => {
    number = {
        positive: isPositive(number),
        negative: isNegetive(number),
        zero: isZero(number),
        even: isEven(number),
        odd: !isEven(number)
    }
    return number;
}

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));
