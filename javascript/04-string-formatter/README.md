# String Formatter

A signup form is receiving names with inconsistent spacing and casing. Normalize the names before showing them back to the user.

Write these functions:
- `cleanText(text)` should remove spaces from the start and end of a string.
- `capitalize(text)` should uppercase the first character and lowercase the rest.
- `formatDisplayName(firstName, lastName)` should clean and capitalize both names, then return the full display name.

Sample checks:
```js
console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));
```

Expected output:
```txt
Ava Stone
Noah Kim
Mina Patel
```

`formatDisplayName` should reuse the smaller helpers instead of repeating all the string cleanup work.

---
https://roadmap.sh/projects/js-string-formatter