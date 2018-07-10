var wordsToBeGuessed = ["cat", "meow", "mew", "kitten", "furball", "purrball", "hairball", "purrito", "whiskers", "paws", "scratch", "chase", "sleep", "nap"];
var guessThisWord;
var wordToBeGuessed;
var gameEnd = false;

var remainingGuesses = 10;
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
  var letterFound = false;
  var currentWordGuess = guessThisWord.text().split(" ");
  for(var i = 0; i < currentWordGuess.length; i++) {
    if (wordToBeGuessed[i] == letterGuess) {
      currentWordGuess[i] = letterGuess;
      letterFound = true;
    }
  }
  guessThisWord.text(currentWordGuess.join(" "));
  return letterFound;
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
    $("#modal-announcement").html('<p class="lead modal-message">You Win!</p><img class="modal-image" src="assets/images/leapingFish.png" alt="multiple cat toy fish leaping into the air">');
    wins++;
    $("#winsCount").text(wins);
    gameEnd = true;
    $("#resetGame").show();
  } else if (remainingGuesses == 0) {
    callModal();
    $("#modal-announcement").html('<img class="modal-image" src="assets/images/hudsonDrool.png" alt="large dog drooling"><p class="lead modal-message">Oh no, you have run out of guesses!<br>Would you like to play again?</p>')
    gameEnd = true;
    $("#resetGame").show();
  }
}

function gameReset() {
  $("#resetGame").hide();
  remainingGuesses = 10;
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

  var allGuessedLetters = $("#lettersGuessed").text().toLowerCase();
  //allGuessedLetters.indexOf(letterGuess == -1);


    if ((/^[a-z]+$/).test(letterGuess) && remainingGuesses > 0 && gameEnd == false) {
      var letterFound = updateWordBlank(letterGuess);
      if(!letterFound) {
        remainingGuesses--;
      }
      checkIfGameHasEnded();
      $("#guessesRemaining").text(remainingGuesses);
      $("#lettersGuessed").append(letterGuess.toUpperCase() + "  ");
    }



}
