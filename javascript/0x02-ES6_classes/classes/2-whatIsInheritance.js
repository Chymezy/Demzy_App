class Animal {
    constructor(name){
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound`;
    }
}

// create another class and inherit the first class
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        return `${this.name} barks.`;
    }
}
const myDog = new Dog('Buddy', 'Golden-hybrid');
console.log(myDog.__proto__);
console.log(Object.getPrototypeOf(myDog));
console.log(myDog.speak());