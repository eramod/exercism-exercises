var Pangram = function(sentence) {
  this.sentence = sentence.toLowerCase();

}

const ALPHABET = ("abcdefghijklmnopqrstuvwxyz").split("");

Pangram.prototype.isPangram = function() {
  // Without an explicit return statement, A JS function returns undefined
  // Ruby returns the value of the last line
  let containsAllLetters = true;
  ALPHABET.map((currentLetter) => {
    if ( this.containsLetter(currentLetter) === false ) {
      containsAllLetters = false;
    }
  })
  return containsAllLetters;
}

Pangram.prototype.containsLetter = function(letter) {
  return !!this.sentence.match(letter)
}

module.exports = Pangram;