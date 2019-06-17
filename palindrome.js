function isPalindrome(string) {
  string = string.toLowerCase();
  let charactersArr = string.split('');
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let lettersArr = [];
  charactersArr.forEach(char => {
    if(validCharacters.indexOf(char) > -1) lettersArr.push(char);  
  });

  if(lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false; 
}

isPalindrome("Madam I'm Adam");


// Recursive Approach
// function isPalindrome(str) {
//   if (str.length === 1) return true;
//   if (str.length === 2) return str[0] === str[1];
//   if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
//   return false;
// }

// isPalindrome("mam");


// Alternative Solution
// function isPalindrome(str) {
//   let reversed = str.split('').reverse().join('');

//   return str === reversed;
// }

// isPalindrome("mam");

// function isPalindrome(str) {
//   return str.split('').every((char, index) => char === str[str.length - index - 1]);
// }

// isPalindrome("mam");