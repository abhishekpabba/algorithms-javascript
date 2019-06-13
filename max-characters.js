function maxCharacters(str) {
  let charMap = {};
  let max = 0;
  let maxChar = '';

  for(let char of str.toLowerCase()) {
    if (isAlphaNumeric(char)) { // slower using regex /[a-z0-9]/.test(char)
      charMap[char] = charMap[char] + 1 || 1;
    }
  }

  for(let char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return { maxChar, max };
  // return { charMap } // returns char count
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric 0-9
      !(code > 64 && code < 91) && // upper aplha A-Z
      !(code > 96 && code < 123)) { // lower aplha a-z
    return false;
  }

  return true;
}

maxCharacters("Hello World!!"); 
// maxCharacters([1,1,1,2,2]);