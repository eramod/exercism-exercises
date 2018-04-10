// Gigasecond
// Calculate the moment when someone has lived for 10^9 seconds.
// A gigasecond is 10^9 (1,000,000,000) seconds.


var Gigasecond = function(currentDate) {
  this.currentDate = currentDate;
}

Gigasecond.prototype.date = function() {
  // THIS IS IN MILLISECONDS! (not seconds)
  let gigasecondInMilliseconds = 1000000000 * 1000;
  return new Date(Date.parse(this.currentDate) + gigasecondInMilliseconds);
};


module.exports = Gigasecond;