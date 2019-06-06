function reverseInt(num) {
    const reversed = num.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(num);
}
  
reverseInt(-510);

// Alternative Solution
// function reverseInt(num) {
//   const reversed = num.toString().split('').reverse().join('');
//   if(num < 0) return parseInt(reversed) * -1;

//   return parseInt(reversed);
// }