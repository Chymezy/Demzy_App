let typedArr = new Uint8Array(5);
typedArr[5] = 10;
typedArr[20] = 23; // will not be inserted
console.log(typedArr);
