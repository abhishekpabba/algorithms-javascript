function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let indexOfMin = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[indexOfMin]) {
          indexOfMin = j;
        }
      }
      if (indexOfMin !== i) {
        let temp = arr[indexOfMin];
        arr[indexOfMin] = arr[i];
        arr[i] = temp;
      }
    }
  
    return arr;
  }
  
  selectionSort([1, 19, -30, 0, 12, 33]);
  // Time Complexity O(n^2)