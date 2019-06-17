function factorial(num) {
  if (num < 0) return 0;
  if(num === 1) return num;
  
  return num * factorial(num - 1);
}

factorial(4);

// Alternative Solution
// function factorial(num) {
//   let result = 0;
//   for(let i = 1; i < num; i++) {
//     result += result * i;
//   }

//   return result;
// }

// factorial(5);

// Alternative Solution
// function factorial(num) {
//   let result = 1;
//   for(let i = num; i > 1; i--) {
//     result = result * i;
//   }

//   return result;
// }

// factorial(5);   s