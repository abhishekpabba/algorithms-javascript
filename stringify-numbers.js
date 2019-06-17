function stringifyNumbers(obj) {
    let newObj = {};
  
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
  
    return newObj;
}
  
const obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            condition: true,
            random: 66
        }
    }
}
  
stringifyNumbers(obj);
// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             condition: true,
//             random: "66"
//         }
//     }
// }
