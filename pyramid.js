function pyramid(n) {
    const midPoint = Math.floor((2 * n - 1)/2);
  
    for (let row = 0; row < n; row ++) {
      let level = '';
  
      for (let column = 0; column < 2 * n - 1; column++) {
        if (midPoint - row <= column && midPoint + row >= column) {
          level += '#'
        } else {
          level += ' ';
        }
      }
  
      console.log(level);
    }
  }
  
  pyramid(4);
  
  
  // Recursive Approach
  // function pyramid(n, row = 0, level = '') {
  //   const midPoint = Math.floor((2 * n - 1)/2);
  
  //   if (row === n) {
  //     return;
  //   }
  
  //   if (level.length === 2 * n - 1) {
  //     console.log(level);
  
  //     return pyramid(n, row + 1);
  //   }
  
  //   let add;
  //   if (midPoint - row <= level.length && midPoint + row >= level.length) {
  //     add = '#';
  //   } else {
  //     add = ' ';
  //   }
  
  //   pyramid(n, row, level + add);
  // }
  
  // pyramid(4);