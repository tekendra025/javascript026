/*
// 8. Check Letter Type
// Write a function that takes a letter and prints whether it’s a vowel or consonant using an if-else statement.
*/

function checkLetter(letter) {
  if (
    letter.charAt(0) === "a" ||
    letter.charAt(0) === "e" ||
    letter.charAt(0) === "i" ||
    letter.charAt(0) === "0" ||
    letter.charAt(0) === "u"
  ) {
    console.log(`${letter} is a Vowel`);
  } else {
    console.log(`${letter} is consonant`);
  }
}
checkLetter("apple");

/*
// 7. Count Vowels
// Write a function that counts total vowels in an array of strings using a for loop.
*/
