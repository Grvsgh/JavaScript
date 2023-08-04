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


/*13.Write a function that takes an array of numbers as a parameter 
and returns the product of all the numbers in the array.*/

function productArray(arrayyyy) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
}
let arrayyy = [1, 2, 3, 4, 5];
let product = productArray(array);
console.log(product); // Output will be 120 (1 * 2 * 3 * 4 * 5)

//14.Write a function that takes a string as a parameter and returns the number of vowels in the string.
function getCount(str) {
  let newVowelCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  const lowercaseStr = str.toLowerCase(); // Convert the string to lowercase

  for (let char of lowercaseStr) {
    if (vowels.includes(char)) {
      newVowelCount++;
    }
  }
  return newVowelCount;
}

let string = "Hello Gaurav, how are you doing?";
let finalCount = getCount(string);
console.log(finalCount);



//15.Write a function that takes a number as a parameter and returns true if it is a prime number, otherwise false.

function isPrimeNumber(num) {
  if (num <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  // Check for divisibility from 2 up to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If the number is divisible by any other number, it is not prime
    }
  }

  return true; // If the number is not divisible by any number other than 1 and itself, it is prime
}

console.log(isPrimeNumber(5)); // Output: true (5 is a prime number)
console.log(isPrimeNumber(8)); // Output: false (8 is not a prime number)

/*16.Write a function that takes an array of numbers as a parameter and 
returns a new array with the numbers sorted in ascending order.*/

function sortNumbersAscending(arr) {
  // Use the sort() method with a custom sorting function
  return arr.sort((a, b) => a - b);
}

// Example usage:
const numbers = [3, 1, 7, 5, 2, 9, 4];
const sortedNumbers = sortNumbersAscending(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5, 7, 9]

//17.Write a function that takes two arrays as parameters and returns a new array with the elements of both arrays combined.

function bothArray(arry1, arry2) {
  return arry1.concat(arry2);
}

let arry1 = [1, 2, 3, 4, 5];
let arry2 = [6, 7, 8, 9];
let newArryy = bothArray(arry1, arry2);

console.log(newArryy); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]



//18.Write a function that takes a string as a parameter and returns true if it is a palindrome (reads the same backward as forward), otherwise false.

function palindrome(strings) {
  return strings === strings.split("").reverse().join();
}

let strings = "radar";
let palindromeString = palindrome(strings);
console.log(palindromeString);


//19.Write a function that takes an array of strings as a parameter and returns a new array with the strings sorted in alphabetical order.
function alphabeticalOrder(strings) {
  return strings.sort();
}

let arrayString = [
  "apple",
  "banana",
  "cherry",
  "samosa",
  "idli",
  "dosa",
  "vadapao",
];
let newArrayString = alphabeticalOrder(arrayString);
console.log(newArrayString);


//20.Write a function that takes a sentence as a parameter and returns the sentence with all the words capitalized.

function capitalizedSentence(sentence) {
  // Split the sentence into words
  const words = sentence.split(" ");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the words back together to form the new sentence
  return capitalizedWords.join(" ");
}

let sentence = "hello gaurav how are you doing Today?";
let newSentence = capitalizedSentence(sentence);

console.log(newSentence);


//21. Write a function that takes a string as a parameter and returns the number of uppercase letters in the string.
function countUpperCase(string) {
  let upper = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] >= "A" && string[i] <= "Z") upper++;
  }
  return upper;
}

let string = "#Hello Gaurav  HOW Are You Doing";
let uppercaseCount = countUpperCase(string);
uppercaseCount;
