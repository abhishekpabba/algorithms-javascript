function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let result = capitalizeWords(array.slice(0, -1));
    result.push(array.slice(array.length - 1)[0].toUpperCase());
  
    return result;
  }
  
  capitalizeWords(['hey', 'hi', 'hello']); // ["HEY", "HI", "HELLO"]