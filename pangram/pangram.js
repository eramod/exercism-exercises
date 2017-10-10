var Pangram = function(sentence) {
  this.sentence = sentence.toLowerCase();

}

const ALPHABET = ("abcdefghijklmnopqrstuvwxyz").split("");

Pangram.prototype.isPangram = function() {
  // Without an explicit return statement, A JS function returns undefined
  // Ruby returns the value of the last line
  for ( var i = 0; i < ALPHABET.length; i++ ) {
    let currentLetter = ALPHABET[i]
    if ( this.containsLetter(currentLetter) === undefined ) {
      return false;
    }
  }
  return true;
}

Pangram.prototype.containsLetter = function(letter) {
  if ( this.sentence.match(letter) ) {
    return true;
  }
}

module.exports = Pangram;