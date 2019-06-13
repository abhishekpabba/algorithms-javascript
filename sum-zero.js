function sumZero(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
  
    while(leftIndex < rightIndex) {
      let sum = arr[leftIndex] + arr[rightIndex];
      if (sum === 0) {
        return [arr[leftIndex], arr[rightIndex]];
      } else if (sum > 0) {
        rightIndex--;
      } else {
        leftIndex++;
      }
    }
  }
  
  sumZero([-3, -2, 1, 2, 3, 4]);
  // Multiple Pointers Pattern (from left and right)
  // Time Complexity O(n)
  // Space Complexity O(1)
  
  
  // Alternative Solution 
  // function sumZero(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[i] + arr[j] === 0) {
  //         return [arr[i], arr[j]]
  //       }
  //     }
  //   }
  // }
  
  // sumZero([-3, -2, 1, 2, 3]);
  
  // Time Complexity O(n^2)