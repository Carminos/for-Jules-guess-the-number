let cbtn = document.getElementById('cbtn');
let rbtn = document.getElementById('rbtn');
let messageEl = document.getElementById('message-el');
let randomNumber = Math.floor(Math.random() * 11)

cbtn.addEventListener('click', function() {
    let guess = document.getElementById('userGuess').value; // get user value
        if (guess == randomNumber) {
            messageEl.innerHTML = `Nice! You guessed the right number, ${guess}!`
        }
        else if(guess < randomNumber) {
            messageEl.innerHTML = `Sorry, ${guess} is too low. Guess a higher number.`
        }
        if (guess > randomNumber) { 
            messageEl.innerHTML = `Sorry, ${guess} is too high. Guess a lower number.`
        }
    });        
        



      
