function toRoman(arabicNumber) {
  if ( typeof(arabicNumber) !== 'number' ) {
    return 'Expected ' + arabicNumber + ' to be a number'
  }
  var romanNumber = ''
  var romanLetterKeys = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'M', 'MM', 'MMM']
  ]
  arabicNumber = arabicNumber.toString().split('').reverse() // 138 = ['8','3','1']
  for (var i = 0; i < arabicNumber.length; i++) { // loop through 0, 1, & 2 arrays
    romanNumber = romanLetterKeys[i][parseInt(arabicNumber[i])] + romanNumber
  }
  return romanNumber
}

module.exports = toRoman;