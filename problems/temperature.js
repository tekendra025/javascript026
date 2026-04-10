/*
// 3. Temperature Classification
// Write a function that takes an array of temperatures and prints:
// "Very Hot" if temperature > 40
// "Hot" if temperature > 30
// "Cool" otherwise
// Use a for loop.
*/

function checkTemp(tempArr) {
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] >= 40) {
      console.log("Very Hot");
    } else if (tempArr[i] >= 30) {
      console.log("Hot");
    } else {
      console.log("Cool");
    }
  }
}

let temp = [0, 30, 45, -30];
checkTemp(temp);
