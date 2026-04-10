// Write a function that takes two numbers and an operator (+, -, *, /) and returns the result using switch case.

function calc(a, b, operator) {
  switch (operator) {
    case "+":
      console.log(`The addition of ${a} and ${b} = ${a + b}`);
      break;

    case "-":
      if (a > b) {
        console.log(`The Subtraction of ${a} and ${b} = ${a - b}`);
      } else {
        console.log(`The Subtraction of ${a} and ${b} = ${b - a}`);
      }
      break;

    case "*":
      console.log(`The Multiplication of ${a} and ${b} = ${a * b}`);
      break;

    case "/":
      if (b !== 0) {
        console.log(`The Division of ${a} and ${b} = ${a / b}`);
      } else {
        console.log("Second number cannot be zero");
      }
      break;

    default:
      console.log("Invalid Operator");
  }
}
calc(10, 5, "+");
calc(10, 15, "-");
calc(10, 5, "*");
calc(10, 0, "/");
