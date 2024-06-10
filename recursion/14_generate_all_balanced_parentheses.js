/**
 * Given a number n, the task is to generate all possible n pairs of balanced 
 * parentheses.
 */

/**
 * 
 * Input: n = 1
 * Output: 
 * {}
 * Explanation: This the only one sequence of balanced parenthesis formed 
 * using 1 pair of balanced parenthesis.
 * 
 * Input : n = 2
 * Output: 
 * {}{}
 * {{}}
 * Explanation: This the only two sequences of balanced parenthesis formed 
 * using 2 pair of balanced parenthesis.
 * 
 */

function solve(open, close, output) {
    if (open === 0 && close === 0) {
        console.log(output);
        return;
    }

    if (open > 0) {
        solve(open - 1, close, output + "(");
    } if (close > open) {
        solve(open, close - 1, output + ")");
    }
}

function main(n) {
    console.log(`\nInput: n = ${n}`);
    console.log(`Output: `);
    solve(n, n, "");
}

main(1);
main(2);
main(3);

/**
 * Input: n = 1
 * Output: 
 * ()
 * 
 * Input: n = 2
 * Output: 
 * (())
 * ()()
 * 
 * Input: n = 3
 * Output: 
 * ((()))
 * (()())
 * (())()
 * ()(())
 * ()()()
 */

/**
 * Time complexity: O(2^n), as there are 2^n possible combinations of ‘(‘ and ‘)’ parentheses.
 * 
 * Auxiliary space: O(n), as n characters are stored in the str array.
 */
