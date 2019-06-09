function bubbleSort(arr) {
  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j + 1]) {
        let lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
}

bubbleSort([8, 1, 20, 11, 5, 6]);