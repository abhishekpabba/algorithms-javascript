function mostCommonWord(phrase, bannedWord) {
  var phraseArr = phrase.replace(/[^a-zA-Z0-9]/g, ' ').toLowerCase().split(' ');
  var hashObj = {};
  var highestCountWord = '';
  var count = 0;

  phraseArr.forEach(word => {
    if(bannedWord.indexOf(word) === -1) {
      if(!hashObj[word]) hashObj[word] = 0;
      hashObj[word]++; 
    }
    console.log(hashObj);
    if(word in hashObj) {
      if(hashObj[word] > count) {
        count = hashObj[word];
        highestCountWord = word;
      }
    }
  });

  return { highestCountWord, count };
}


mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]);