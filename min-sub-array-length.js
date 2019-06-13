// Sliding Window Pattern
function minSubArrayLength(values, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLength = Infinity;
  
    while (start < values.length) {
      if (total < sum && end < values.length) {
        total += values[end];
        end++;
      } else if (total >= sum) {
        minLength = Math.min(minLength, (end - start));
        total = total - values[start];
        start++;
      } else {
        break;
      }
    }
  
    return minLength === Infinity ? 0 : minLength;
  }
  
  minSubArrayLength([9, 8, 15, 12, 14, 3], 24); // 2