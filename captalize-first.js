function capitalizeFirst (array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const result = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    result.push(string);

    return result;
}

capitalizeFirst(['hey', 'hi','hello']);


// function capitalizeFirst(arr) {
//     if (arr.length === 1) {
//         return [capitalize(arr[0])];
//     }
//     let result = capitalizeFirst(arr.slice(0, -1));
//     result.push(capitalize(arr[arr.length - 1]));

//     return result;
// }

// function capitalize(str) {
//     return str[0].toUpperCase() + str.slice(1)
// }

// capitalizeFirst(['hey', 'hi','hello']); // ["Hey", "Hi", "Hello"]