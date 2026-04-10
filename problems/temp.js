//prg to suggest temperature condition
let temp = 45;

if (temp <= 0) {
  console.log("Freezing.....");
} else {
  if (temp <= 15) {
    console.log("Cold....");
  } else if (temp <= 30) {
    console.log("Warm....");
  } else {
    console.log("Hot");
  }
}
