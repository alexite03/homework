const animal = {
species: "Cow", 
age: 8, 
name: "Kossa"
}

console.log(animal)

function aging(obj) {
    obj.age++

    console.log("Animal is aging by 1 year")
    console.log(animal)
}

aging(animal)