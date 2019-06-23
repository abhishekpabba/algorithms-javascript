function areThereDuplicates(values) {
    let hashMap = {};

    values.forEach(val => {
        hashMap[val] = hashMap[val] + 1 || 1;
    });

    for (let val in hashMap) {
        if(hashMap[val] > 1) {
            return true;
        }
    }

    return false;
}

areThereDuplicates([1, 2, 2]) // true


// Alternative Approach using Multiple(Two) Pointers
// function areThereDuplicates(values) {
//   values.sort((a, b) => a - b);
//   let start = 0;
//   let next = 1;

//   while (next < values.length) {
//     if (values[start] === values[next]) {
//        return true;
//     }
//     start++;
//     next++;
//   }
//   return false;
// }

// areThereDuplicates([1, 2, 2]) // true


// Alternative Solution
// function areThereDuplicates(values) {
//   return new Set(values).size !== values.length;
// }

// areThereDuplicates([1, 2, 2]) // true


// function findDuplicates(arr) {
//   arr.sort((a, b) => a - b);
//   let hashMap = {};
//   let output = [];

//   for (let val of arr) {
//     hashMap[val] = hashMap[val] + 1 || 1;
//   } 

//   for (let key in hashMap) {
//     if (hashMap[key] > 1) {
//       output.push(key);
//     }
//   }

//   return output;
// }

// findDuplicates([3, 4, 3, 1, 1, 5, 4, 6]);


// function findDuplicates(arr) {
//   arr.sort((a, b) => a - b);
//   let output = [];
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i+1]) {
//       output.push(arr[i+1]);
//     }
//   }

//   return output;
// }

// findDuplicates([3, 4, 3, 1, 1, 5, 4, 6]);


// function findDuplicates(arr) {
//     arr = arr.sort((a, b) => a - b);
//     let hashMap = {};
//     let output = [];
  
//     for (let val of arr) {
//       hashMap[val] = hashMap[val] + 1 || 1;
//       if (hashMap[val] > 1 && !output.includes(val)) {
//         output.push(val);
//       }
//     } 
  
  
//     return output;
//   }
  
//   findDuplicates([3, 4, 3, 1, 1, 5, 4, 6, 9, 9, 9]);