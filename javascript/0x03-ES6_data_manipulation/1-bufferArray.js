let buffer = new ArrayBuffer(16); // Large box with 16 slots
let view = new DataView(buffer);

// Storing values
view.setUint8(0, 255);   // Store 255 at position 0 (1 byte)
view.setUint8(1, 128);   // Store 128 at position 1 (1 byte)
view.setUint32(2, 65535); // Store 65535 at position 2 (4 bytes)
view.setFloat64(6, 3.14); // Store 3.14 at position 6 (8 bytes)

// Reading values
console.log(view.getUint8(0));   // 255
console.log(view.getUint8(1));   // 128
console.log(view.getUint32(2));  // 65535
console.log(view.getFloat64(6)); // 3.14
