class Stack {
    constructor() {
      this.data = [];
    }
  
    push(record) {
      this.data.push(record);
    }
  
    pop() {
      return this.data.pop();
    }
  
    peek() {
      return this.data[this.data.length - 1];
    }
}
  
const s = new Stack();
s.push(1);
console.log(s);
s.push(2);
console.log(s);
s.pop();
console.log(s);

// Alternative Solution
// class Node {
//   constructor(value){
//       this.value = value;
//       this.next = null;
//   }
// }

// class Stack {
//   constructor(){
//       this.first = null;
//       this.last = null;
//       this.size = 0;
//   }
//   push(val){
//       var newNode = new Node(val);
//       if(!this.first){
//           this.first = newNode;
//           this.last = newNode;
//       } else {
//           var temp = this.first;
//           this.first = newNode;
//           this.first.next = temp;
//       }
//       return ++this.size;
//   }
//   pop(){
//       if(!this.first) return null;
//       var temp = this.first;
//       if(this.first === this.last){
//           this.last = null;
//       }
//       this.first = this.first.next;
//       this.size--;
//       return temp.value;
//   }
// }