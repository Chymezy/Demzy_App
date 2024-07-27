/**
 *  Maps vs. Objects

    While objects are like those special boxes with many pockets, 
    sometimes it's better to use something called a Map. Maps 
    are designed specifically to handle lots of labels and 
    values in a neat and secure way. They can be faster and 
    safer for certain tasks. Think of a Map as a super-organized 
    and special type of box made just for holding labels and 
    values.
 */



const fruitMap = new Map();
console.log(fruitMap);
fruitMap.set('apple', 5);
fruitMap.set('banana', 10);

console.log(fruitMap); // Map(2) { 'apple' => 5, 'banana' => 10 }
console.log(fruitMap.get('apple')); // 5

// Maps provide more functionality like iteration:
fruitMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

fruitMap.delete('apple');
console.log(fruitMap.has('apple')); // false

fruitMap.clear();
console.log(fruitMap.size); // 0

// Iterating over keys and values
fruitMap.set('apple', 5);
fruitMap.set('banana', 10);
for (const [key, value] of fruitMap.entries()) {
  console.log(`${key} => ${value}`);
}