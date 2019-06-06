function chunk(arr, size){
    const chunked = [];
    let index = 0;
  
    while(index < arr.length) {
      chunked.push(arr.slice(index, index + size));
      index += size;
    }
  
    return chunked;
}
  
chunk([1,2,3,4,5], 2);
  
// Alternative Solution
// function chunk(arr, size){
//   const chunked = [];

//   for(let elem of arr) {
//     const last = chunked[chunked.length - 1];

//     if(!last || last.length === size) {
//       chunked.push([elem]);
//     } else {
//       last.push(elem);
//     }
//   }

//   return chunked;
// }

// chunk([1,2,3,4,5], 2);