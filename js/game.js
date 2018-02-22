

//this is the core of the game. when the start button is clicked, select a random word. Other game functions are called here
document.getElementById("start").addEventListener('click', function(){
    
    document.getElementById("start").addEventListener('click', function() {
        document.getElementById("guesses").innerHTML = "don't do that";
    });
    var words = ["Bud", "Miller", "Corona", "Guiness"];
    var selectedWord = words[Math.floor(Math.random() * words.length)];
    var selectedWordLength = selectedWord.length;
    
    //turns the selected word into an array - unceccesary 
    //x = Array.from(selectedWord)
    
    //calling functions below, passing data from this function as an argument
    placeholders( selectedWordLength );
    counter( selectedWordLength, selectedWord );
    console.log(selectedWord + selectedWordLength) 
});



function placeholders( selectedWordLength ) {
    //this would print the selected word as a whole word - uncessecary 
    //document.getElementById("current-word").innerHTML = globalObject.selectedWord;
    
    //this loops through the selected word and creates a div for each letter with a css class
    for (var i = 0; i < selectedWordLength; i++) {
        var createDiv = document.createElement("div");
        var existingDiv = document.getElementById("current-word");
        createDiv.className = "placeholder-style";
        existingDiv.appendChild(createDiv);
    }
};

//this function does a lot
function counter( selectedWordLength, selectedWord ) {
    
    var numberOfGuesses = selectedWordLength * 2;
    
    //stores each of the user guesses in an array
    var userGuessed = [];
    console.log(userGuessed);
    var keyStrokesCounter = 0;
    
    //turns the selected word into an array so each letter can be compared to user guesses
    var wordArray = Array.from(selectedWord);
    document.getElementById("guesses").innerHTML = "Guesses Left: " + numberOfGuesses;
    
    //this function runs on keypress so we do all things keypress in here
    document.onkeypress = function(evt) {
        evt = evt || window.event;
    
        // Ensure we only handle printable keys
        var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
        
        //push each of the users guesses as a string into an array
        if (charCode) {
            userGuessed.push(String.fromCharCode(charCode));
        }
        
        //print each of the users guesses to the screen
        document.getElementById("user-guess").innerHTML = "Letters Guessed: " + userGuessed;
        
        //if the number of guesses is less than the guesses allowed, decrement and print the number of guesses left
        if (keyStrokesCounter < numberOfGuesses) {
            numberOfGuesses--
            document.getElementById("guesses").innerHTML = "Guesses Left: " + numberOfGuesses;

        } 
        if (userGuessed.value.match(wordArray)) {
            
            console.log(true);

        } else {
            //once the user makes all the guesses, end the game by clearning all the values
            document.getElementById("guesses").innerHTML = "Game Over - Click the start button to play again";
            document.getElementById("user-guess").innerHTML = "";
            document.getElementById("current-word").innerHTML = "";
        };
        
    };     
}



