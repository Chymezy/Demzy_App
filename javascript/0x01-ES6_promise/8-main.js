import divideFunction from './8-try'

const result = divideFunction(10, 4);
console.log(result === 'cannot divide by 0' ? 'invalid input' : `result: ${result}`);