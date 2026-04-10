//Prg to print multiplication table
/*


for (let i = 1; i <= 10; i++) {
  console.log(`Table of ${i}:`);

  for (let j = 1; j <= 10; j++) {
    let result = `${i} X ${j} = ${i * j}`;
    console.log(result);
  }

  console.log("----------------");
}

*/

//mul table for some number means skip some number
for (let i = 1; i <= 10; i++) {
  if (i === 2 || i === 4 || i === 6 || i === 8 || i === 10) {
    console.log(`Table of ${i}:`);

    for (let j = 1; j <= 10; j++) {
      let result = `${i} X ${j} = ${i * j}`;
      console.log(result);
    }

    console.log("----------------");
  } else {
    console.log(`Multiplication Table of ${i} is skipped.....`);
    console.log("----------------");
  }
}
