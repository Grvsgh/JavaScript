// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(document.getElementById("userGuess").value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    document.getElementById("feedback").innerText = "Please enter a valid number between 1 and 100.";
  } else if (userGuess === targetNumber) {
    document.getElementById("feedback").innerText = "Congratulations! You guessed the correct number!";
  } else if (userGuess < targetNumber) {
    document.getElementById("feedback").innerText = "Try again! The number is higher.";
  } else {
    document.getElementById("feedback").innerText = "Try again! The number is lower.";
  }
}


//  Let's go through the JavaScript code step by step to understand how the Number Guessing Game works:

// const targetNumber = Math.floor(Math.random() * 100) + 1;

// We start by generating a random number between 1 and 100 using the Math.random() function. This function returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
// To get a random integer between 1 and 100, we multiply the random number by 100 and then use Math.floor() to round it down to the nearest whole number.
// We add 1 to the result because Math.random() can generate a value of 0, but we want the minimum value to be 1. So, the variable targetNumber now holds the randomly generated target number for the game.
// function checkGuess() { ... }

// This is the function that gets called when the user clicks the "Submit" button on the webpage. It's responsible for checking the user's guess and providing feedback.
// const userGuess = parseInt(document.getElementById("userGuess").value);

// We retrieve the user's guess from the input field with the id "userGuess" using document.getElementById().
// document.getElementById("userGuess").value gets the current value entered by the user in the input field.
// parseInt() is used to convert the user's input, which is a string, into an integer. This ensures that we can perform numerical comparisons.
// if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) { ... }

// We check if the user's guess is not a valid number or if it is outside the valid range (1 to 100).
// isNaN(userGuess) checks if the value of userGuess is "Not a Number." If the user entered a non-numeric value, this condition will be true.
// If the user's input is not a valid number or is outside the valid range, we display an error message asking the user to enter a valid number between 1 and 100.
// else if (userGuess === targetNumber) { ... }

// If the user's guess matches the randomly generated targetNumber, this condition will be true, and the code inside the block will be executed.
// We display a congratulatory message to the user, indicating that they guessed the correct number.
// else if (userGuess < targetNumber) { ... }

// If the user's guess is less than the targetNumber, this condition will be true, and the code inside the block will be executed.
// We display a message to the user, indicating that their guess is too low.
// else { ... }

// If none of the above conditions are met, it means the user's guess is greater than the targetNumber. So, this block of code will be executed.
// We display a message to the user, indicating that their guess is too high.