var wordsToBeGuessed = ["cat", "meow", "mew", "kitten", "furball", "purrball", "hairball", "purrito"];

var wordToBeGuessed = [Math.floor(Math.random() * wordsToBeGuessed.length)];

document.onkeyup = function(event) {
  var letterGuess = event.key;

  console.log(letterGuess);

}
