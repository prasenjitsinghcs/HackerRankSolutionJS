/**
 * Given two integers n and k, return the kth (1-indexed) symbol in the nth
 * row of a table of n rows.
 * 
 * Example:
 * Input: n = 4, k = 7 
 * Output: 0 
 * row | value
 * ----|---------
 * 1   | 0
 * 2   | 01
 * 3   | 0110
 * 4   | 01101001
 *             ^
 *       row = 4, index = 7
 */

function solve(n, k) {
    if (n === 1 && k === 1) {
        return 0;
    }

    const mid = Math.floor(Math.pow(2, n - 1) / 2);

    if (k <= mid) {
        return solve(n - 1, k);
    } else {
        return 1 - solve(n - 1, k - mid);
    }
}

console.log("solve(n = 4, k = 3) => " + solve(4, 3));
console.log("solve(n = 4, k = 4) => " + solve(4, 4));
console.log("solve(n = 4, k = 5) => " + solve(4, 5));
console.log("solve(n = 4, k = 6) => " + solve(4, 6));
console.log("solve(n = 4, k = 7) => " + solve(4, 7));

/**
 * n = 4   0 1 1 0 1 0 0 1
 * k =>    1 2 3 4 5 6 7 8          
 * 
 * solve(n = 4, k = 3) => 1
 * solve(n = 4, k = 4) => 0
 * solve(n = 4, k = 5) => 1
 * solve(n = 4, k = 6) => 0
 * solve(n = 4, k = 7) => 0
 * 
 */