function vowelsAndConsonants(s) {
    const validVowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsArray = [];
    let nonVowelsArray = [];
    let output = [];
    for (let char of s.toLowerCase()) {
        if (validVowels.includes(char)) {
          vowelsArray.push(char);
        } else {
          nonVowelsArray.push(char);
        }
    }
    output = vowelsArray.concat(nonVowelsArray);
    for (let char of output) {
      console.log(char);
    }
}
vowelsAndConsonants("javascriptloops");