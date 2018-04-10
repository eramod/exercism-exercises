// Paired on this with Paul Ostazeski 7/21/17
const romanDigits = ["M", "D", "C", "L", "X", "V", "I"]
const arabicEquivalents = [ 1000, 500, 100, 50, 10, 5, 1 ]

var makeRomanDigit = (arabicEquivalent, repeatCount) => {
  let offset = arabicEquivalents.indexOf(arabicEquivalent)
  let romanDigit = romanDigits[offset]
  return romanDigit.repeat(repeatCount)
}

const longRoman = ['DCCCC', 'CCCC','LXXXX', 'XXXX', 'VIIII', 'IIII']
const shortRoman = ['CM', 'CD', 'XC', 'XL', 'IX', 'IV']

var toRoman = function(arabicNumber) {
  let roman = ''
  // memo accumulator, gets carried to next iteration
  //  e.g. if you're doing SUM memo is the total
  arabicEquivalents.reduce(function(memo, elt) {
    // number of times that digit should appear in the output
    let count = parseInt(memo/elt)
    roman += makeRomanDigit(elt, count)
    return memo % elt
  }, arabicNumber) // arabicNumber is the initial value of memo
  let finalRoman = longRoman.reduce(function(memo, pattern) {
    let offset = longRoman.indexOf(pattern)
    return memo.replace(pattern, shortRoman[offset])
  }, roman)
  return finalRoman
}

module.exports = toRoman;
