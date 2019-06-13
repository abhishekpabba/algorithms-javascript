// Divide and Conquer Pattern
// Recurssive Approach
function binarySearch(array, key) {
  var middleIdx = Math.floor(array.length / 2);
  var middleElm = array[middleIdx];

  if(middleElm === key) return true;
  else if(middleElm < key && array.length > 1) {
    return binarySearch(array.splice(middleIdx, array.length), key);
  }
  else if(middleElm > key && array.length > 1) {
    return binnarySearch(array.splice(0, middleIdx), key);
  }
  else return false
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
// Time Complexity log(N)

// To Do
// function binarySearch(array, val) {
//   let min = 0;
//   let max = array.length - 1;

//   while (min <= max) {
//     let middleIdx = Math.floor((min + max) / 2);
//     let middleElm = array[middleIdx];
//     if (array[middleElm] < val) {
//       min = middleIdx + 1;
//     } else if (array[middleIdx] > val) {
//       max = middleIdx - 1;
//     } else {
//       return middleIdx;
//     }
//   }

//   return -1;
// }
// binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
// Time Complexity log(N)


// function binarySearch(array, val) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }

// binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
// Time Complexity O(N)