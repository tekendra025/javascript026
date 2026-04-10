/*
// 1. Sum of Numbers in an Array
// Write a function that takes an array of numbers and calculates the sum using a for loop.
*/

function sumArr(arr) {
  console.log(arr);
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let arr = [2, 4, 6, 8, 10];
result = sumArr(arr);
console.log(result);
