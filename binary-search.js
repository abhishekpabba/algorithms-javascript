// Divide and Conquer Pattern
// Recurssive Approach
function binarySearch(array, key) {
  let middleIdx = Math.floor(array.length / 2);
  let middleElm = array[middleIdx];

  if(middleElm === key) return true;
  else if(middleElm < key && array.length > 1) {
    return binarySearch(array.splice(middleIdx, array.length), key);
  }
  else if(middleElm > key && array.length > 1) {
    return binnarySearch(array.splice(0, middleIdx), key);
  }
  else return false
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
// Time Complexity O(logn)

// To Do
// function binarySearch(array, val) {
//   let min = 0;
//   let max = array.length - 1;

//   while (min <= max) {
//     let middleIdx = Math.floor((min + max) / 2);
//     let middleElm = array[middleIdx];
//     if (array[middleElm] < val) {
//       min = middleIdx + 1;
//     } else if (array[middleIdx] > val) {
//       max = middleIdx - 1;
//     } else {
//       return middleIdx;
//     }
//   }

//   return -1;
// }
// binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
// Time Complexity O(logn)

// Alternative Approach
// class Node {
//   constructor(value){
//       this.value = value;
//       this.left = null;
//       this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor(){
//       this.root = null;
//   }

//   insert(value){
//       var newNode = new Node(value);
//       if(this.root === null){
//           this.root = newNode;
//           return this;
//       }
//       var current = this.root;
//       while(true){
//           if(value === current.value) return undefined;
//           if(value < current.value){
//               if(current.left === null){
//                   current.left = newNode;
//                   return this;
//               }
//               current = current.left;
//           } else {
//               if(current.right === null){
//                   current.right = newNode;
//                   return this;
//               } 
//               current = current.right;
//           }
//       }
//   }

//   find(value){
//       if(this.root === null) return false;
//       var current = this.root,
//           found = false;
//       while(current && !found){
//           if(value < current.value){
//               current = current.left;
//           } else if(value > current.value){
//               current = current.right;
//           } else {
//               found = true;
//           }
//       }
//       if(!found) return undefined;
//       return current;
//   }

//   contains(value){
//       if(this.root === null) return false;
//       var current = this.root,
//           found = false;
//       while(current && !found){
//           if(value < current.value){
//               current = current.left;
//           } else if(value > current.value){
//               current = current.right;
//           } else {
//               return true;
//           }
//       }
//       return false;
//   }
// }


// //      10
// //   5     13
// // 2  7  11  16

// var tree = new BinarySearchTree();
// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)