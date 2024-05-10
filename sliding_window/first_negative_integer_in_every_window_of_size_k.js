/**
 * Given an array and a positive integer k, find the first negative integer
 * for each window(contiguous subarray) of size k. If a window does not 
 * contain a negative integer, then print 0 for that window.
 */

// let arr = [-8, 1, 2, -6, 3];
// let   k = 3;
// Output : -8 -6 -6

let arr = [-8, 1, 2, -6, 3];
let   k = 3;

/**
 * Approach 1: Brute force approach
 * 
 */

function displayFirstNegative(arr, k) {
    for (let i = 0; i < arr.length - k + 1; i++) {
        let hasNegative = false;
        for (let j = i; j < i + k; j++) {
            if (arr[j] < 0) {
                console.log(arr[j]);
                hasNegative = true;
                break;
            }
        }

        if (hasNegative === false) {
            console.log(0);
        }    
    }
}
console.log('Brute Force Approach:')
console.log(`Input Arr = [${arr}], K = ${k}`);
console.log('Output: ')
displayFirstNegative(arr, k);

/**
 * Input Arr = [-8,1,2,-6,3], K = 3
 * Output: -8 -6 -6
 */

/**
 * Time Complexity: O(N * K) when K is much smaller, if K tends to reach N then
 * complexity becomes O(K)
 */

/**
 * Approach 2: sliding window
 * 
 */

function getFirstNegative(arr, k) {
    let i = 0, j = 0, list = [];

    while(j < k) {
        if (arr[j] < 0) {
            list.push(arr[j]);
        }
        j++;
    }

    if (list.length > 0) {
        console.log(list[0]);
    } else {
        console.log(0);
    }

    while(j < arr.length) {
        if (arr[j] < 0) {
            list.push(arr[j]);
        }

        if (arr[i] === list[0]) {
            list.shift();
        }

        if (list.length > 0) {
            console.log(list[0]);
        } else {
            console.log(0);
        }

        i++;
        j++;
    }
    
}

console.log('\n\nSliding Window Approach:')
console.log(`Input Arr = [${arr}], K = ${k}`);
console.log('Output: ')
getFirstNegative(arr, k)

/**
 * Input Arr = [-8,1,2,-6,3], K = 3
 * Output: -8 -6 -6
 */

/**
 * Time Complexity: O(N) 
 * Space Complexity: O(K)  (as we are using the list to store all the negative 
 * numbers of window size K)
 */



