var wordsToBeGuessed = ["cat", "meow", "mew", "kitten", "furball", "purrball", "hairball", "purrito", "whiskers", "paws"];
var guessThisWord;
var wordToBeGuessed;
var gameEnd = false;

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

function callModal() {
  // Get the modal
  var modal = document.getElementById('myModal');
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}

function checkIfGameHasEnded() {
  if (!guessThisWord.text().includes("_")) {
    callModal();

    $("#modal-message").text("You Win!");
    $("#modal-image").attr({
      "src": "assets/images/leapingFish.png",
      "alt": "multiple cat toy fish leaping into the air"
    });

    wins++;
    $("#winsCount").text(wins);
    gameEnd = true;
    $("#resetGame").show();
  } else if (remainingGuesses == 0) {
    callModal();
    $("#modal-message").text("Oh no, you have run out of guesses! Would you like to play again?");
    $("#modal-image").attr({
      "src": "assets/images/hudsonDrool.png",
      "alt": "large dog drooling"
    });
    gameEnd = true;
    $("#resetGame").show();
  }
}

function gameReset() {
  $("#resetGame").hide();
  remainingGuesses = 11;
  $("#guessesRemaining").text(10);
  chooseWord();
  $("#wordToBeGuessed").text(createWordBlank());
  $("#lettersGuessed").text("");
  gameEnd = false;
}

$(document).ready(function(){
  chooseWord();
  guessThisWord = $("#wordToBeGuessed");
  guessThisWord.text(createWordBlank());
  $("#resetGame").hide();
  $("#resetGame").on("click", gameReset)
});

document.onkeyup = function(event) {
  var letterGuess = event.key;

    if ((/^[a-z]+$/).test(letterGuess) && remainingGuesses > 0 && gameEnd == false) {
      updateWordBlank(letterGuess);
      remainingGuesses--;
      checkIfGameHasEnded();

      $("#guessesRemaining").text(remainingGuesses);
      $("#lettersGuessed").append(letterGuess.toUpperCase() + "  ");
    }
}
