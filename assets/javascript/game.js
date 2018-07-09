var wordsToBeGuessed = ["cat", "meow", "mew", "kitten", "furball", "purrball", "hairball", "purrito"];
var guessThisWord;
var wordToBeGuessed;

var remainingGuesses = 11;
var wins = 0;

function chooseWord() {
  wordToBeGuessed = wordsToBeGuessed[Math.floor(Math.random() * wordsToBeGuessed.length)];
  console.log(wordToBeGuessed);
}

function createWordBlank() {
  var starterLetterBlank = "_";
  var starterWordBlank = [];
  for(var i = 0; i < (wordToBeGuessed.length); i++){
    starterWordBlank.push(starterLetterBlank);
  }
  starterWordBlank = starterWordBlank.join(" ");
  return starterWordBlank;
}

function updateWordBlank(letterGuess) {
  var currentWordGuess = guessThisWord.text().split(" ");

  for(var i = 0; i < currentWordGuess.length; i++) {
    if (wordToBeGuessed[i] == letterGuess) {
      currentWordGuess[i] = letterGuess;
    }
  }
  guessThisWord.text(currentWordGuess.join(" "));
}

function checkIfGameHasEnded() {
  if (!guessThisWord.text().includes("_")) {
    alert("You Win!");
    wins++;
    $("#winsCount").text(wins);
    gameReset();
  } else if (remainingGuesses == 0) {
    alert("Oh no, you have run out of guesses! Would you like to play again?");
    gameReset();
  }
}

function gameReset() {
  $("#resetGame").show();
  $("#resetGame").on("click", function() {
    $("#resetGame").hide();
    remainingGuesses = 11;
    $("#guessesRemaining").text(10);
    chooseWord();
    $("#wordToBeGuessed").text(createWordBlank());
    $("#lettersGuessed").text("");
  })
}

$(document).ready(function(){
  chooseWord();
  guessThisWord = $("#wordToBeGuessed");
  guessThisWord.text(createWordBlank());
  $("#resetGame").hide();
});


document.onkeyup = function(event) {
  var letterGuess = event.key;

    if ((/^[a-z]+$/).test(letterGuess) && remainingGuesses > 0) {
      updateWordBlank(letterGuess);
      remainingGuesses--;
      checkIfGameHasEnded();

      $("#guessesRemaining").text(remainingGuesses);
      $("#lettersGuessed").append(letterGuess + "  ");
    }











  //console.log(starterWordBlank);

  //document.querySelector(#wordToBeGuessed).textContent = ;
}
