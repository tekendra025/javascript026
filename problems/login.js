/*
let username = "Rame";
let password = "ram123@";

if ((username === "Ram") & (password === "ram123@")) {
    console.log("Login successfully...");
} else {
  console.log("Invalid Credentials...");
}

if (username === "Ram") {
  if (password === "ram123@") {
    console.log("login successfully");
  } else {
    console.log("Invalid Password");
  }
} else {
  console.log("Invalid Username");
}

*/

//login system with attempts
let username = "Ram";
let password = "ram123@";

let attempts = 3;

for (i = 1; i <= attempts; i++) {
  if (username === "Ram" && password === "ram123@") {
    console.log("Login Successfully....");
    break;
  } else {
    console.log(`Invalid Credentials... attempts remaining ${attempts - i}`);
  }
  if (i === attempts) {
    console.log("Your Account Blocked...");
  }
}
