//AEIOU
// function vowels(str) {
//     let reg = str.search(/[aeiou]/g);
//     return reg;
// };
// console.log(vowels('Hello there i am here'));

function vowels1(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(vowels1('Is there a vowel here'));

function vowels(str) {
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        };
    };
    return count;
};

console.log(vowels('Hello there'))