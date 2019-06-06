function reversedWords(str) {
  var wordsArray = str.split(' ');
  var reversedWordArr = [];

  wordsArray.forEach(word => {  
    var reversedWord = '';
    for(var i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
    }
    reversedWordArr.push(reversedWord);
  });
  
  return reversedWordArr.join(' ');
}

reversedWords("This is a string of words");