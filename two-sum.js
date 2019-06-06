function twoSum(numArr, sum) {
  var pairs = [];
  var hashTable = [];

  numArr.forEach(num => {
    var currentNum = num;
    var counterPart = sum - num;
    if(hashTable.indexOf(counterPart) !== -1) {
      pairs.push([currentNum, counterPart]);
    }
    hashTable.push(currentNum);
  });

  return pairs;
}

twoSum([1, 4, 5, 2], 6);