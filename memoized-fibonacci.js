function fibMemo(index, cache) {
  cache = cache || [];
  if(cache[index]) {
    return cache[index];
  }
  else {
    if(index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }

  return cache[index];
}

fibMemo(7);

// Simplified
function fib(n, memo=[]) {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n-1, memo) + fib(n-2, memo);

  return memo[n];
}

// Alternative Solution
// function memoize(fn) {
//   const cache = {};
//   return function(...args) {
//     if(cache[args]) {
//       return cache[args];
//     }

//     const result = fn.apply(this, args);
//     cache[args] = result;

//     return result;
//   }
// }

// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return slowFib(n - 1) + slowFib(n - 2);
// }

// const fib = memoize(slowFib);

// slowFib(7);


