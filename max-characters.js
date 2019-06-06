function maxCharacters(str) {
    let charMap = {};
    let max = 0;
    let maxChar = '';

    for(let char of str) {
        if(!charMap[char]) charMap[char] = 1;
        else charMap[char]++
        // charMap[char] = charMap[char]+ 1 || 1;
    }

    for(let char in charMap) {
        if(charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
        }
    }

    return { maxChar, max };
}

maxCharacters([1,1,1,2,2]);