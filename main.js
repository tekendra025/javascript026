// Normal console types
// console.log()
// console.error()
// console.warn()
// window.alert("Hey");

// Variables
//var
//let
//const

// scope
//  -global scope - outside the function but works if var is inside {}
//  -block scope  -inside {} or the function(mainly inside function is called local scope)

// {
//   var name = "tek";
// }
// console.log(name);

//Data-Types:
// 1-Primitive - for single data
// 2-Non-primitive data - for multiple data/value like array

// let a = 0.5;
// let a = "0.5";
// let a = TRUE or FALSE
//let a ; //undefined- variable declared but value not assigned
// let a = null - empty container
// let a = null - empty container
// let a = null; - output object -it is a bug
// console.log(typeof a);

//Types of operators
//1.assignment operator:
// let a = 10;
// a += 3((a = a + 3)); => -=, /=, %=
// console.log(a);

// 2. ternary operator (? (true condition) : (false condition))
// short form of if...else
/*
let age = 14;
 let result = age >= 18 ? "Can Vote" : "Cannot Vote";
 console.log(result)
*/

//post and pre increment:
/*Post Increment
let a = 10;
let b = a++;
console.log(a); //output 11
console.log(b); //output 10
// due to post-increment. Here assign value a to b then only increase a by 1
*/

/* Pre- Increment
let a = 10;
let b = ++a;
console.log(a); //output 11
console.log(b); //output 11
//This is due to pre increment. Here first value increase by 1 then assign the value 
*/

//Loops
// 1. for loop
/*
- yo chai block of code  ma hunxa
- jaba hamilai kati choti loop chalxa thaha hunxa tyo bela chai for loop lagaune

for (let i = 0; i <= 5; i++) {
    console.log("for loop", i);
}
*/

//while loops
/*
yo chai step by step hunxa
-Jaba thaha hunna while loop use hunxa

let i = 1; //initialization

while(i<5){ //condition check
    console.log("While Loops", i);
    i++; //condition
*/

//Do While Loop
/*
-first execute the loop one loop then only check the condition. It means it runs one time before checking condition

let i = 1;
do {
    console.log("Do while loop", i); //run code one time then only check condition. Here i = 1 first execute then only check condition for other value
    i++;
} while (i < 10);

//But

let i = 15;
do {
    console.log("Do while loop", i); //run code one time then only check condition. Here i = 1 first execute then only check condition for other value
    i++;
} while (i < 10); //output 15 then program stop
*/

//conditional statement
/*
-if and else statement

let age = 8;

if (age >= 18) {
  //if statement. only true condition
  console.log("Can Vote");
} else {
  //else statement. False condition print
  console.log("You are Under Age");
}

// ternary operator: short form of ternary operator
// let a = age >=18 ? "Can Vote" : "Cannot Vote"
// console.log(a)
*/

/*
-else if and if else-if else condition
let mark = 50;

if (mark >= 90) {
  console.log("A+");
} else if (mark >= 70) {
  console.log("B+");
} else if (mark >= 60) {
  console.log("C+");
} else if (mark >= 40) {
  console.log("You are Pass");
} else {
  console.log("You are Fail");
}

*/

//Nested if statement
/*
if statement inside if statemetn
let user = "Ram";
let isPassword = "ram123@";

if (user === "Ram") {
    console.log("Enter Your Password");
    if (isPassword === "ram123@") {
    console.log("Login Success");
  } else {
    console.log("Incorrect Passsword");
  }
} else {
  console.log("Invalid username");
}
*/

//prg to print even and odd number
/*
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " is Even");
    } else {
        console.log(i + " is Odd");
}
}

//using ternary operator
for (let i = 0; i <= 20; i++) {
    result = i % 2 === 0 ? `${i} is Even` : `${i} is odd`;
    console.log(result);
}
*/

// only print even number
/*
var a = [];
for (let i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log("Odd Number", i);
    a.push(i);
  }
}
console.log("odd number are: ", a);

*/

//Switch Case
/*
- yesma chai multiple case lai check garxam.
- if..else ma chai multiple condition check garxam
*/

let day = 3;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day");
    break;
}
