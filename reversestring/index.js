// function reverse(str) {
//     return str.split('').reverse().join('');
// };

// console.log(reverse('Hello'));

// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     };
//     return reversed;
// };

// console.log(reverse('hello'));

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
};

console.log(reverse('hello'));