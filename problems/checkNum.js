/*
// 4. FizzBuzz
// Write a function that prints numbers from 1 to n, but:
// divisible by 3 → print "Fizz"
// divisible by 5 → print "Buzz"
// divisible by both 3 and 5 → print "FizzBuzz"
// Use a for loop.
*/

function checkNum(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 2 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBUzz");
    } else {
      console.log("Neither divisible by 3 nor by 5");
    }
  }
}
checkNum(20);
