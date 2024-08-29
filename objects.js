const person = {
    firstName: "Cyrill",
    lastName: "Augustiny",
    age: 22,
    mother: {
        firstName: "Karin",
        lastName: "Augustiny",
        age: 50,
        mother: {
            firstName: "..."
        }
    }
}
console.log(person.firstName, person.lastName, person.age, person.mother);