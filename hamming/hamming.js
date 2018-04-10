var Hamming = function() {};


Hamming.prototype.compute = function(string1, string2) {
  // The compute function take 2 strings and returns the number
  //  of differences

  if ( string1.length !== string2.length ) {
    throw new Error('DNA strands must be of equal length.');
  }

  return string1.split('').reduce((diffCount, letter, index) => {
    // This inner return is for the callback function passed to reduce
    // Its return value becomes the diffCount for the next iteration of
    //  the loop
    return diffCount + this.equivalent( letter, string2[index] )
  }, 0)
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