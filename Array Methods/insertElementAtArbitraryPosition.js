// Insert an element at an arbitrary position

let ar = [10, 20, 30];
console.log("Initial Array");
console.log(ar);


console.log("......................................");

// Insert an element at an arbitrary position
// ar.splice(index, 0, item);
// or ar.splice(index, 1, item)
// 0 = delete 0 elements or 1 = delete 1 element
ar.splice(1, 0, "item such as 15 at index 1/one");
console.log("\nArray after insert with splice.")
console.log(ar);