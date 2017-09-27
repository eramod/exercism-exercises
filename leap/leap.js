// This is a constructor function
var Year = function(year) {
  this.year = year
  // Note on defining a method inside the constructor: 
  //  Every time you create a new object from this constructor you create a new 
  //  instance of this function, so it's expensive in memory
  // https://zellwk.com/blog/es6/#arrow-functions
  //  Arrow function
  //    Single argument doesn't require parentheses
  //    Implicit return can be used with single line no block syntax
  this.isDivisibleBy = modulus => year % modulus === 0
};

// Note on defining a method on a constructor by reopening the prototype: 
//  The method is defined only once, so each new object that you create will 
//  have the same method attached to it
Year.prototype.isLeap = function() {
  if ( this.isDivisibleBy(400) ) {
    return true
  } else if ( this.isDivisibleBy(100) ) {
    return false
  } else if ( this.isDivisibleBy(4) ) {
    return true
  } else {
    return false
  }
};

module.exports = Year;