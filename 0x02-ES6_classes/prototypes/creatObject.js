/**
 * OBJECT
 * in Javascript, object is a collection of key-value pairs
 * also known as properties, that are used to represent entity,
 * concept, or data structure. It is a fundamental datatype in JS
 * that is used to store and organize data in a structural way.
 */
const toyBox = {
    favoriteToy: "Toy Car",
    numberOfToys: 10
};

console.log(toyBox); // log all properties
console.log(toyBox.favoriteToy) // accessing property

const person = {
    name: "Josh",
    age: 25,
    occupation: "Developer"
};
console.log(person.name);

// adding & Modifying Properties
toyBox.newToy = "Teddy Bear";
console.log(toyBox.newToy);
console.log(toyBox);

// modifying an existing property
toyBox.numberOfToys = 11;
console.log(toyBox)

// deleting properties
delete toyBox.favoriteToy
console.log(typeof(toyBox.favoriteToy)); // why undefined?

export default toyBox;