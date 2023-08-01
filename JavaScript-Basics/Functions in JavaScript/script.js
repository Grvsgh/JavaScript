//1.Write a function that takes two numbers as parameters and returns their sum.
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 6));

//2.Write a function that takes a string as a parameter and returns the length of the string.

function string(randomString) {
  return randomString.length;
}

console.log(string("Hello"));

//3.Write a function that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
let numbersArray = [1, 2, 8, 4, 5];
let result = sumArray(numbersArray);
console.log(result);

//4.Write a function that takes a string as a parameter and returns the string in reverse.

function reverseString(str) {
  let splitString = str.split("");

  let reverseArray = splitString.reverse();

  let joinArray = reverseArray.join("");

  return joinArray;
}
console.log(reverseString("Gaurav"));


/*5.Write a function that takes an array of strings as a parameter and 
returns the concatenated string of all elements in the array.*/

function concatenatedString(_concString) {
  return _concString.join("");
}

let arrayString = ["Fire", "Air", "Water"];

let arrayStringResult = concatenatedString(arrayString);

console.log(arrayStringResult);

//6.Write a function that takes an array of numbers as a parameter and returns the highest number in the array.

function highestNumber(high) {
  return Math.max(...high);
}
let numberArray = [1, 2, 3, 8, 12, 4, 6];
let highestNumberInArray = highestNumber(numberArray);
console.log(highestNumberInArray);

//7.Write a function that takes an array of numbers as a parameter and returns a new array with all the numbers doubled.

function doubledArray(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 2);
  }
  return newArray;
}
let array = [1, 2, 3, 4, 5, 6];
let resultArray = doubledArray(array);

console.log(resultArray);

//8.Write a function that takes an array of strings as a parameter and returns a new array with the length of each string.

function stringLengthArray(arr) {
  let lengthArray = [];
  for (let i = 0; i < arr.length; i++) {
    lengthArray.push(arr[i].length);
  }
  return lengthArray;
}

let arry = ["gaurav", "home", "00helloWORLD"];
let finalarry = stringLengthArray(arry);

console.log(finalarry);

