const rambda = require("../ramda.min.js");
const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

// const splittedSentence = rambda.compose(rambda.split);
// const splittedSentenceArray = splittedSentence("", sentence);

// function countNumbers(splittedSentence) {
//     let i = 0;
//     for(splittedValue of splittedSentence) {
//         if(!isNaN(splittedValue) && splittedValue !== " ") {
//             i++;
//         }
//     }
//     return i;
// }

// console.log(countNumbers(splittedSentenceArray))

// const groupSentence = (groups, sentence) => {
//     const {number = 0, notNumber = 0} = groups;
//     for(value of sentence) {
//         if(!isNaN(splittedValue) && splittedValue !== " ") {
//             return {...groups, number: number + 1}
//         } else return {...groups, notNumber: notNumber + 1};
//     }
// }

// const groupedSentenceValues = splittedSentence.reduce(splittedSentenceArray, {});
// console.log(groupedSentenceValues);

const isDigit = (char) => !isNaN(char) && char !== " ";
const filterDigits = rambda.filter(isDigit);
const countElements = (arr) => arr.length;

const countNumbers = rambda.compose(
    countElements,
    filterDigits,
    rambda.split("")
);

const result = countNumbers(sentence);
console.log(result);