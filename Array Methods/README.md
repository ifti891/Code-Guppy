# Intro

Arrays are one of the most useful and flexible data structures from JavaScript.

Your code can create an array of any size and then grow it as needed at runtime by adding extra elements. Each element can be of any type (such as number, string, etc.). Even other arrays can be added as elements in an array. Of course, you can also remove elements from any position at any time.

In this tutorial, we will cover the most common and useful array methods.

## Methods and Properties

In JavaScript, arrays are objects. This means they are complex structures containing both data and behaviors.

Behaviors are nothing else than fancy names for functions associated with that object (e.g. array). In other words, each array has a collection of really useful functions that can be used to access and process data in that array.

### There are two types of behaviors

- methods
- properties

## Methods

Methods can be invoked exactly like regular function calls, with the exception that you prefix them with the object name followed by a . symbol.

Example:

```
anyArray.push(100);
```

## Properties

On the other hand, properties can be read and assigned like regular variables, but also prefixed with the object name followed by a . symbol.

_Note: Some properties can only be read and not assigned. We call these read-only properties._

## Inline defination

Let's start by defining an array. The easiest way to do this is by using the inline notation.

In the following example `ar` is an empy array (it doesn't contain any element). Notice the opening and closing square brackets that indicate an array:

```
let ar = [];
```

In the following example ar is an array containing elements 10, 20 and 30:

```
let ar = [10, 20, 30];
```

We can easily visualize the elements of an array by using the `console.log()` function. This function can display a simple array in a human readable form.

```
console.log("Initaila array");
console.log(ar);
```

## Length of an array

To find out how many elements are in an array (e.g. to obtain the length of an array), you can use the `.length` property:

```
let ar = [10, 20, 30];
console.log("Initial array")
console.log(ar);

// Obtain the length of the array
console.log("\nLength of array: ", ar.length); 

```

## Append an element at the end

To append an element at the end of the array, you can use the `.push()` method

```
let ar = [10, 20, 30];
console.log("Initial array")
console.log(ar);

// Append an element at the end of the array
ar.push(100);
console.log("\nArray after push"); 
console.log(ar);
```

## Insert an element at the beginning

To insert an element at the beginning of an array, you can use the `.unshift()` method. In the following example we are inserting number `0` as first element of the array.

```
var ar = [10, 20, 30];
console.log("Initial array")
console.log(ar);

// Insert an element at the beginning of an array
ar.unshift(0);
console.log("\nArray after unshift"); 
console.log(ar);
```

## Insert at an arbitrary position

To insert an element at an arbitrary position in the array you need two pieces of information:

- the index at which you want to insert the element
- the actual element

```
console.log = [10, 20, 30];
console.log("Initial array")
console.log(ar);

// Insert an element at an arbitrary position
// ar.splice(index, 0, item); 
// 0 = delete 0 elements 

ar.splice(1, 0, 15);
println("\nArray after insert with splice"); 
println(ar);
```

## Access an element of the array

One of the most important feature of an array is the ability to access and modify any element by position (e.g. index in the array).

The way we are refering to the element at position `i` is by writting `ar[i]` (you can read this as "ar of i").

```
let ar = [10, 20, 30];
console.log("Initial array")
console.log(ar);

// Obtain the element of the array at an arbitray position
let i = 2;
console.log("\nar[" + i + "]: ", ar[i]); 

// \n is new line
```

To modify the element is enought to assign to `ar[i]` a new value in the same way you're doing with a regular variable:

```
// Modify an arbitray array element

console.log("\nModify ar[" + i + "]"); 
ar[i] = 100;

console.log("\nar[" + i + "]: ", ar[i]);
```

A very frequent scenario is accessing the first element of the array. There is nothing particular about the systax, just use `0` as index (since arrays in JavaScript are `0` based):

```
// Particular case: inspect the first element of the array

console.log("\nFirst element: ", ar[0]); 
```

## Accessing last element

Another very frequest scenario in JavaScript is accessing the last element of the array.

This is a little bit trickier since involves finding first the length of the array and use it to calculate the index of the last element of that array. Since arrays are `0` based, the last element index is `1` less than the length:

```
let ar = [10, 20, 30];
console.log("Initial array")
console.log(ar);

// Particular case: inspect the last element of the array
let len = ar.length;
console.log("\nLast element: ", ar[len - 1]); 

```