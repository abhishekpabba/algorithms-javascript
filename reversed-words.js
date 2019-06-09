function reversedWords(str) {
  let wordsArray = str.split(' ');
  let reversedWordArr = [];

  wordsArray.forEach(word => {  
    let reversedWord = '';
    for(let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
    }
    reversedWordArr.push(reversedWord);
  });
  
  return reversedWordArr.join(' ');
}

reversedWords("This is a string of words");