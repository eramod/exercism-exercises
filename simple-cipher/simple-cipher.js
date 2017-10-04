var Cipher = function( key = 'fineweatherno' ) {
 this.key = key
 if ( !key.match(/^[a-z]+$/) ) {
  throw new Error('Bad key')
 }
 this.alphabet = ("abcdefghijklmnopqrstuvwxyz").split("")
 // Defining a method in the constructor will create a new instance of the 
 //  method whenever the new keyword is called, making it expensive. 
 // Because each instance is unique objects made with the Cipher constructor
 //  will not have strictly equivalent transform methods
 this.transform = function(message, reverser) {
  // reverser can be 1 or -1
  return message
    .split('')
    .map((inputLetter, index) => {
      let keyIndex    = index % this.key.length
      let outputIndex = (this.alphabet.indexOf(inputLetter) 
                        + (reverser * this.alphabet.indexOf(this.key[keyIndex]))
                        + 26 )
                        % 26
      return this.alphabet[outputIndex]
    })
    .join('')
  }
}

// Opening up the prototype to define a method ensures that the method is 
//  equivalent for all objects created with the Cipher constructor.
// This way of adding a method is less memory intensive. 
Cipher.prototype.encode = function(message) {
  return this.transform(message, 1)
}

Cipher.prototype.decode = function(cipher) {
  return this.transform(cipher, -1)
}

module.exports = Cipher;

// First attempt at encode method

// Cipher.prototype.encode = function(message) {
  // let inputLetters = message.split(""); // ['a', 'b', 'c']
  // this.key.split("") // ['f','i','n','e', 'w','e','a','t','e','r','n','o',]
  // let outputLetters = []

  // for (i = 0; i < inputLetters.length; i++) {
  //   // Add the index of each letter in the message to the index of the 
  //   //  corresponding letter of the key
  //   let indexOfEncodedLetter = (alphabet.indexOf(message[i]) 
  //                               + alphabet.indexOf(this.key[i]))
  //                               % 26
  //   outputLetters.push(alphabet[indexOfEncodedLetter])
  // }
  // return outputLetters.join('')
// }