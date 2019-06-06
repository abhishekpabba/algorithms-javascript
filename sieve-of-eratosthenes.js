function sieveOfEratosthenes(n) {
  var primes = [];

  for(var i = 0; i <= n; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for(var j = 2; j <= Math.sqrt(n); j++) {
    for(var k = 2; j*k <= n; j++) {
      primes[j*k] = false;
    }
  }

  var result = [];

  for(var l = 0; l < primes.length; l++) {
    if(primes[l] === true) {
      result.push(l);
    }
  }

  return result;
}

sieveOfEratosthenes(10);