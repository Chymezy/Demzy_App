/**
 * Prototype
    Imagine that every object box can point to another box 
    called its prototype. This prototype box also has 
    pockets (properties), and if you can’t find something 
    in your first box, you can look in the prototype box. 
    This way, boxes can share stuff without having to keep 
    copies of everything.

    Note that JS all objects are instances of the 'Object' prototypes
    Every object inherits from Object prototypes.
    This is different from Python, where objects don't have a 
    common base class like Object.
 */
const animal =  {
    type: 'Mammal',
    makeSound() {
        console.log('Some generic sound');
    }
};

const dog = Object.create(animal);
dog.bark = () => {
    console.log('Woof!');
}

console.log(dog.type); // Mammal (inherited from animal)
console.log(Object.getPrototypeOf(dog)); // get object prototpye
console.log(dog.__proto__); // deprecated way of get obj prototype
console.dir(dog); // inspect an object's prototype chain

const obj = { a: 1, b: 2 };
const prototype = { c: 3, d: 4 };
Object.setPrototypeOf(obj, prototype);
console.log(Object.getPrototypeOf(obj));
console.log(Object.prototype.toString.call(obj));

console.log(obj.__proto__); // Output: { c: 3, d: 4 }

function getPrototypeChain(obj) {
    const chain = [];
    while (obj !== null) {
      chain.push(obj);
      obj = Object.getPrototypeOf(obj);
    }
    return chain;
  }
  
  const obj1 = { a: 1, b: 2 };
  const prototype1 = { c: 3, d: 4 };
  Object.setPrototypeOf(obj1, prototype1);
  
  const chain = getPrototypeChain(obj);
  console.log(chain);

  console.log(Object.prototype.toString.call(obj));
  console.dir(obj, { depth: null });
console.log(obj.__proto__.c);
console.log(obj.c);

// prototype used for inheritance
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.sound = function() {
    console.log('The animal makes a sound.');
  };
  
  const dog1 = new Animal('Fido');
  dog1.sound(); // "The animal makes a sound."