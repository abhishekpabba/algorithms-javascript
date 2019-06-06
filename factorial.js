function factorial(num) {
  if(num === 1) {
    return num;
  }
  else {
    return num * factorial(num - 1);
  }
}

factorial(4);

// Alternative Solution
// function factorial(num) {
//   var result = 0;
//   for(var i = 1; i < num; i++) {
//     result += result * i;
//   }

//   return result;
// }

// factorial(5);