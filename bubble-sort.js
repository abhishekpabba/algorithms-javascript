function bubbleSort(arr) {
  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i - 1; j++) {
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

// Optimized & ES6 Syntax
// function bubbleSort(arr) {
//   let noSwap = true;
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   }

//   for (let i = 0; i < arr.length; i++) {
//     noSwap = true;
//     for (let j = arr.length - 1; j > i; j--) {
//       console.count("counter")
//       if (arr[j] < arr[j - 1]) {
//         swap(arr, j, j - 1);
//         noSwap = false;
//       }
//     }
//     if (noSwap) break; // If the array is already sorted and if in previous iteration there is no swap then break out of loop
//   }

//   return arr;
// }

// bubbleSort([1, 8, 9, 6, 15, 20]);
// Time Complexity O(n^2)