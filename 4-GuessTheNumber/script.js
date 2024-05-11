let randonNumber = (parseInt(Math.random()*100+1))

const submit = document.querySelector('#subt')
const UserInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHI = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p= document.createElement('p');


let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(UserInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please Enter a valied number')
}
  else if(guess<1){
    alert('Please Enter a valied number')
  }
  else if(guess>100){
    alert('Please Enter a valied number')
  }
  else{
    prevGuess.push(guess)
    if(numGuess===11){
        displayGuess(guess)
        displayMessage(`Game over . Random Number was ${randonNumber}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
  }
}


function checkGuess(guess){
  if(guess===randonNumber){
     displayMessage(`You guessed it right . The number is ${randonNumber}`)
     endGame();
  }
  else if(guess < randonNumber){
     displayMessage('Number is too low')
  }
  else if (guess > randonNumber) {
    displayMessage(`Number is too High`);
  }
}

function displayGuess(guess){
  UserInput.value=''
  guessSlot.innerHTML+=`${guess} `
  numGuess++
  remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
  lowOrHI.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    UserInput.value=""
    UserInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<h2 id ="newGame">Start New Game</h2>'
    startOver.appendChild(p)
    playGame=false;
    newGame()
}

function newGame(){
  const newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){

    randonNumber = (parseInt(Math.random()*100+1))
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    UserInput.removeAttribute('disabled')
    startOver.removeChild(p)
    checkGuess.innerHTML=""

    playGame=true;
  })
}

