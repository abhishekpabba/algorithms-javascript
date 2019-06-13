// Sliding Window Pattern
function maxSubArraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (num > arr.length) return null;
  
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
  
    return maxSum;
  }
  
  maxSubArraySum([-1, -3, 2, 8, 9, 4, 2, 9], 3);
  // Time Complexity O(n)
  
  
  // Alternative Solution
  // function maxSubArraySum(arr, num) {
  //   if (num > arr.length) return null;
  //   let max = -Infinity;
  
  //   for(let i = 0; i < arr.length - num + 1; i++) {
  //     let temp = 0;
  //     for (let j = 0; j < num; j++) {
  //       temp += arr[i + j];
  //     }
  //     if (temp > max) {
  //       max = temp;
  //     }
  //   }
  
  //   return max;
  // }
  
  // maxSubArraySum([-1, -3, 2, 8, 9, 4, 2, 9], 3);
  // Time Complexity O(n^2)