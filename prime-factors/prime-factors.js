var primeFactorsConstructor = function() {

};


primeFactorsConstructor.prototype.for = function(num) {
  let factors = []; // array containing the prime factors
  let primes = [2,3,5];
  let primeIndex = 0;

  while ( num > 1 ) {
    let prime = primes[primeIndex];
    if ( num % prime === 0) {
      factors.push(prime);
      num = num/prime;
      primeIndex = 0;
    } else {
      primeIndex++;
    }
  }

  return factors;
};


module.exports = new primeFactorsConstructor;