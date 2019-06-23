function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  var middleIdx = Math.floor(arr.length / 2);
  var firstHalf = arr.slice(0, middleIdx);
  var secondHalf = arr.slice(middleIdx);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2) {
  var result = [];

  while(arr1.length && arr2.length) {
    var minElm;

    if(arr1[0] < arr2[0]) minElm = arr1.shift();
    else minElm = arr2.shift();
    result.push(minElm);
  }

  if(arr1.length > 0) result = result.concat(arr1);
  else result = result.concat(arr2);

  return result;
}

mergeSort([2, 8, 22, 80, 3, 1, 66, 4, 88]);
//Time Complexity O(nlogn)
//Space Complexity O(n)


// Alternative Solution for sorted arrays
// function merge(arr1, arr2) {
//   let result = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       result.push(arr1[i]);
//       i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     result.push(arr2[j]);
//     j++;
//   }

//   return result;
// }

// merge([3, 15, 19], [1, 18, 22, 36, 77]); // [ 1, 3, 15, 18, 19, 22, 36, 77 ]