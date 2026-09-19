# Grade Report Generator

Turn a numeric score into a grade report. The report should include the letter grade, whether the student passed, and a short feedback message.

Write these functions:
- `getLetterGrade(score)` should return `"A"`, `"B"`, `"C"`, `"D"`, or `"F"` based on the score.
- `hasPassed(score)` should return `true` when the score is `60` or higher.
- `getFeedback(grade)` should return a short message for the grade.
- `createGradeReport(name, score)` should return one object with `name`, `score`, `grade`, `passed`, and `feedback`.

Sample checks:
```js
console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));
```

Expected output:
```txt
{ name: "Ava", score: 92, grade: "A", passed: true, feedback: "Excellent work" }
{ name: "Noah", score: 48, grade: "F", passed: false, feedback: "Keep practicing" }
{ name: "Mina", score: 75, grade: "C", passed: true, feedback: "You passed" }
{ name: "Sam", score: 60, grade: "D", passed: true, feedback: "You passed" }
```

Use the grade from `getLetterGrade` when choosing the feedback.

---
https://roadmap.sh/projects/js-grade-report-generator