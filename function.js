// function
/*
- function is a reusable block of code to perofrm a repetetive task
-Function parameter, argument and return
-parameter is a variable in a function that receive a value from a function call. function lai define garna use garine valriable lai parameter
-argument is a value pass when function call. Actual value that pass when function call
-result nikalne kaam return le garxa.return sends value back from function

*/
function add(a, b) {
  // a and b are parameter
  res = a + b;
  return res;
}
let result = add(4, 5); //4 and 5 are called argument
console.log(result);

function check(n) {
  if (n % 2 === 0) {
    console.log(`${n} is even Number`);
  } else {
    console.log(`${n} is odd Number`);
  }
}
check(9);

//to print even odd
function num(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log("Even", i);
    }
  }
}
num(50);
