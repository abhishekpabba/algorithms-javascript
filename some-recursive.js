const isOdd = val => val % 2 !== 0;

function someRecursive(arr, cb) {
  if (arr.length === 0) return false;
  if (cb(arr[0])) return true;

  return someRecursive(arr.slice(1), cb);
}

someRecursive([2, 6, 8, 10], isOdd); // false
// someRecursive([4, 6, 10], val => val > 8) // true

