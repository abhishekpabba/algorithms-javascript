// Recursive Approach
function productOfArray(arr) {
    if (arr.length === 0) return 1;
  
    return arr[0] * productOfArray(arr.slice(1));
}
  
productOfArray([3, 4, 5]); // 60