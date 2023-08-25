//1.Write a function that takes two numbers as parameters and returns their sum.
function sum(a, b) {
  return a + b;
}
console.log(sum(5,9));

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
let numberArray = [1, 2, 3, 8, 12, 4,17];
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
let array = [1, 2, 3, 4, 5, 6,7,8,9];
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
console.log(areAnagrams('hello0', 'world'));   // Output: false
console.log(areAnagrams('debit card', 'bad credit')); // Output: true


//10.Write a function that takes a number as a parameter and returns true if it is even, otherwise false.

function evenNum(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(evenNum(11));
console.log(evenNum(12));

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



//15.Write a function that takes a number as a parameter and return true if it is a prime number, otherwise false.

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
  "Apple",
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


/*22.Write a function that takes an array of strings
 as a parameter and returns a new array with the strings sorted in alphabetical order.*/

function sortedString(arr) {
  return arr.sort();
}

let arr = ["edcba", "zyx", "abc", "bca"];
let sortedArr = sortedString(arr);
console.log(sortedArr);
// Output: ["abc", "bca", "edcba", "zyx"]

//23.Write a function that takes a number as a parameter and returns the factorial of that number.
function factorials(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

let num = 10;
let Factorialize = factorials(num);

console.log(Factorialize);


/*
24.Write a function that takes an array of objects representing students (with properties like name, age, and grade)
 and returns an array of the names of students who have a grade higher than 80. */

// Function to filter and retrieve names of students with grade higher than 80
function getHighGradeStudents(studentArray) {
  // Filter students with grade higher than 80
  const highGradeStudents = studentArray
    .filter((student) => student.grade > 80)
    .map((student) => student.name);

  return highGradeStudents;
}

// Array of student objects
const students = [
  {
    name: "Alice",
    age: 18,
    grade: 90,
  },
  {
    name: "Bob",
    age: 17,
    grade: 75,
  },
  {
    name: "Charlie",
    age: 19,
    grade: 82,
  },
  {
    name: "David",
    age: 16,
    grade: 88,
  },
  {
    name: "Eve",
    age: 18,
    grade: 95,
  },
  {
    name: "Frank",
    age: 17,
    grade: 78,
  },
  {
    name: "Grace",
    age: 19,
    grade: 92,
  },
  {
    name: "Hannah",
    age: 16,
    grade: 61,
  },
  {
    name: "Isaac",
    age: 18,
    grade: 85,
  },
  {
    name: "Julia",
    age: 17,
    grade: 93,
  },
];

// Call the function to get names of high-grade students
const highGradeStudentNames = getHighGradeStudents(students);

// Output the names of high-grade students
console.log("Names of students with grade higher than 80:", highGradeStudentNames);


//25.Write a function that takes a sentence as a parameter and returns the longest word in the sentence.

function findLongestWord(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(" ");
  
  // Initialize a variable to store the longest word
  let longestWord = "";
  
  // Loop through each word in the array
  for (let i = 0; i < words.length; i++) {
    // Remove any punctuation from the word
    const cleanedWord = words[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    
    // Compare the length of the current word with the longest word
    if (cleanedWord.length > longestWord.length) {
      longestWord = cleanedWord;
    }
  }
  
  return longestWord;
}

// Example sentence
const sentence = "The quick brown fox jumped over the lazy dog.";
const longestWord = findLongestWord(sentence);

console.log("Longest word in the sentence:", longestWord);

//26.Write a function that takes an array of numbers as a parameter and returns a new array with the numbers squared.

function arraySquared(numbers) {
  let newArraySquare = [];
  for (let i = 0; i < numbers.length; i++ ) {
    newArraySquare.push(numbers[i] * numbers[i]);
  }
  return newArraySquare;
}

let numbers = [2, 3, 4, 5, 6,8];
let squaredArray = arraySquared(numbers);
squaredArray;


28.Write a function that takes a string as a parameter and returns true
 if it is a valid email address (has the format "user@example.com"), otherwise false. */

function isValidEmail(email) {
  // Regular expression pattern for a valid email address
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Test the email against the pattern and return the result
  return pattern.test(email);
}

// Test the function with example email addresses
console.log(isValidEmail("gauravsingh01.02.95@gmail.com")); // true
console.log(isValidEmail("invalid-email")); // false

/29.Write a function that takes an array of strings as a parameter and returns a new array with the strings reversed.

function reversedArray(strings) {
  return strings.map((str) => str.split("").reverse().join(""));
}

let strings = ["Hello", "gaurav", "how", "are", "you", "doing"];
let arrayReversed = reversedArray(strings);
console.log(arrayReversed);

//30.Write a function that takes an array of numbers as a parameter and returns the average of all the numbers.

function averageArray(number) {
  const average = number.reduce((a, b) => a + b, 0) / number.length;
  return average;
}

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayAverage = averageArray(number);
console.log(arrayAverage);

/*31.Write a function that takes an array of objects representing books 
(with properties like title, author, and pages) and returns the total number of pages of all the books.*/

function totalNumberOfPages(books) {
  // Use the reduce method to iterate through the array of books
  // and accumulate the total number of pages
  return books.reduce((sum, book) => sum + book.pages, 0);
}
// Array of book objects with properties like title, author, and pages
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 336,
  },
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pages: 279,
  },
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    pages: 310,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    pages: 288,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    pages: 720,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J. K. Rowling",
    pages: 309,
  },
];
// Call the totalNumberOfPages function with the books array as an argument
let arrayObject = totalNumberOfPages(books);
// Log the total number of pages to the console
console.log(arrayObject);


/*32.Write a function that takes an object representing a car (with properties like make, model, and year) 
and returns a sentence describing the car like "This is a 2020 Honda Civic."*/
function carDescription(carsModel) {
  return `This is a ${carsModel.year} ${carsModel.make} ${carsModel.model}.`;
}

const carsModel = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2021,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2023,
  },
  {
    make: "Chevrolet",
    model: "Camaro",
    year: 2022,
  },
  {
    make: "Nissan",
    model: "Altima",
    year: 2021,
  },
  {
    make: "Tesla",
    model: "Model S",
    year: 2022,
  },
  {
    make: "BMW",
    model: "X5",
    year: 2023,
  },
  {
    make: "Mercedes-Benz",
    model: "E-Class",
    year: 2022,
  },
  {
    make: "Audi",
    model: "A4",
    year: 2021,
  },
  {
    make: "Lexus",
    model: "RX",
    year: 2024,
  },
];

let carDescription1 = carDescription(carsModel[0]);

console.log(carDescription1);


//33.Write a function that takes a number as a parameter and return the sum of all the numbers from 1 to that number.

function sumNumbersUpTo(n) {
  let sum = 0;

  // Loop from 1 to n and add each number to the sum
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}


/*34.Write a function that takes a sentence as a parameter and returns 
the number of occurrences of each word in the sentence as an object.*/
function wordOccurrences(sentence) {
  const words = sentence.split(" ");
  const wordCount = {};

  for (const word of words) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
}

const sentences = "This is a test sentence. This is another test.";
const occurrences = wordOccurrences(sentences);
console.log(occurrences);

// Test the function with a number
let numberss = 10;
let result = sumNumbersUpTo(numberss);
console.log(result); // Output: 55


//35.Write a function that takes an array of numbers as a parameter and returns the largest number in the array.

function findLargestNumber(numbers) {
  if (numbers.length === 0) {
    return undefined; // Return undefined if the array is empty
  }

  let largest = numbers[0]; // Assume the first number is the largest

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]; // Update largest if a larger number is found
    }
  }

  return largest;
}

const numbers1 = [10, 5, 20, 8, 15];
const largestNumber = findLargestNumber(numbers1);
console.log("The largest number is:", largestNumber);
