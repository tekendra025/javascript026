//ForEach is used to loop the every elemenet in array or list
//mapping is used to loop the every elemenet to change position  in array or list

//Arry vitra ko harek elemet lai loop chaleyera update garne kaam garxa forEach

/*
let fruits = ["apple", "banana", "orange", "mango"];
//console.log(fruits[0]); //index start from 0

fruits.forEach(function (fruit) {
    //let capitalize = fruit.charAt(0).toUpperCase() + fruit.slice(1); // charAt(0) to select 0 position of every element //slice(1) vaneko position 1 bata chai same rakha vaneko. if slice(2) vaye 2 potion bata add garne same .
    let capitalize = fruit.charAt(0).toUpperCase() + fruit.slice(2); // charAt(0) to select 0 position of every element //slice(1) vaneko position 1 bata chai same rakha vaneko. if slice(2) vaye 2 potion bata add garne same .
    console.log(capitalize);
});
*/

/*
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

num.forEach(function (n) {
    // console.log(n)
    if (n % 2 === 0) {
        console.log("Evene", n);
    }
    // if(n % 2 !== 0){
  //     console.log("Odd",n)
  // }
});

let sum = 0

num.forEach((n)=>{
    sum += n
})
console.log("Sum=", sum)
*/


const cart = [
  { item: "pen", price: 10 },
  { item: "book", price: 40 },
];

let total = 0;

cart.forEach(function (product) {
  console.log(product)
  total += product.price;
});

console.log("Total Price:", total);
