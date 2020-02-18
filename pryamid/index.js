/*Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character. Make sure the
pyramid has spaces on both the left *and* right hand sides
---Examples
pyramid(1)
    '#'
pyramid(2)
   ' # '
   '###'
 pyramid(3)
    '  # '
    ' ### '
    '#####'   */

function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for (column = 0; column < n * 2 - 1; column++)
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            };
        console.log(level);
    };
};

pyramid(10);
/*
when value of argument is 10
4 - 0 <= 0 && 4 + 0 >= 0(' ')
4 - 0 <= 1 && 4 + 0 >= 1(' ')
4 - 0 <= 2 && 4 + 0 >= 2(' ')
4 - 0 <= 3 && 4 + 0 >= 3(' ')
4 - 0 <= 4 && 4 + 0 >= 4('#')
4 - 0 <= 5 && 5 + 0 >= 5(' ')
4 - 0 <= 6 && 6 + 0 >= 6(' ')
4 - 0 <= 7 && 7 + 0 >= 7(' ')
4 - 0 <= 8 && 8 + 0 >= 8(' ')
4 - 0 <= 9 && 9 + 0 >= 9(' ')
*/