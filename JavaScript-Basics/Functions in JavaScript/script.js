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



/*9.Write a function that takes two strings as parameters and returns true if the two strings
 are anagrams (contain the same letters but in a different order), otherwise false. */

function areAnagrams(str1, str2) {
  let sortedStr1 = str1.toLowerCase().split("").sort().join();
  let sortedStr2 = str2.toLowerCase().split("").sort().join();

  return sortedStr1 === sortedStr2;
}
console.log(areAnagrams('listen', 'silent')); // Output: true
console.log(areAnagrams('hello', 'world'));   // Output: false
console.log(areAnagrams('debit card', 'bad credit')); // Output: true


//10.Write a function that takes a number as a parameter and returns true if it is even, otherwise false.

function evenNum(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(evenNum(5));
console.log(evenNum(8));

//11.Write a function that takes an array of numbers as a parameter and returns a new array with only the even numbers.

function getEvenNumbers(arr) {
  // Use the filter method to create a new array containing only the even numbers
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  return evenNumbers;
}

let numberArr = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbersArray = getEvenNumbers(numberArr);
console.log(evenNumbersArray); // Output: [2, 4, 6, 8]


//12.Write a function that takes a sentence as a parameter and returns the number of words in the sentence.

function wordCount(strng) {
  return strng.split(" ").length;
}

console.log(wordCount("hello gaurav!, how are you doing?")); //Output: 6



