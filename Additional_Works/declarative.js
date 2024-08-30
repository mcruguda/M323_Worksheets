const animals = [
    { name: 'Fluffy', type: 'rabbit' },
    { name: 'Caro', type: 'dog' },
    { name: 'Hamilton', type: 'dog' },
    { name: 'Harold', type: 'fish' },
    { name: 'Ursula', type: 'cat' },
    { name: 'Jimmy', type: 'fish' },
  ]

const groupAnimals = (groups, animal) => {
    const {rabbit = 0, dog = 0, fish = 0, cat = 0, unknown = 0} = groups;
    if(animal.type === 'rabbit') return {...groups, rabbit: rabbit + 1}
    if(animal.type === 'dog') return {...groups, dog: dog + 1}
    if (animal.type === 'fish') return {...groups, fish: fish + 1}
    if (animal.type === 'cat') return {...groups, cat: cat + 1}
    return {...groups, unknown: unknown + 1}
}
const groupedAnimals = animals.reduce(groupAnimals, {});
console.log(groupedAnimals);


const groupAnimalsByType = (groups, animal) => {
    if(!groups[animal.type]) return {...groups, [animal.type]: 1}
    return {...groups, [animal.type]: groups[animal.type] + 1}
}

const dynamicGroupedAnimals = animals.reduce(groupAnimals, {});
console.log(dynamicGroupedAnimals);