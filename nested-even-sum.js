function nestedEvenSum(obj, sum = 0) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && (obj[key] % 2 === 0)) {
            sum += obj[key];
        }
    }
    return sum;
}

const obj1 = {
    outerObj: 2,
    nestedObj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        condition: true,
        str: "yup"
      }
    }
}
  
nestedEvenSum(obj1); // 6