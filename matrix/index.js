/*Write a function that accepts an interger N
and returns a NxN spiral matrix
eg 
matrix(2)
 [[1,2],
 [4,3]]
 
 matrix(3)
  [[1,2,3],
  [8,9,4],
  [7,6,5]]
  */

// function matrix(n) {
//     let expo = Math.pow(n, 2);
//     let values = [...Arr
//     // for(let sub of values.)
// };

// console.log(matrix(4));

function matrix(n) {
    const results = [];

    for (let i = 0; i < n; i++) {
        results.push([]);
    };

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        //Top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
            /*results[1][0] = 12;
            results[1][1] = 13;
            results[1][2] = 14;
            */

        };
        startRow++;

        //RIGHT COLUMN
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        };
        endColumn--;

        //BOTTOM ROW
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        };
        endRow--;

        //START COLUMN
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    };
    return results;
};

console.log(matrix(4));