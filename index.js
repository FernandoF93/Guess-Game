let title = document.querySelector('h1')
let subtitle = document.querySelector('h2')
let guessInput = document.querySelector('#guess-input')
let goButton = document.querySelector('#go')
let guess1 = document.querySelector('#guess1')
let guess2 = document.querySelector('#guess2')
let guess3 = document.querySelector('#guess3')
let guess4 = document.querySelector('#guess4')
let guess5 = document.querySelector('#guess5')
let reset = document.querySelector('#reset')
let hint = document.querySelector('#hint')

function getRandomInt() {
    return Math.ceil(Math.random()*100);

  }

  
const winningNumber = getRandomInt();
console.log(winningNumber)
const playerGuess = null
const pastGuess = []

function game(){
    let guess = parseInt(guessInput.value)
    if (winningNumber === guess){

         title.innerText = 'Congrats you won! '
         subtitle.innerText = 'hit reset to play again.'
        return
    }

    let diff = Math.abs(guess - winningNumber)
        if (diff <=10)  {
             title.innerText = 'Really HOT!'
        }
         else if (diff < 25) {
             title.textContent="You are getting warmer";
        } else if (diff < 50) {
             title.textContent="Ooo a bit chilly";
        } else {
             title.textContent="Holy donuts its cold"
        }
    if (guess > winningNumber){
        subtitle.innerText = 'Guess lower.'
        
    } else {
        subtitle.innerText = 'Guess Higher.'
    }
}
goButton.addEventListener('click', game)

function guesses(){
    if (pastguess != winningNumber) {
        guess${i}.innerText = `${guessInput}`
    }
}
