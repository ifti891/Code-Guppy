// Extract a slice of an array

let ar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log("\nInitial array");
console.log(ar);

// Extracting a 'slice' from an array
// slice(fromIndexInclusive, toIndexEexclusive )

let arSlice = ar.slice(2, 10);
console.log("\nArray obtained with slice: ", arSlice)
