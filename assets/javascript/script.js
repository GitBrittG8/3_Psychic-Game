    // VARIABLES

var letters = ["v", "l", "m", "x", "z"];
var guessedLetters = [];
var letterToGuess = null;
var guessesLeft = 9;
var wins = 0;
var losses = 0;



    // FUNCTIONS

var updateGuessesLeft = function() {
document.querySelector("#guesses-left").innerHTML = guessesLeft; //Grabs html element, assigns it
};

var updateLetterToGuess = function() {
letterToGuess = letters[Math.floor(Math.random() * letters.length)]; //Assign letterToGuess from array
};

var updateGuessesSoFar = function() {
document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", "); // Display guessed letters.
};

var reset = function() {  // Reset Function
guessesLeft = 9;
guessedLetters = [];
updateLetterToGuess();
updateGuessesLeft();
updateGuessesSoFar();
};


    // On page load.
updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function(event) { // Capture the keyboard clicks.

    guessesLeft--; // Reduce by one.
    var letter = String.fromCharCode(event.keyCode).toLowerCase(); // To Lowercase
    guessedLetters.push(letter);  // Add the guess to the guessedLetters array

    updateGuessesLeft(); // call Update functions
    updateGuessesSoFar();

    if (letter === letterToGuess) { // Check if match.

        wins++; // If so, we win. Update and Display
        document.querySelector("#wins").innerHTML = wins;
        reset(); // Call reset function
    }



    if (guessesLeft === 0) {  // If no guesses...

        losses++; // Update and display.
        document.querySelector("#losses").innerHTML = losses;
        reset(); //Call Reset
    }
};