/*
// 10. Traffic Light Action
// Write a function that prints the action based on traffic light color (red, yellow, green) using switch case.
*/

function traffic(color) {
  switch (color) {
    case "red":
      console.log("Stop");
      break;

    case "yellow":
      console.log("Get Ready");
      break;

    case "green":
      console.log("Go..");
      break;

    default:
      console.log("Invalid Color Light");
  }
}

traffic("red");
traffic("yellow");
traffic("green");
traffic("white");
