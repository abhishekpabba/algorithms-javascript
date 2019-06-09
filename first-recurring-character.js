function firstRecurringChar(str) {
    let charMap = {};
  
    for (let char of str.toLowerCase()) {
      if (charMap[char]) {
        return char 
      } else {
        charMap[char] = 1;
      }
    }
  
    return charMap;
}
  
firstRecurringChar('ABCDBA');