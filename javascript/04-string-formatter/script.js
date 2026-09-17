const cleanText = (text) => {return text.trim()};
const capitalizeText = (text) => {
    const cleaned = cleanText(text).toLowerCase();
    return cleaned[0].toUpperCase() + cleaned.slice(1);
};
const formatDisplayName = (firstName, lastName) => {
    return capitalizeText(firstName) + " " + capitalizeText(lastName);
}

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));
