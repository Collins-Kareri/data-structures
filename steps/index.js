// function steps(n) {
//     let step = '';
//     for (let i = 0; i < n; i++) {
//         console.log(step += '#');
//     }
// };
// steps(4);

console.log(2 + 'b'); //automatic type conversation

function steps(n, i = 1) {
    if (i > n) {
        return;
    }
    console.log('#'.repeat(i) + ' '.repeat(n - 1));
    steps(n, i + 1)
};

console.log(steps(3));