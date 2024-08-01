// import guardrail from './9-try';
// import divideFunction from './8-try';

// console.log(guardrail(() => { return divideFunction(10, 2)}));
// console.log(guardrail(() => { return divideFunction(10, 0)}));

import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => divideFunction(10, 2))); // [ 5, 'Guardrail was processed' ]
console.log(guardrail(() => divideFunction(10, 0))); // [ 'Error: cannot divide by 0', 'Guardrail was processed' ]
