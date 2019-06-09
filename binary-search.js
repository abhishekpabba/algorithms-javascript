function binarySearch(numArray, key) {
  let middleIdx = Math.floor(numArray.length / 2);
  let middleElm = numArray[middleIdx];

  if(middleElm === key) return true;
  else if(middleElm < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  }
  else if(middleElm > key && numArray.length > 1) {
    return binnarySearch(numArray.splice(0, middleIdx), key);
  }
  else return false
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);