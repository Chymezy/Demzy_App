class Dog {
    // create a constructor
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
    // create other methods
    bark() {
        return(`${this.name} says Woof!`);
    }
}

const dog = new Dog('Jimmy', 'Hybrid');
console.log(dog.bark());
console.log(dog.name);
console.log(dog.breed);
console.log(Object.getPrototypeOf(dog)); // retrieve prototype if any
console.log(dog.type); //checks inheritance