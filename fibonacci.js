function fibonacci(n) {
  const result = [0, 1];

  for(let i = 2; i <=n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a+b);
  }

  return result[n];
}

fibonacci(7);
// O(n) Linear Iterative

// Alternative Solution
// function fibonacci(n){
//   if(n < 2) return n; 
//   else return fibonacci(n - 1) + fibonacci(n - 2);
// }

// fibonacci(7);
  // O(2^n) Exponential Recurssive