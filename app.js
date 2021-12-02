var userGuess = document.querySelectorAll('Button.guessing-btn');
var ansNum = Math.floor(Math.random() * 10) + 1;
console.log("SECRET NUMBER IS  "+ansNum);

var result = document.querySelector('.ans');
var attempts = document.querySelector('.attempts');
var resetBtn = document.querySelector('.reset-btn');

var guessNumber = 0

function handleUserGuess(event) {
    guessNumber++;
    attempts.textContent++;
    var userClicked = event.target;
    userClicked.disabled = true;

    var numClick = Number(userClicked.textContent)
    
    if (numClick !== ansNum && guessNumber <3){
        document.querySelector('.ans').textContent = numClick + " is wrong! Try again!" ;
    } else if(numClick == ansNum && guessNumber <= 1) {
        document.querySelector('.ans').textContent = numClick + " is CORRECT! You got it at the first try!";
        for (let r =0; r <userGuess.length; r++){
            userGuess[r].disabled = true;
        }
        resetBtn.disabled = true;
    } else if(numClick == ansNum && guessNumber > 1){
        document.querySelector('.ans').textContent = numClick + " is CORRECT! You got it in " + guessNumber + " attempts!";
        for (let r =0; r <userGuess.length; r++){
            userGuess[r].disabled = true;
        }
        resetBtn.disabled = true;
    } else {
        document.querySelector('.ans').textContent = numClick + " is wrong! You run out of chances! Good luck next time!" ;
        for (let r =0; r <userGuess.length; r++){
            userGuess[r].disabled = true;
        }
        resetBtn.disabled = true;
    }
    console.log(userClicked.textContent);
}

userGuess.forEach(function(button){
    button.addEventListener('click', handleUserGuess);
})

function handleReset(){
    for (let i =0; i <userGuess.length; i++){
        userGuess[i].disabled = false;
    }
    result.textContent = "";
    attempts.textContent = 0;
    guessNumber =0;
}

resetBtn.addEventListener('click',handleReset)


