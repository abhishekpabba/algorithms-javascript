function vowels(str) {
    let vowelsCount = 0;
    const validVowels = ['a', 'e', 'i', 'o', 'u']; //"aeiou"
  
    for (let char of str.toLowerCase()) {
      if (validVowels.includes(char)) {
        vowelsCount++;
      }
    }
  
    return vowelsCount;
  }
  
  vowels("Hello World!");
  
  // Alternative Solution
  // function vowels(str) {
  //   const validVowels = str.match(/[aeiou]/gi);
  //   return validVowels ? validVowels.length : 0;
  // }
  
  // vowels("Hello Worls!");
  
  