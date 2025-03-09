const person = {
    name: "hena",
    age : 10,
    friends : ["hero alom","korim"]
}

const newPerson = JSON.stringify(person); // this is the method of converting Object notation (JSON)
console.log(newPerson);

console.log(typeof person);
console.log(typeof newPerson);

const newPerson2 = JSON.parse(newPerson);
console.log(newPerson2);
