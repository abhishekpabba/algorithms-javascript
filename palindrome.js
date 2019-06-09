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