// 1. Game page loads with instructions for user to press any key to start (all html and css)
// 2. When user presses any key computer selects random word from a list of possible words
// 3. Computer determines the length of the selected word
// 4. Function applies a number of divs, equal to the length of the word, to the html, to represent place holders for the letters
// 5. User receives a notification that they have x number of guesses. X should be equal to length of the selected word times 2.
// 7.  each time the user makes a guess, a counter is updated added to the html to show how many guesses remain.
// 8. within the same function, each user guess will also display to the screen.
// 9. Computer evaluates if user guess equals any character in string
// 10. If the user guess equals any letter in the string, that particular placeholder div should be replaced with the letter.
// 11. If all of the letters in the string are selected before the number of guesses equals zero, a notification that the user won will display.
// 12. If user guesses equals zero before the user selects all of the letters in the string, a notification that the user lost will display and ask the user to play again.


// Step 2, Step 3, Step 4, Step 5
var words = ["car", "bicycle", "airplane", "train"];
var userGuesses = [];



//starts the game when the user clicks the start button
var startButton = document.getElementById("start");
startButton.addEventListener("click", gameFunction());

// Game Function
function gameFunction() {
   //computer picks a word from the array of choices
    var computerPick = words[Math.floor(Math.random() * words.length)]
    
    //checks how long the word is 
    var wordLength = computerPick.length;
    
    //creates a div for each of the letters in the word
    for (var i = 0; i < wordLength; i++) {
                var placeHolder = document.createElement("div");
                document.getElementById("word-divs").appendChild(placeHolder);
            }
    //create the number of guesses and print that number to the screen.
    var numberGuesses = wordLength*2;
    

    //Key Stroke Counter Function. Count how many guesses the user made
    var keyupCounter = document.onkeyup = function () {
        var keyStrokesCounter = 0;
        keyStrokesCounter++;
        
       // document.getElementByID("guesses").appendChild(keyStrokesCounter);

        //once the user makes all the guesses, end the game. 
        if (keyStrokesCounter < numberGuesses) {
            numberGuesses--
            document.getElementById("guesses").innerHTML = "Guesses: " + numberGuesses;
        } else {
            document.getElementById("guesses").innerHTML = "Game Over - Click the button to play again";
            };
    }
}






