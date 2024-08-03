// manually creating set difference operation function
Set.prototype.difference = function(setB) { // I used prototype on set to set difference() to inheritance chain
    const resultSet = new Set(); // create new set to collect diff result
    for (let item of this) { // "this" bcos I want to call it on set object
        if (!setB.has(item)){ // checks none existance of element on another set
            resultSet.add(item); // if true add it.
        }
    }
    return resultSet;
}

Set.prototype.intersection = function(setB) {
    // create a set to collate resultant set
    const resultSet = new Set();
    // loop through the input set and check if element exist or not
    for (let item of setB){
        if (this.has(item)) {
            // if true add it to resultant set
            resultSet.add(item);
        }
    }
    // return result
    return resultSet;
}

Set.prototype.union = function(setB) {
    // create resultant set
    const resultSet = new Set(this);
    // loop through the input set
    for (let item of setB){
        // add all element to resultant set.
        resultSet.add(item);
    }
    // return resultant
    return resultSet;
}

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const difference = setA.difference(setB);
console.log(difference); // Set { 1, 2 }

const intersection = setA.intersection(setB);
console.log(intersection); // Set { 3 }

const union = setA.union(setB);
console.log(union); // Set { 1, 2, 3, 4, 5 }

// NOTE: all this operations and more has been implemented already in external lib
// but you have to "install set" first for you to be able to use it.