var wordsToBeGuessed = ["cat", "meow", "mew", "kitten", "furball", "purrball", "hairball", "purrito"];

var wordToBeGuessed = wordsToBeGuessed[Math.floor(Math.random() * wordsToBeGuessed.length)];
console.log(wordToBeGuessed);


function createWordBlank () {
  var starterLetterBlank = "_";
  var starterWordBlank = [];
  for(var i = 0; i < (wordToBeGuessed.length); i++){
    starterWordBlank.push(starterLetterBlank);
  }
  starterWordBlank = starterWordBlank.join(" ");
  return starterWordBlank;
}

$(document).ready(function(){
  var guessThisWord = $("#wordToBeGuessed");
  guessThisWord.text(createWordBlank());
});





document.onkeyup = function(event) {
  var letterGuess = event.key;
  var guessThisWord = $("#wordToBeGuessed");






  function updateWordBlank () {
    var currentWordGuess = $(guessThisWord).text()
    var letterGuessLocation = wordToBeGuessed.indexOf(letterGuess);

    currentWordGuess = currentWordGuess.split(" ");
    if (letterGuessLocation != -1) {
      currentWordGuess[letterGuessLocation] = letterGuess;
    }
    guessThisWord.text(currentWordGuess.join(" "));

  }



    updateWordBlank();

  //console.log(starterWordBlank);

  //document.querySelector(#wordToBeGuessed).textContent = ;
}
