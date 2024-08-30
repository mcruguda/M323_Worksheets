// const PI = 3.14159265359;
// console.log(PI);

const person = {
    firstName: "Cyrill",
    lastName: "Augustiny",
    age: 21
}

const updatedPerson = {
    ...person,
    gender: "Male"
}

const updatedPerson2 = {
    ...updatedPerson,
    age: 22
}
console.log(updatedPerson2);

const {gender, ...removedAttributePerson} = updatedPerson2;
console.log(removedAttributePerson);