// const studentGrades = [ 
//     {name: 'Joe', grade: 88},
//     {name: 'Jen', grade: 94},
//     {name: 'Steph', grade: 77},
//     {name: 'Allen', grade: 60},
//     {name: 'Gina', grade: 54},
//   ];

// //function gradeReview(message) {
//     function gradeToLetter(student) {
//         if(student.grade >= 90) {
//             const gradeLetter = "A";
//             return `Excellent Job ${student.name} you got a ${gradeLetter}`;
//         } else if(student.grade >= 80) {
//             const gradeLetter = "B";
//             return `Nice Job ${student.name} you got a ${gradeLetter}`;
//         } else if(student.grade >= 70) {
//             const gradeLetter = "C";
//             return `Well done ${student.name} you got a ${gradeLetter}`;
//         } else if(student.grade >= 60) {
//             const gradeLetter = "D";
//             return `What happened ${student.name} you got a ${gradeLetter}`;
//         } else {
//             const gradeLetter = "F";
//             return `Not good ${student.name} you got a ${gradeLetter}`;
//         }
//     }
// //}
// const studentGradeMessages = studentGrades.map(gradeToLetter);
// console.log(studentGradeMessages)

// //Functional
// function getGradeLetter(student) {
//     if(student.grade >= 90) return "A"; 
//     else if(student.grade >= 80) return "B";
//     else if(student.grade >= 70) return "C";
//     else if(student.grade >= 60) return "D";
//     else return "F";
// }

// function getMessage(student) {
//     if(student.grade >= 90) return "Excelletn Job"; 
//     else if(student.grade >= 80) return "Nice Job";
//     else if(student.grade >= 70) return "Well done";
//     else if(student.grade >= 60) return "What happened";
//     else return "Not good";
// }

// function gradeFeedback(gradeLetter) {
//     return (getMessage) => {
//         return (student) => {
//             return `${getMessage(student)} ${student.name}, you got an ${gradeLetter(student)}`;
//         }
//     }
// }
// const studentReview = studentGrades.map(gradeFeedback(getGradeLetter)(getMessage));
// console.log(studentReview);

// const rambda = require("../ramda.min.js");
// const namesArray = ["Cyrill", "Leandro", "Jacopo"];
// const introduce = rambda.curry((introduction, question, name) => {
//     return `${introduction} ${name}, ${question}`
// });
// const nameExchangeQuestion = introduce("Hello there, my name is")("what's your name?")
// console.log(namesArray.map(nameExchangeQuestion));

const numbersArray = [1, 2, 3, 4, 5];

function getImpureArrayLength() {
    console.log(`Impure: ${numbersArray.length}`);
}
getImpureArrayLength();
function getPureArrayLength(array) {
    return array.length;
}
const numbersArrayLength = getPureArrayLength(numbersArray);
console.log(`Pure: ${numbersArrayLength}`);