/**
 *   Given an array of integers arr of size N and a number K. Return the maximum sum of a subarray of size K.
 *
 *   NOTE*: A subarray is a contiguous part of any given array.
 */
let arr = [9,0,8,7,0,4,5,7];
let k   = 3;

/**
 * Approach 1:
 * Brute Force Approach
 * Get all the sub array and its sum by executing two loops
 */

function getMaxSum(arr, k) {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < arr.length - k; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += arr[j];
        }
        max = Math.max(max, sum);
    }
    return max;
}

var output = getMaxSum(arr, k);
console.log(`arr = [${arr}], k = ${k}`);
console.log(`Max Sum = ${output}`);


// arr = [9,0,8,7,0,4,5,7], k = 3
// Max Sum = 17

// Time Complexity: O(N^2)
// Auxiliary Space: O(1)

/**
 * Approach 2: Sliding Window
 */

function getMaxSumSubArr(arr, k) {
    let i = 0, j = 0, sum = 0, max = Number.MIN_VALUE;

    while(j < arr.length) {
        sum = sum + arr[j];

        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            max = Math.max(sum, max);

            sum = sum - arr[i];
            i++;
            j++;

        }
    }
    
    return max;
}

var output = getMaxSumSubArr(arr, k);
console.log(`arr = [${arr}], k = ${k}`);
console.log(`Max Sum = ${output}`);

// arr = [9,0,8,7,0,4,5,7], k = 3
// Max Sum = 17

// Time Complexity: O(N) as we are iterating array only once
// Auxiliary Space: O(1)



 