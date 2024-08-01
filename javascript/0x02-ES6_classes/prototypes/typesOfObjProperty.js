/**
 * Two Types of Properties

Objects have two types of pockets (properties): Data Properties and Accessor Properties.
Data Property

    Value: This is what's inside the pocket. It can be any type of toy or number.
    Writable: This tells if you can change what's inside the pocket. If writable is true, you can change it; if false, you can't.
    Enumerable: This tells if the pocket shows up when you look inside the box with a special list (a for...in loop).
    Configurable: This tells if you can change the pocket itself, like deleting it or changing its type.

    Accessor Property
    Instead of just holding something, these pockets have special doors with "get" and "set" actions.

    Get: This is like a door that lets you peek inside and see what's there.
    Set: This is like a door where you can put something inside.
    Enumerable: Same as above, it shows up in the list if true.
    Configurable: Same as above, you can change or delete it if true.
 */
import toyBox from './creatObject.js'

// Defining properties with specific attributes
Object.defineProperty(toyBox, 'color', {
    value: 'blue',
    writable: false, // cannot be changed
    enumerable: true, // shows up in for...in loop
    configurable: true // can be deleted or modified
  });
  
  console.log(toyBox.color); // blue
//   toyBox.color = 'red'; // Attempt to change the value
  console.log(toyBox.color); // blue (unchanged because writable is false)
  console.log(Object.getOwnPropertyDescriptor(toyBox, 'color')); // accessing specific data property
  console.log(Object.getOwnPropertyDescriptors(toyBox)); // accessing for all data property of the obj
//   console.log(Object.prototype.toString.call(toyBox));

//Accessor Properties
const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
      [this.firstName, this.lastName] = name.split(' ');
    }
  };
  
  console.log(person.fullName); // John Doe
  person.fullName = 'Jane Smith';
  console.log(person.fullName); // Jane Smith
  console.log(person.firstName); // Jane
  console.log(person.lastName); // Smith
  
