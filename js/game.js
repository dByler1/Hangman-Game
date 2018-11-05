
class Hangman {

    constructor() {
        
        this.guessArr = [];
        this.selectedWordArr = [];
        this.matchedStorageArr = [];
        this.words = ["bud", "miller", "corona", "guiness", 'heineken', 'stella', 'sol', 'modelo', 'asahi'];
        this.guessLimit = 0;
        this.success = 0;
        this.fail = 0;
    }

    startGame() {
        //get random word
        const selectedWord = this.words[Math.floor(Math.random() * this.words.length)];
        this.selectedWordArr= Array.from(selectedWord); 
       
        //set guess limit
        this.guessLimit = this.selectedWordArr.length * 3;
    }

    limitChecker() {
        return this.guessArr.length >= this.guessLimit;
    }

    decrementGuesses() {
         return this.guessLimit - this.guessArr.length;
    }

//check for match between guess' and selected word
    compareGuessedArr() {
        return this.guessArr.filter( (guessdLetter) => {
            return this.selectedWordArr.includes(guessdLetter);
        })
    }

    winCheck() {
        return this.selectedWordArr.every( (letter) => {
            return this.guessArr.includes(letter);
        });
    }

    resetGameLogic() {
        this.guessArr = [];
        this.selectedWordArr = [];
        this.numberOfGuesses = 0;
        this.matchedStorageArr = [];
    }

    guessLetter(letter) {
        if(this.guessArr.includes(letter)) {
            return
        } else {
            this.guessArr.push(letter);
            this.pushMatchedLetters_correctOrder(letter);
        }
    }

    pushMatchedLetters_correctOrder(letter) {
        this.selectedWordArr.forEach((element, i) => {
            if (element == letter) {
                this.matchedStorageArr[i] = element;
            }
          });  
    }

}






