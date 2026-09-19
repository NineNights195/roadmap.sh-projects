# Greeting Builder

Build a small greeting helper. The main function, `createGreeting`, should take a person's first name, last name, and time of day, then return one greeting string.

Write these functions:
 - `formatName(firstName, lastName)` should return the first and last name as one string.
 - `getGreeting(timeOfDay)` should return `"Good morning"`, `"Good afternoon"`, or `"Good evening"`.
 - `createGreeting(firstName, lastName, timeOfDay)` should use the other two functions and return the final greeting.

Sample checks:
```js
console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));
```

Expected output:
```txt
Good morning, Ava Stone
Good evening, Noah Kim
Good afternoon, Mina Patel
```

Your functions should return strings. Use `console.log` only to test your answer.

---
https://roadmap.sh/projects/js-greeting-builder