function caesarCipher(str, num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';


for(var i = 0; i < lowerCaseString.length; i++) {
  var currentLetter = lowerCaseString[i];
  if(currentLetter === ' ') {
    newString += currentLetter;
    continue;
  }

  var currentIndex = alphabets.indexOf(currentLetter);
  var newIndex = currentIndex + num;
  if(newIndex > 25) newIndex = newIndex - 26;
  if(newIndex < 0) newIndex = 26 + newIndex;

  if(str[i] === str[i].toUpperCase()) {
    newString += alphabets[newIndex].toUpperCase();
  } 
  else newString += alphabets[newIndex];
}
  return newString;
}

caesarCipher("Hello world", 3);