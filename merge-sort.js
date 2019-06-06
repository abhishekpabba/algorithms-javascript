function mergeSort(arr) {
    if(arr.length < 2) return arr;
  
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