//same characters arranged differently
// function anagram(anagram1, anagram2) {
//     for (let element of anagram1) {
//         let re = element;
//         const match = re.match(anagram2);
//         console.log(match);
//     }
// };

// anagram('owl', 'low');
// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
// };

// function cleanString(str) {
//     return str
//         .replace(/[^w]/g, '')
//         .toLowerCase()
//         .split('')
//         .sort()
//         .join('');
// };

// console.log(anagrams('owl', 'low'));

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    };

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false
        };
    };
    return true;
};

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    };
    return charMap;
};

console.log(anagrams('owl', 'low'));

// var data = { a: 1, b: 2 };

// console.log(Object.keys(data));