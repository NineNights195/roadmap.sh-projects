const getLetterGrade = (score) => {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else if (score < 60) return "F";
    else return undefined;
};

const hasPassed = (score) => score >= 60;

const getFeedback = (grade) => {
    switch (grade) {
        case "A":
            return "Excellent work";
        case "B":
            return "Good job";
        case "C":
            return "You passed";
        case "D":
            return "You passed";
        case "F":
            return "Keep practicing";
        default:
            return "";
    };
};

const createGradeReport = (name, score) => {
    const grade = getLetterGrade(score);
    return gradeReport = {
        name: name,
        score: score,
        grade: grade,
        passed: hasPassed(score),
        feedback: getFeedback(grade)
    };
};

console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));
