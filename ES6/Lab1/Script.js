// 1) Swap the values of x and y using destructuring

let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y); // 2, 1

/* 2) Using rest parameter and spread operator return min and max 
value from any array passed to function call and display each of 
them separately after function call
note: array length is not fixed */

let getMinMax = (...arr) => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max];
};

let [min, max] = getMinMax(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(min, max); // 1, 10

/* 3) Study new array api methods then create the following methods 
and apply it on this array 
var fruits = ["apple", "strawberry", "banana", "orange", 
"mango"];*/

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// a)  test that every element in the given array is a string
console.log(fruits.every((fruit) => typeof fruit === "string")); // true

// b) test that some of array elements starts with "a"
console.log(fruits.some((fruit) => fruit.startsWith("a"))); // true

// c) generate new array filtered from the given array with only
//elements that starts with "b" or "s"
let newArr = fruits.filter(
  (fruit) => fruit.startsWith("b") || fruit.startsWith("s")
);

// d) generate new array, each element of the new array contains a
//string declaring that you like the give fruit element
let newArr2 = fruits.map((fruit) => `I like ${fruit}`);

// e) use forEach to display all elements of the new array from
// previouse point
newArr.forEach((element) => {
  console.log(element);
});
newArr2.forEach((element) => {
  console.log(element);
});
