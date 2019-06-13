function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    if (!str1) return true; 
    if (!str2) return false;
    while (j < str2.length) {
      if (str2[j] === str1[i]) {
        i++;
      }
      if (i === str1.length) {
        return true;
      }
      j++;
    }
    return false;
  }
  
  isSubsequence("hello", "helexlo world"); //true
  // isSubsequence("abc", "treayxbtc"); // true
  // isSubsequence("abc", "acb"); //false
  
  // Alternative Solution - Recursive Approach
  // function isSubsequence(str1, str2) {
  //   if (!str1) return true;
  //   if (!str2) return false;
  
  //   if (str1[0] === str2[0]) {
  //     return isSubsequence(str1.slice(1), str2.slice(1));
  //   }
  
  //   return isSubsequence(str1, str2.slice(1));
  // }
  
  // isSubsequence("hello", "hello world");