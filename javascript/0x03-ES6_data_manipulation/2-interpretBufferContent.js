let uint8Array = new Uint8Array([72, 101, 108, 108, 111]); // ASCII values for "Hello"

let asciiString = '';
for (let i = 0; i < uint8Array.length; i++) {
  asciiString += String.fromCharCode(uint8Array[i]); // use String.fromCharCode() to convert
}

console.log(asciiString); // Outputs: "Hello"
