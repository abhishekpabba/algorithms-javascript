function twoSum(numArr, sum) {
  let pairs = [];
  let hashTable = [];

  numArr.forEach(num => {
    let currentNum = num;
    let counterPart = sum - num;
    if(hashTable.indexOf(counterPart) !== -1) {
      pairs.push([currentNum, counterPart]);
    }
    hashTable.push(currentNum);
  });

  return pairs;
}

twoSum([1, 4, 5, 2], 6);