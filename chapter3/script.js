// console.log("Hello World!");

// Data Types
// Primitive:
// Strings => " "
// Number => 51654
// Boolean => true/false => 0/1
// undefined => value=0 /""
// null => doesnt exist

// none-primitive
// Object => {name:"John",age:25}
// Arrays => [1,2,3,5,"john"]

const chellenge = "Welcome to javascript";

// console.log(chellenge.length);
// console.log(chellenge.toUpperCase());
// console.log(chellenge.toLowerCase());
// console.log(chellenge.slice(0, 8));

// const newChallenge = chellenge + " " + "hello";
// console.log(newChallenge);

// console.log(newChallenge.repeat(2));

// let string = "15";
// let number = 15;

// console.log(string == number);
// console.log(string === number);

// console.log(typeof parseInt("10") === typeof 10);
// console.log(Math.round(parseFloat("9.8")) === 10);

// const python = "python";
// const jargon = "jargon";

// console.log(python.includes("on") && jargon.includes("on"));

// console.log(Math.floor(Math.random() * 50) + 50);
// console.log(Math.floor(Math.random() * 255));

// console.log(chellenge[Math.floor(Math.random() * chellenge.length)]);

// // Functions

function hello(name) {
  return "hello " + name;
}

// console.log(hello("john"));
// console.log(hello("Doe"));
// console.log(hello("Mark"));

// Condition
// if / else statement
// if (10 < 5) {
//   console.log("yes it is");
// } else if (10 === 10) {
//   console.log("yes it is");
// } else {
//   console.log("no it is not");
// }

// // switch statement
// switch (true) {
//   case 10 < 5:
//     console.log("yes it is");
//     break;
//   case 10 === 5:
//     console.log("yes it is");
//   default:
//     console.log("no it is not");
//     break;
// }

// Loops

const word = "hello";
// For loop
// for (let i = 0; i < word.length; i++) {
//   if(i%2===0){
//
// }
// }

// While loop

// let j = 0;
// while (j < word.length) {
//   console.log(word[j]);
//   j++;
// }

// GET EVEN NUMBERS
// function evenN() {
//   for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// evenN();
// 2 Write a for loop that calculates the sum of all odd numbers between 1 and 50.

function Mahfoud() {
  let somme = 0;
  for (i = 1; i <= 50; i += 2) {
    somme += i;
  }
  console.log(somme);
}

// Mahfoud();

// 3 Write a for loop that prints the multiplication table for the number 5 (from 1 to 10).
function multiplicationTable() {
  for (let i = 0; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
  }
}

// multiplicationTable();

// 4 Write a for loop that counts the number of divisors of a given number (e.g., 24).

function anis(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count = count + 1;
    }
  }
  return count;
}

// console.log(anis(24));

// 5 Write a for loop that prints all prime numbers between 1 and 20.

function primeTest(number) {
  for (let i = 2; i <= number; i++) {
    let checked = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        checked = false;
        break;
      }
    }

    if (checked === true) {
      console.log(i);
    }
  }
}

// primeTest(20);

function isArmStrong(n) {
  let length = n.toString().length;
  let sum = 0;
  let s = n.toString();
  for (let i = 0; i < s.length; i++) {
    s[i] = parseInt(s[i]);
    sum += s[i] ** length;
  }
  if (n === sum) {
    return true;
  }

  return false;
}

function getAllArmStrong() {
  for (let i = 1; i <= 1000; i++) {
    if (isArmStrong(i)) {
      console.log(i);
    }
  }
}

// getAllArmStrong();

// console.log(isArmStrong(153));

// decimal to binary

function binary(number) {
  let binary = "";

  while (number > 0) {
    binary += number % 2;
    number = Math.floor(number / 2);
  }

  binary = binary.split("").reverse().join("");
  return +binary;
  // console.log(5 / 2);
}

// console.log(binary(15));
// console.log(binary(10));
// console.log(binary(2));

// Multiple 3

function multiThree() {
  for (let i = 1; i <= 10; i++) {
    console.log(i * 3);
  }
}

// multiThree();

function reverseNumber(n) {
  n = n.toString();
  let num = "";
  for (let i = n.length - 1; i >= 0; i--) {
    num += n[i];
  }
  return +num;
}

// console.log(reverseNumber(1254));

function sumOfAllDigits(n) {
  let sum = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    sum += parseInt(n[i]);
  }

  return sum;
}

// console.log(sumOfAllDigits(15));

function isPerfect() {
  for (let i = 2; i <= 9000; i++) {
    let sum = 0;
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      if (i % j === 0) {
        sum += j;
      }
    }
    if (sum === i) {
      console.log(sum);
    }
  }
}

// isPerfect();

function isPalindromic(n) {
  let pal = n.toString();
  let num = "";
  for (let i = pal.length - 1; i >= 0; i--) {
    num += pal[i];
  }
  if (+num === n) {
    return "is Palindromic";
  } else {
    return "it is not";
  }
}

// console.log(isPalindromic(676));

function toHex(decimal) {
  let result = "";
  let hexDigits = "0123456789ABCDEF";

  if (decimal === 0) {
    return "0";
  }

  for (let i = decimal; i > 0; i = Math.floor(i / 16)) {
    let remainder = i % 16;
    result = hexDigits.charAt(remainder) + result;
  }

  return result;
}

// console.log(toHex(550));

// Arrays
const array = [1, "hey", undefined, null, [1, 2, 3], 151, 82, 48, 5];
array.push("last");
array.unshift("first");

array.pop();
array.shift();

console.log(array[array.length - 1]);
console.log(array[Math.floor(array.length / 2)]);

console.log(array);

//  1. Declare an empty array;
// 2. Declare an array with more than 5 number of elements
// 3. Find the length of your array
// 4. Get the first item, the middle item and the last item of the array
// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// 7. Print the array using console.log()
// 8. Print the number of companies in the array
// 9. Print the first company, middle and last company
// 10. Print out each company
// 11. Change each company name to uppercase one by one and print them out
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// 14. Filter out companies which have more than one 'o' without the filter method
// 15. Sort the array using sort() method
// 16. Reverse the array using reverse() method
// 17. Slice out the first 3 companies from the array
// 18. Slice out the last 3 companies from the array
// 19. Slice out the middle IT company or companies from the array
// 20. Remove the first IT company from the array
// 21. Remove the middle IT company or companies from the array
// 22. Remove the last IT company from the array
// 23. Remove all IT companies

// 12
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "IBM",
  "Oracle",
  "Apple",
];

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

console.log(itCompanies.join(",") + " and Amazon are big IT companies");

function checkDoubleO(company) {
  const newArr = [];
  for (let i = 0; i < company.length; i++) {
    let count = 0;
    for (let j = 0; j < company.length; j++) {
      if (company[i][j] === "o") {
        count++;
      }
    }

    if (count >= 2) {
      newArr.push(company[i]);
    }
  }

  return newArr;
}

console.log(checkDoubleO(itCompanies));

console.log(itCompanies.sort());

console.log(itCompanies.shift());
console.log(itCompanies.pop());

function removeMiddleElement() {
  const newFormedArr = [];
  const middle = itCompanies[Math.floor(itCompanies.length / 2)];
  for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i] !== middle) {
      newFormedArr.push(itCompanies[i]);
    }
  }

  return newFormedArr;
}

console.log(removeMiddleElement());

const arrNum = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 5, 4, 8, 7, 5, 4, 8, 5, 2, 1, 5, 5, 4,
  8, 4, 4, 7,
];

// function removeAllItCompanies(arrNum) {
//   for (let i = 0; i <= arrNum.length; i++) {
//     arrNum.pop();
//     arrNum.shift();
//   }
//   return arrNum;
// }

// console.log(removeAllItCompanies(arrNum));

// console.log(arrNum.slice(0, 0));

// function minMax(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   return [min, max];
// }

// console.log(minMax([14, 35, 6, 1, 34, 54]));

function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}

// console.log(minMax([1, 12, 54, -1, 12]));

let arr1 = [1, 2, 3, 4];
let arr2 = [0, 6];

function canNest(arr1, arr2) {
  if (minMax(arr1)[0] > minMax(arr2)[0] && minMax(arr1)[1] < minMax(arr2)[1]) {
    return true;
  }
  return false;
}

console.log(canNest(arr1, arr2));

function seriesResistance(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum <= 1) {
    return `${sum} ohm`;
  }
  return `${sum} ohms`;
}

console.log(seriesResistance([1, 5, 6, 3]));
console.log(seriesResistance([16, 3.5, 6]));
console.log(seriesResistance([0.5, 0.5]));

/*
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
*/

function isSevenBoom(arr) {
  const isStr = arr.join("").includes("7");
  if (isStr) {
    return "Boom!";
  }

  return "there is no seven in the array";
}

console.log(isSevenBoom([1, 2, 5, 4, 5, 8, 5, 74, 5]));

/*
Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
*/

function checkNumberInArr(arr) {
  const newArr = [];
  let str = "";
  const numbers = "0123456789".split("");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("");
    for (let j = 0; j < arr[i].length; j++) {
      if (numbers.includes(arr[i][j])) {
        newArr.push(arr[i].join(""));
        break;
      }
    }
  }

  return newArr;
}

console.log(checkNumberInArr(["1a", "a", "2b", "b"]));
console.log(checkNumberInArr(["abc", "ab10c", "a10bc", "bcd"]));

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(iterable) {
  const arr = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      arr.push(iterable[i]);
    }
  }
  return arr;
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));

/*
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
*/

function reverseWord(word) {
  word = word.split(" ");
  const arr = [];
  for (let i = word.length - 1; i >= 0; i--) {
    arr.push(word[i]);
  }

  return arr.join(" ");
  // return word.split(" ").reverse().join(" ")
}

console.log(reverseWord("Hello world"));
console.log(reverseWord("Hi There."));
