// 1. Simple Imperative Example

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
const filteredFruits = []
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].includes('e')) {
    filteredFruits.push(fruits[i])
  }
}
console.log(filteredFruits)

// 2. Moderate Imperative Example

const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Jim', age: 17 },
  { name: 'Joe', age: 15 },
]

for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 18) {
    users[i].isAdult = true
  } else {
    users[i].isAdult = false
  }
}
console.log(users)

// 3. Complex Imperative Example

const animals = [
  { name: 'Fluffy', type: 'rabbit' },
  { name: 'Caro', type: 'dog' },
  { name: 'Hamilton', type: 'dog' },
  { name: 'Harold', type: 'fish' },
  { name: 'Ursula', type: 'cat' },
  { name: 'Jimmy', type: 'fish' },
]

const groupedAnimals = {}
for (let i = 0; i < animals.length; i++) {
  const animal = animals[i]
  if (!groupedAnimals[animal.type]) {
    groupedAnimals[animal.type] = []
  }
  groupedAnimals[animal.type].push(animal)
}
console.log(groupedAnimals)
