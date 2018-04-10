var Hamming = function() {};


Hamming.prototype.compute = function(string1, string2) {
  // Takes 2 strings and returns the number of differences

  if ( string1.length !== string2.length ) {
    throw new Error('DNA strands must be of equal length.');
  }

  let diffCount = 0;

  string1 = string1.split('');
  string2 = string2.split('');

  string1.forEach((letter, index) => {
    diffCount = diffCount + this.equivalent( letter, string2[index] )
  })

  return diffCount;
};


Hamming.prototype.equivalent = function(letter1, letter2) {
  // When a function always has the same return type, it makes it more
  //  composable
  if ( letter1 === letter2 ) {
    return 0;
  } else {
    return 1;
  }
}

module.exports = Hamming;