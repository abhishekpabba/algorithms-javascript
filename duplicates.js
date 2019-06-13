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