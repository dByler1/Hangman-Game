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
//var keyStrokeCounter = 0;
console.log("javascript")

// Start Button Function
function myFunction() {
    //console.log("button works!")
   
    var computerPick = words[Math.floor(Math.random() * words.length)]
    console.log(computerPick); //prints step 1
    
    var wordLength = computerPick.length;
    console.log(wordLength); //prints step 2
    
    for (var i = 0; i < wordLength; i++) {
                console.log("running");

                var placeHolder = document.createElement("div");
                document.getElementById("word-divs").appendChild(placeHolder);
            }

    var numberGuesses = wordLength*2;

    document.getElementById("guesses").innerHTML = "Guesses: " + numberGuesses;

//Key Stroke Counter Function

    var keyupCounter = document.onkeyup = function () {
    
        var keyStrokesCounter = 0;
        keyStrokesCounter++;

        if (keyStrokesCounter < numberGuesses) {
            numberGuesses--
        } else {
            alert("Game Over");
            };
    }
}

var startButton = document.getElementById("#start");
console.log(startButton);




