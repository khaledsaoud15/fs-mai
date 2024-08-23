// Arrow Function

const fn = (n, o) => n + o;
// console.log(fn(10, 15));

// Array Methods + Callback Functions

// console.log(arr.filter((el) => el > 5)); // returns new array with the value who passed the condition

// console.log(arr.filter((el, i) => arr.indexOf(el) === i));

// console.log(arr);

// const newArr = arr.map((el) => el * 2); // returns an array with the returned value
// console.log(newArr);

// const newArr2 = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr2.push(arr[i] * 2);
// }

// console.log(newArr2);

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// const uniqueOrder = (str) => {
//   return str
//     .split("")
//     .filter((el, i) => str.indexOf(el) === i)
//     .join("")
//     .toLowerCase()
//     .split("");
// };

// function uniqueInOrder(iterable) {
//   const arr = [];
//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] !== iterable[i + 1]) {
//       arr.push(iterable[i]);
//     }
//   }
//   return arr;
// }

// console.log(uniqueOrder("AAAABBBCCDAABBB"));
// console.log(uniqueOrder("AAAABBBCCDAABBB"));
// const arr = [2, 5, 1, 1, 1, 2, 5, 2, 2, 3, 4, 8, 7, 9];

// // console.log(arr.reduce((acc, curr) => acc + curr, 0));

// console.log(arr.find((el, i, arr) => el > 2)); // hadi hya

// // hadi
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 2) {
//     console.log(arr[i]);
//     break;
//   }
// }

// console.log(arr.some((el) => el > 2));

// console.log(arr.splice(1, 10));

// EXERCISES

// EXO 1 => map

// Given an array of objects representing people, return an array of their ages.
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jack", age: 40 },
];
// Expected output: [30, 25, 40]

const mapInAges = people.map((el) => el.age);

console.log(mapInAges);

// EXO 2 => filter
// Given an array of numbers, return an array containing only the even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Expected output: [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter((el) => el % 2 === 0);

console.log(evenNumbers);

//  Given an array of objects representing tasks, return an array of tasks that are completed.
const tasks = [
  { task: "Do laundry", completed: true },
  { task: "Clean room", completed: false },
  { task: "Buy groceries", completed: true },
];
// Expected output: [
//   { task: "Do laundry", completed: true },
//   { task: "Buy groceries", completed: true }
// ]

const completedTasks = tasks.filter((el) => el.completed === true);
console.log(completedTasks);

// EXO 3 => reduce
// Given an array of numbers, return the sum of all the numbers.

const numbersReduced = [10, 20, 30, 40, 50];
// Expected output: 150

const reduced = numbersReduced.reduce((acc, curr) => acc + curr, 0);
console.log(reduced);

// Given an array of objects representing products, return the total price of all products.

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];
// Expected output: 1800

const productsSum = products.reduce((acc, curr) => acc + curr.price, 0);
console.log(productsSum);

// EXO 4 => find
// Given an array of numbers, find the first number that is greater than 10.
const numbersFind = [3, 8, 12, 5, 17];
// Expected output: 12

const findN = numbersFind.find((el) => el > 10);
console.log(findN);

//  Given an array of objects representing users, find the user with the username 'admin'.

const users = [
  { username: "john_doe", role: "user" },
  { username: "jane_doe", role: "user" },
  { username: "admin", role: "admin" },
];
// Expected output: { username: "admin", role: "admin" }

const admin = users.find((el) => el.username === "admin");

console.log(admin);

// EXO 5 => some
// Given an array of numbers, check if there are any negative numbers.

const numbersNegative = [3, 5, -2, 8, -9];
// Expected output: true

const negativeN = numbersNegative.some((el) => el < 0);
console.log(negativeN);

// Given an array of objects representing students, check if there is at least one student with a grade less than 50.

const students = [
  { name: "John", grade: 75 },
  { name: "Jane", grade: 45 },
  { name: "Jack", grade: 85 },
];
// Expected output: true

const grade = students.some((el) => el.grade < 50);
console.log(grade);

// ternary operation => if statement
10 < 5 ? console.log(true) : 10 == 5 ? console.log(true) : console.log(false);

const str = "hello";
const str2 = "world";

// const result = str + "!!!" + str2;
const res = `${str} !! ${str2}`;
console.log(res);

const fruits = ["apple", "mango", "lemon"];

const [f1, f2] = fruits;

console.log(f1); // => console.log(fruits[0])
console.log(f2); // => console.log(fruits[1])

// destructering
const { username, role } = users[0];

console.log(username);
