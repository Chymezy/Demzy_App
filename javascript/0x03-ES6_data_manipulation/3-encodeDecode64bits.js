// Encoding Uint8Array to Base64
function toBase64(uint8Array) {
    let binary = '';
    let len = uint8Array.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(uint8Array[i]);
    }
    return btoa(binary);
  }
  
  // Decoding Base64 to Uint8Array
  function fromBase64(base64) {
    let binary = atob(base64);
    let len = binary.length;
    let uint8Array = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      uint8Array[i] = binary.charCodeAt(i);
    }
    return uint8Array;
  }
  
  let uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
  let base64String = toBase64(uint8Array);
  console.log(base64String); // Outputs: "SGVsbG8="
  
  let decodedArray = fromBase64(base64String);
  console.log(decodedArray); // Outputs: Uint8Array(5) [ 72, 101, 108, 108, 111 ]
  