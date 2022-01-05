//global variables created to select specific elemnets
const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

//letter placeholders for guessing
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
}; //an array that was joined back to a string

placeholder(word);

//button

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault(); //stops form's reloading behavior
    const guess = letterInput.value; 
    console.log(guess);
    letterInput.value="";
});