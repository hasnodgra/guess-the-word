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
    const guess = letterInput.value; //create variable to capture value of input
    console.log(guess); //log out the value capturing the input
    letterInput.value=""; //empty the value of the inputs
});