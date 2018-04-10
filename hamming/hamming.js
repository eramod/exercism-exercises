var Hamming = function() {};


Hamming.prototype.compute = function(string1, string2) {
  // Takes 2 strings and returns the number of differences

  if ( string1.length !== string2.length ) {
    throw new Error('DNA strands must be of equal length.');
  }

  let diffCount = 0;

  string1 = string1.split('')
  string2 = string2.split('')

  for ( let i = 0; i < string1.length; i++ ) {
    if( this.equivalent( string1[i], string2[i] ) === 1 ) {
      diffCount++;
    }

  }
  return diffCount;

};


Hamming.prototype.equivalent = function(string1, string2) {
  if ( string1 === string2 ) {
    return 0;
  } else {
    return 1;
  }
}

module.exports = Hamming;