/**
 * Given a positive integer n. Your task is to generate a string list of all 
 * n-bit binary numbers where, for any prefix of the number, there are more or 
 * an equal number of 1's than 0's. The numbers should be sorted in decreasing 
 * order of magnitude.
 */

/**
 * Input:  
 * n = 2
 * Output: 
 * {"11", "10"}
 * Explanation: Valid numbers are those where each prefix has more 1s than 0s:
 * 11: all its prefixes (1 and 11) have more 1s than 0s.
 * 10: all its prefixes (1 and 10) have more 1s than 0s.
 * So, the output is "11, 10".
 * 
 * Input:  
 * n = 3
 * Output: 
 * {"111", "110", "101"}
 * Explanation: Valid numbers are those where each prefix has more 1s than 0s.
 * 111: all its prefixes (1, 11, and 111) have more 1s than 0s.
 * 110: all its prefixes (1, 11, and 110) have more 1s than 0s.
 * 101: all its prefixes (1, 10, and 101) have more 1s than 0s.
 * So, the output is "111, 110, 101".
 */

function solve(n, ones, zeros, output) {
    if(n === 0) {
        console.log(output);
        return;
    }

    solve(n - 1, ones + 1, zeros, output + "1");

    if (ones > zeros) {
        solve(n - 1, ones, zeros + 1, output + "0");
    }
}

function main(n) {
    console.log(`\nInput: n = ${n}`);
    console.log(`Output: `);
    solve(n, 0, 0, "");
}

main(2);
main(3);

/**
 * Input: n = 2
 * Output: 
 * 11
 * 10
 * 
 * Input: n = 3
 * Output: 
 * 111
 * 110
 * 101
 */

/**
 * Time Complexity: O(n)
 * Auxiliary Space: O(n)
 */