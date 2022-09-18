/**
 * Print a given matrix in spiral form
 * 
 * Given a 2D array, print it in spiral form. See the following examples.
 */
/*

Example 1: 4 x 4
1  2  3  4
5  6  7  8
9  10 11 12
13 14 15 16

Example 2: contains only one row (1 x 4)
1  2  3  4

Example 3: contains only one coloum (4 x 1)
1
2
3
4

*/

function spiralOrder(arr) {
    var left = 0, right = arr[0].length - 1;
    var top = 0, bottom = arr.length - 1;
    var ans = [];
    console.log(`top - ${top}, bottom - ${bottom}, left - ${left}, right - ${right}`)
    while (left <= right && top <= bottom) {

        // Print left to right
        for (var i = left; i <= right; i++) {
            ans.push(arr[top][i]);
        }
        top++;

        if (top > bottom) {
            break;
        }

        console.log(`top - ${top}, bottom - ${bottom}, left - ${left}, right - ${right}`)

        // Print top to bottom
        for (var i = top; i <= bottom; i++) {
            ans.push(arr[i][right]);
        }
        right--;

        if (left > right) {
            break;
        }

        console.log(`top - ${top}, bottom - ${bottom}, left - ${left}, right - ${right}`)

        // Print right to left
        for (var i = right; i >= left; i--) {
            ans.push(arr[bottom][i]);
        }
        bottom--;


        console.log(`top - ${top}, bottom - ${bottom}, left - ${left}, right - ${right}`)

        // Print bottom to top
        for (var i = bottom; i >= top; i--) {
            ans.push(arr[i][left]);
        }
        left++;

        console.log(`top - ${top}, bottom - ${bottom}, left - ${left}, right - ${right}`)
    }
    console.log(ans);
}

var arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

spiralOrder(arr);

/**
 * Time Complexity: O(m*n). To traverse the matrix O(m*n) time is required.
 * Auxiliary Space: O(1). No extra space is required.
 */


