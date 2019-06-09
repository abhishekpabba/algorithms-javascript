function matchingPair(numArr, sum) {
    let hashTable  = [];
  
    for (let num of numArr) {
      let counterPart = sum - num;
      if (hashTable.indexOf(num) !== -1) { 
        return true
      }
      else { 
        hashTable.push(counterPart);
      }
    }
  
    return false;
}
  
matchingPair([1, 4, 9, 2], 6);