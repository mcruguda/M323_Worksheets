// const people = [
//     {id: 1, firstName: "Cyrill", lastName: "Augustiny", age: 22},
//     {id: 2, firstName: "Leandro", lastName: "Schultze", age: 16},
//     {id: 3, firstName: "Jacopo", lastName: "Mitrugno", age: 18}
// ]
// console.log(people);

// const updatedPeople = [...people,
//     {id: 4, firstName: "Noah", lastName: "Lezama", age: 17}
// ]
// console.log(updatedPeople);

// function age(id) {
//     return function agePerson(person) {
//         console.log(id);
//         console.log(person.id);
//         if(person.id === id) {
//             return {...person, age: person.age + 1}
//         }
//         else {
//             return {...person};
//         }
//     }
// }
// const agedPeople = updatedPeople.map(age(2));
// console.log(agedPeople);

// const fruits = [
//     {id: 1, name: "Banana"},
//     {id: 2, name: "Pineapple"},
//     {id: 3, name: "Coconut"}
// ]
// const removeSmallestIdFruit = fruits.filter((fruit) => {
//     return fruit.id !== 1;
// });
// console.log(removeSmallestIdFruit);

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];
const reviewsTotal = reviews.reduce((a, b) => a + b)
const reviewsAverage = reviewsTotal / reviews.length;
console.log(reviewsAverage);

const groupNumbers = (groups, number) => {
    const {good = 0, ok = 0, bad = 0} = groups;
    if(number >= 4) {
        return {...groups, good: good + 1}
    } else if(number >= 2.5) {
        return {...groups, ok: ok + 1}
    } else {
        return {...groups, bad: bad + 1}
    }
}
const groupedReviews = reviews.reduce(groupNumbers, {});
console.log(groupedReviews);