const a = new Set([1, 2, 3]);
const b = new Map([
  [1, "one"],
  [2, "two"],
  [4, "four"],
]);

// Convert Map keys to a Set
const bKeys = new Set(b.keys());

// Function to perform union of two sets
function union(setA, setB) {
  const unionSet = new Set(setA);
  for (const elem of setB) {
    unionSet.add(elem);
  }
  return unionSet;
}

// Perform union of set 'a' and set of keys from 'b'
const result = union(a, bKeys);
console.log(result); // Set(4) {1, 2, 3, 4}
