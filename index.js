let startBtn = document.getElementById('start-btn');
let messageEl = document.getElementById('message-el');
let guessesEl = document.getElementById('guesses-el');
let randomNumber = Math.floor(Math.random() * 11)
let guesses = document.getElementById('guesses');

let mainDiv = document.getElementById('main-div');
let introDiv = document.getElementById('intro-div');
let allGuesses = document.getElementById('all-guesses');
let messagePsst = document.getElementById('message-psst');

var count_guess = 1;

function start() {
    mainDiv.style.visibility = "visible";
    introDiv.style.visibility = "hidden";
}

btn.addEventListener('click',function() {
    messagePsst.style.visibility = "hidden";

    let guess = document.getElementById('userGuess').value;
        if (guess < randomNumber) {
            messageEl.innerHTML = `So close! ${guess} is too low. Guess a higher number!`
        }
        else if (guess == randomNumber) {
            messageEl.innerHTML = `${guess} is the right number! Good job, Julianne!`
        };
        if (guess > randomNumber) { 
            messageEl.innerHTML = `Keep trying! ${guess} is too high. Guess a lower number!`
        }
    });        
        
// Add a NEW GAME BUTTON
// Fix concaenation message
// Save previous guesses
// Add lives, total score guessed
// Choose another version


