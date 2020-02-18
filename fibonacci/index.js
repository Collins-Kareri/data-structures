// function fib(n) {
//     var a = 0,
//         b = 1,
//         f = 1;
//     for (var i = 2; i < n; i++) {
//         f = a + b;
//         a = b;
//         b = f;
//     }
//     return f;
// };

// console.log(fib(8));

function fib(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = result[i - 1];
        const b = result[i - 2];
        result.push(a + b);
    };
    var data = result.map((data) => {
        return data;
    });
    console.log(data);
};

console.log(fib(8));

/*function fib(n) {
    if (n === 1) {
        return [0, 1];
    } else {
        var s = fib(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

console.log(fib(8));
*/