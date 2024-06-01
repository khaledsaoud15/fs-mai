console.log("Hello World!");

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

console.log(chellenge.length);
console.log(chellenge.toUpperCase());
console.log(chellenge.toLowerCase());
console.log(chellenge.slice(0, 8));

const newChallenge = chellenge + " " + "hello";
console.log(newChallenge);

console.log(newChallenge.repeat(2));

let string = "15";
let number = 15;

console.log(string == number);
console.log(string === number);

console.log(typeof parseInt("10") === typeof 10);
console.log(Math.round(parseFloat("9.8")) === 10);

const python = "python";
const jargon = "jargon";

console.log(python.includes("on") && jargon.includes("on"));

console.log(Math.floor(Math.random() * 50) + 50);
console.log(Math.floor(Math.random() * 255));

console.log(chellenge[Math.floor(Math.random() * chellenge.length)]);

// Functions

function hello(name) {
  return "hello " + name;
}

console.log(hello("john"));
console.log(hello("Doe"));
console.log(hello("Mark"));

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

let j = 0;
while (j < word.length) {
  console.log(word[j]);
  j++;
}

// GET EVEN NUMBERS
function evenN() {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

evenN();
// 2 Write a for loop that calculates the sum of all odd numbers between 1 and 50.

function Mahfoud() {
  let somme = 0;
  for (i = 1; i <= 50; i += 2) {
    somme += i;
  }
  console.log(somme);
}

Mahfoud();

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

primeTest(20);

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

getAllArmStrong();

console.log(isArmStrong(153));

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

console.log(binary(15));
console.log(binary(10));
console.log(binary(2));

// Multiple 3

function multiThree() {
  for (let i = 1; i <= 10; i++) {
    console.log(i * 3);
  }
}

multiThree();

function reverseNumber(n) {
  n = n.toString();
  let num = "";
  for (let i = n.length - 1; i >= 0; i--) {
    num += n[i];
  }
  return +num;
}

console.log(reverseNumber(1254));

function sumOfAllDigits(n) {
  let sum = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    sum += parseInt(n[i]);
  }

  return sum;
}

console.log(sumOfAllDigits(15));

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

isPerfect();

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

console.log(isPalindromic(676));

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

console.log(toHex(236));
