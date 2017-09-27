var DnaTranscriber = function() {}

// This function does do more than one thing, but throwing an exception
//  is exceptional because ** IT BREAKS YOU OUT OF THE CONTROL FLOW **
// It's also preserving the input and output type, which is a big part of
//  what you're trying to avoid when a function does more than one thing
var nucleotideConversion = function(dnaNucleotide) {
  if ( dnaNucleotide === 'C' ) {
    return 'G'
  } else if ( dnaNucleotide === 'G') {
    return 'C'
  } else if ( dnaNucleotide === 'A') {
    return 'U'
  } else if ( dnaNucleotide === 'T') {
    return 'A'
  } else {
    // When you pass this function a letter other than the 4 above, it will
    //  stop everything and throw this error.
    // If the error handling did not exist here, JS would go up to the function
    //  that calls this function to look for error handling there and go up the
    //  call stack until it finds something that does handle the error
    throw new Error('Invalid input')
  }
}

DnaTranscriber.prototype.toRna = function(dnaSequence) {
  return dnaSequence.split('').map(nucleotideConversion).join('')
  // What this function does when you feed it a valid string
  //  split 'CGAT' -> ['C','G','A','T']
  //  map -> ['G','C','U','A']
  //  join -> 'GCUA'

  // What it does when you feed it an invalid string
  // split 'XXX' -> ['X', 'X', 'X']
  // map -> [ undefined, undefined, undefined ]
  // join -> ''
}

module.exports = DnaTranscriber;


// Alternate solution for learning about error handling in JS
// LEH = Learn Error Handling
//  using on function names so this reference code doesn't interfere with tests

var DnaTranscriberLEH = function() {

}

var nucleotideConversionLEH = function(dnaNucleotide) {
  if ( dnaNucleotide === 'C' ) {
    return 'G'
  } else if ( dnaNucleotide === 'G') {
    return 'C'
  } else if ( dnaNucleotide === 'A') {
    return 'U'
  } else if ( dnaNucleotide === 'T') {
    return 'A'
  } 
}

var throwUnlessRna = function(rnaNucleotide) {
  try {
    if ( rnaNucleotide === undefined ) {
      throw new Error('Invalid input' + ': ' + rnaNucleotide)
    }      
  }
  catch(e) {
    console.log(e.name + ': ' + e.message)
    throw e
  }
}


DnaTranscriberLEH.prototype.toRna = function(dnaSequence) {

  return dnaSequence.split('')
                    .map(function(dnaNucleotide) {
                      var rnaNucleotide = nucleotideConversionLEH(dnaNucleotide)
                      throwUnlessRna(rnaNucleotide)
                      return rnaNucleotide
                    })
                    .join('')

  // split 'CGAT' -> ['C','G','A','T']
  // map -> ['G','C','U','A']
  // join -> 'GCUA'
  
  // split 'XXX' -> ['X', 'X', 'X']
  // map -> [ undefined, undefined, undefined ]
  // join -> ''

}


