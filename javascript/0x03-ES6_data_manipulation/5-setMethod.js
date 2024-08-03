const mySet = new Set([1, 2, 3]);
mySet.add(4);
console.log(mySet); // Set(4) { 1, 2, 3, 4 }
mySet.add(2); // Duplicate, will not be added
console.log(mySet); // Set(4) { 1, 2, 3, 4 }

mySet.delete(3);
console.log(mySet.has(3)); // false

mySet.forEach(value => {
  console.log(value); // Logs 1, 2, 4
});
