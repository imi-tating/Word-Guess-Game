var wordsToBeGuessed = ["cat", "meow", "mew", "kitten", "furball", "purrball", "hairball", "purrito"];

var wordToBeGuessed = wordsToBeGuessed[Math.floor(Math.random() * wordsToBeGuessed.length)];
console.log(wordToBeGuessed);

document.onkeyup = function(event) {
  var letterGuess = event.key;
  var guessThisWord = $("#wordToBeGuessed");



  function createWordBlank () {
    var starterLetterBlank = "_";
    var starterWordBlank = [];
    for(var i = 0; i < (wordToBeGuessed.length); i++){
      starterWordBlank.push(starterLetterBlank);
    }
    starterWordBlank = starterWordBlank.join(" ");
    guessThisWord.text(starterWordBlank);
  }



    createWordBlank();




  //console.log(starterWordBlank);

  //document.querySelector(#wordToBeGuessed).textContent = ;


}
