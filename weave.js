function weave(sourceOne, sourceTwo) {
    const q = new Queue();
  
    while (sourceOne.peek() || sourceTwo.peek()) {
      if (sourceOne.peek()) {
        q.add(sourceOne.remove());
      }
  
      if (sourceTwo.peek()) {
        q.add(sourceTwo.remove());
      }
    }
  
    return q;
  }
  
  class Queue {
    constructor() {
      this.data = [];
    }
  
    add(record) {
      this.data.unshift(record);
    }
  
    remove() {
      return this.data.pop();
    }
  
    peek() {
      return this.data[this.data.length - 1];
    }
  }
  
  
  const queueOne = new Queue();
  queueOne.add(1);
  queueOne.add(2);
  console.log(queueOne);
  const queueTwo = new Queue();
  queueTwo.add('Hi');
  queueTwo.add('There');
  console.log(queueTwo);
  const q = weave(queueOne, queueTwo);
  console.log(q);
  q.remove();
  console.log(q);
  q.remove();
  console.log(q);
  