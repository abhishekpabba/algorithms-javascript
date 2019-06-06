function reversedString(str) {
    return str.split('').reverse().join('');
}
  
reversedString("Hello!");

// Alternative Solution
// function reversedString(str) {
//   let reversed = '';
//   for(let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// function reversedString(str) {
//   return str.split('').reduce((rev, char) => {
//     return char + rev;
//   }, '');
// }

// function reversedString(str) {
//   return str.split('').reduce((rev, char) => char + rev, '')
// }