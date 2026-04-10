/*
// 6. Day Type
// Write a function that takes a day name string and prints "Weekday" or "Weekend" using switch case.
*/

function checkDay(day, country) {
  if (country === "nepal") {
    switch (day) {
      case "sunday":
        console.log(`${day} is a weekday in ${country}`);
        break;

      case "monday":
        console.log(`${day} is a weekday in ${country}`);
        break;

      case "tuesday":
        console.log(`${day} is a weekday in ${country}`);
        break;

      case "wednesday":
        console.log(`${day} is a weekday in ${country}`);
        break;

      case "thursday":
        console.log(`${day} is a weekday in ${country}`);
        break;

      case "friday":
        console.log(`${day} is a weekday in ${country}`);
        break;

      case "saturday":
        console.log(`${day} is a weekend`);
        break;

      default:
        console.log("Invalid Day");
    }
  } else {
    switch (day) {
      case "sunday":
        console.log(`${day} is a weekend in ${country}`);
        break;

      case "monday":
        console.log(`${day} is a weekday in ${country}`);
        break;

      case "tuesday":
        console.log(`${day} is a weekday in ${country}`);
        break;

      case "wednesday":
        console.log(`${day} is a weekday in ${country}`);
        break;

      case "thursday":
        console.log(`${day} is a weekday in ${country}`);
        break;

      case "friday":
        console.log(`${day} is a weekday in ${country}`);
        break;

      case "saturday":
        console.log(`${day} is a weekend`);
        break;

      default:
        console.log("Invalid Day");
    }
  }
}

checkDay("sunday", "india");
checkDay("sunday", "usa");
checkDay("sunday", "nepal");
