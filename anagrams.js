function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}
   
function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
   
anagrams('Rail! Safety', 'Fairy Tales');


// Alternative Solution
// function validAnagram(stringA, stringB) {
//   stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
//   if (stringA.length !== stringB.length) return false;
//   const aCharMap = {};

//   for (let char of stringA) {
//     aCharMap[char] = aCharMap[char] + 1 || 1;
//   }

//   for (let char of stringB) {
//     if (!aCharMap[char]) {
//       return false;
//     } else {
//       aCharMap[char] -= 1;
//     }
//   }

//   return true;
// }

// validAnagram('Rail! Safety', 'Fairy Tales');
   

// Alternative Solution
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//        return false;
//     }
//   }

//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};
//   const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();

//   for (let char of cleanedStr) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// anagrams('Rail! Safety', 'Fairy Tales');

// Alternative Solution