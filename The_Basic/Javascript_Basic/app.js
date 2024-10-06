// Javascript Basic

console.log("Javascript Basic");

var name = "John";
console.log(name);

var lastName = "Doe";
console.log(lastName);

// userInput 
// let fullName = prompt("Enter your full name: ");
// console.log(fullName);

// - permitive data types
// String = "John"
// Number = 123, 123.45, 1e3
// Boolean = true, false
// Undefined = undefined
// Null = null
// Symbol = Symbol('symbol') unique value
// BigInt = 1234567890123456789012345678901234567890n

// - non-permitive data types (Reference data types)
// Object = { key: value }
// Array = [1, 2, 3]
// Function = function() {} 

var age = 25;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// loops

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// while loop

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// do while loop

// let i = 0;
// do {
//     console.log(i);
//     i++;
// }
// while (i < 5);

// functions

// function greet() {
//     console.log("Hello World!");
// }

// greet();
// greet();

// function namePrint (name){
//     console.log("Hello " + name);
// }

// namePrint("John");
// namePrint("Doe");

// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 10));

// Array

let fruits = ["Apple", "Banana", "Mango", "Orange"];
// console.log(fruits);
// console.log(fruits[0]);

const number = [1, 2, 3, 4, 5];
// console.log(number);
// console.log(number[0]);

// Object

let person = {
    name: "John",
    age: 25
}

// console.log(person);
// console.log(person.name);

// console.log(person['name']);

// person.name = "Doe"; // update
// console.log(person);

// DOM - Document Object Model

// 4 Pillar of DOM
// 1. selection of an element
// 2. Manipulation of an element
// 3. Event Listener
// 4. Traversing