
//===========   GAME VARIABLES =========================
const game = new Hangman();

//===========   GAME UTILITY FUNCTIONS =========================

//print placeholder 'blanks' for each letter in the random word
function placeholders(selectedWordArr) {
    for (var i = 0; i < selectedWordArr.length; i++) {
        //create a div for each letter
        var createDiv = document.createElement("div");
        //give each new div a class
        createDiv.className = "placeholder-style letter";
        //add each new div to the container
        document.getElementById("current-word").appendChild(createDiv);
    }
};



function scoreKeeper() {
    console.log(game.success)
    document.getElementsByClassName('win')[0].innerHTML =  "Wins: "+ game.success;
    document.getElementsByClassName('fail')[0].innerHTML =  "Losses: " + game.fail;
}

function printGuessedLetters() {
    document.getElementById("user-guess").innerHTML = "Letters Guessed: " + game.guessArr;
}

function printForCorrectGuess() {
    for(let i in game.matchedStorageArr) {
        //put each matched letter in the correct spot
        document.getElementsByClassName("letter")[i].innerHTML = game.matchedStorageArr[i];
        //remove the class 
        document.getElementsByClassName("letter")[i].classList.remove("placeholder-style");
    } 
}

function printDecrementedGuesses() {
    document.getElementById("guesses").innerHTML = "Number of Guesses: " + game.decrementGuesses();
}

function endLogic() {
    if (game.limitChecker() ) {
        document.getElementById("correct-word").innerHTML = "Sorry! The correct word was: " + game.selectedWordArr.join('');
        reset()
        game.resetGameLogic();
        game.fail ++;
        scoreKeeper()
    }
    else if (game.winCheck()) {
        document.getElementById("correct-word").innerHTML = "Congrats! The correct word was: " + game.selectedWordArr.join('');
        reset()
        game.resetGameLogic();
        game.success ++;
        scoreKeeper()
    }
}


// ====================================================================================

//===========   CORE FUNCTIONS =========================
var keyPressListener = (event) => {
    //check for alphabet letters - upper and lower case
    if(event.key.match(/^[A-Za-z]+$/)) {
       
        game.guessLetter(event.key);
        printDecrementedGuesses();
        printGuessedLetters();
        printForCorrectGuess();
        endLogic();
    }
}

var captureKeyPress = function () {   
    //listen for key presses
    document.addEventListener('keypress', keyPressListener )
}

function reset () {
    //clearning values
    document.getElementById("guesses").innerHTML = "Number of Guesses: ";
    document.getElementById("user-guess").innerHTML = "Letters Guessed: ";
    document.getElementById("current-word").innerHTML = "The word: "; 

    document.getElementById('start').style.visibility = 'visible';

    //remove event listener
    document.removeEventListener('keypress', keyPressListener);
}

//===========   START GAME =========================


document.getElementById("start").addEventListener('click', function(e){
   
    e.srcElement.style.visibility = 'hidden';

    game.startGame();

    document.getElementById("correct-word").innerHTML = "";

    document.getElementById("guesses").innerHTML = "Number of Guesses: " + game.guessLimit;

    //generate placeholders to show the user how many letters they need to guess
    placeholders(game.selectedWordArr);
    
    captureKeyPress();
 
});





