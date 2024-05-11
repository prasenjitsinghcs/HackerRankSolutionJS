/**
 * Given an array and an integer K, find the maximum for each and every
 * contiguous subarray of size K.
 */

/**
Input: arr[] = {1, 2, 3, 1, 4, 5, 2, 3, 6}, K = 3 
Output: 3 3 4 5 5 5 6
Explanation: Maximum of 1, 2, 3 is 3
             Maximum of 2, 3, 1 is 3
             Maximum of 3, 1, 4 is 4
             Maximum of 1, 4, 5 is 5
             Maximum of 4, 5, 2 is 5 
             Maximum of 5, 2, 3 is 5
             Maximum of 2, 3, 6 is 6
 */

const arr = [1, 2, 3, 1, 4, 5, 2, 3, 6], k = 3; 
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3;             

/**
 * Approach 1: Brute Force Approach
 * 
 */

function printKMax(arr, k) {
    const ans = [];
    for (let i = 0; i < arr.length - k + 1; i++) {
        let max = Number.MIN_VALUE;
        for (let j = i; j < i + k; j++) {
            max = Math.max(max, arr[j]);
        }
        ans.push(max);
    }
    return ans;
}

console.log(`Brute Force Approach: `)
console.log(`Input: arr = [${arr}], k = ${k}`);
var ans = printKMax(arr, k);
console.log(`output: [${ans}]`);

/**
 * Time Complexity: O(N * K) the outer loop runs N - K + 1 times and 
 * inner loop runs K times for each iteration of outer loop.
 * Space Complexity: O(1)
 */ 

/**
 * Approach 2: Sliding Window Approach
 * 
 */

function printKMaxSlidingWindow(arr, k) {
    const ans = [];
    let i = 0, j = 0, list = [];
    
    while(j < arr.length) {
        while(list.length != 0 && list[0] < arr[j]) {
            list.shift();
        }

        list.push(arr[j]);

        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            ans.push(list[0]);

            if (list[0] === arr[i]) {
                list.shift();
            }

            i++;
            j++;

        }
    }
    
    return ans;
}

console.log(`\n\nSliding Window Approach: `)
console.log(`Input: arr = [${arr}], k = ${k}`);
var ans = printKMaxSlidingWindow(arr, k);
console.log(`output: [${ans}]`);

/**
 * Time Complexity: O(N)  
 * Space Complexity: O(K)
 */ 