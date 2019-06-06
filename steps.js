function steps(n) {
    for (let row = 0; row < n; row++) {
      let stairs = '';
  
      for (let column = 0; column < n; column++) {
        if (column <= row) {
          stairs += '#';
        } else {
          stairs += ' ';
        }
      }
  
      console.log(stairs);
    }
  }
  
  steps(4);
  
  // Recursive Approach
  // function steps(n, row = 0, stairs = '') {
  //   if (n === row) {
  //     return;
  //   }
  
  //   if (n === stairs.length) {
  //     console.log(stairs);
  
  //     return steps(n, row + 1);
  //   }
  
  //   if (stairs.length <= row) {
  //     stairs += '#';
  //   } else {
  //     stairs += ' ';
  //   } 
  
  //   steps(n, row, stairs); 
  
  //   // const add = stairs.length <= row ? '#' : ' ';
  //   // steps(n, row, stairs + add);
  // }
  
  // steps(4);