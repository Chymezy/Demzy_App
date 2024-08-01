// create a function that sum numbers

function add(a, b) {
    return a + b;
}

const add2 = (a, b) => {
    return a + b;
}

// function Person() {
//     this.age = 0;
//     setInterval(() => {
//         this.age++;
//     }, 1000);
// }

function fetchData(callback) {
    setTimeout(() => {
        const data = "some data";
        callback(data);
    }, 1000);
}

fetchData((result));
// console.log(result)
// const result = add(2, 5);
// console.log(`traditional result: ${result}`);

// const result2 = add2(2, 5);
// console.log(`arrow result: ${result2}`);

// const p = new Person();

const greet = (name, callback) => {
    console.log(`Hello ${name}`);
    callback();
}

