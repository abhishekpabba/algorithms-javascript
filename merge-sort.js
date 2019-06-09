function mergeSort(arr) {
    if(arr.length < 2) return arr;
  
    let middleIdx = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, middleIdx);
    let secondHalf = arr.slice(middleIdx);
  
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  
  function merge(arr1, arr2) {
    let result = [];
  
    while(arr1.length && arr2.length) {
      let minElm;
  
      if(arr1[0] < arr2[0]) minElm = arr1.shift();
      else minElm = arr2.shift();
      result.push(minElm);
    }
  
    if(arr1.length > 0) result = result.concat(arr1);
    else result = result.concat(arr2);
  
    return result;
    // return [...result, ...arr1, ...arr2]
  }
  
  mergeSort([2, 8, 22, 80, 3, 1, 66, 4, 88]);