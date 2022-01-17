//global variables created to select specific elemnets
const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia"; //this will serve as a test word until API later
const guessedLetters = [];

//letter placeholders for guessing
const placeholder = function (word) { //create a fucntion to upate <p>'s inner text for "words-in-progress" element
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●"); //push adds new items to array
    }
    wordInProgress.innerText = placeholderLetters.join("");
}; //an array that was joined back to a string

placeholder(word); //"call the function and pass it the word"

//event listener for the button
guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault(); //stops form's reloading behavior
    message.innerText = ""; //empty the test of msg element
    const guess = letterInput.value; //grab what was entered in input
    const goodGuess = validateInput(guess); //make sure input is a single letter

    if (goodGuess){
        makeGuess(guess);
    }
    letterInput.value= ""; //empty the value of the inputs
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/; // this is using a "regular expression"
    if (input.length === 0){
        //is the input empy?
        message.innerText = "Please enter a letter.";
    } else if (input.lenth > 1) {
        //did they type more than one letter?
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        //did they type a number, special charactor, or non-letter text?
        message.innerText = "Please enter a letter from A to Z";
    } else {
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase(); //converts all inputs to uppercase letters
    if (guessedLetters.includes(guess)){ //checking if guessedLetters array already contains that letter
        message.innerText = "You just picked that. Try again."
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};