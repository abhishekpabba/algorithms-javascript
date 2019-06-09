function sieveOfEratosthenes(n) {
  let primes = [];

  for(let i = 0; i <= n; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for(let j = 2; j <= Math.sqrt(n); j++) {
    for(let k = 2; j*k <= n; j++) {
      primes[j*k] = false;
    }
  }

  let result = [];

  for(let l = 0; l < primes.length; l++) {
    if(primes[l] === true) {
      result.push(l);
    }
  }

  return result;
}

sieveOfEratosthenes(10);