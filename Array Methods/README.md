# Intro

Arrays are one of the most useful and flexible data structures from JavaScript.

Your code can create an array of any size and then grow it as needed at runtime by adding extra elements. Each element can be of any type (such as number, string, etc.). Even other arrays can be added as elements in an array. Of course, you can also remove elements from any position at any time.

In this tutorial, we will cover the most common and useful array methods.

## Methods and Properties

In JavaScript, arrays are objects. This means they are complex structures containing both data and behaviors.

Behaviors are nothing else than fancy names for functions associated with that object (e.g. array). In other words, each array has a collection of really useful functions that can be used to access and process data in that array.

### There are two types of behaviors:

- methods
- properties

##  Methods
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