/**
 * Count the number of perfect squres which are less then a give number N.
 */

/**
 * Example 1: N = 9
 * Output: 2
 * Explanation: In the range of 1 to 9, we have 1 and 4 as perfect squres which are less than 9
 * hence the count of squres is 2.
 *  
 */

function countSqures(N) {
    var num = 1;
    var count = 0;
    while(num * num < N) {
        count = count + 1;
        num++;
    }
    return count;
}

function countSqures2(N) {
    var rootN = Math.floor(Math.sqrt(N)) - 1;
    
    return rootN;
}

console.log(countSqures2(9));

// 1, 2, 3, 4, 5, 6 ... N
// 1, 4, 9, 16



