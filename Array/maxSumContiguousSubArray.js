/**
 * Write an efficient program to find the sum of the contiguous subarray within a one-dimensional array of numbers that has the largest sum. 
 */

/**
 * Approach: Brute force 
 * In this approach we will get all the sub array and their sum
 * And get the max sum of the sub arrays 
 * 
 *  Time Complexity: O(n^3), as we are using three loops.
 *  Auxiliary Space: O(1), as we are using constant space.
 */

function maxSubArraySum1(arr) {
    var max = Number.MIN_VALUE;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            var sum = 0;
            for (var k = i; k <= j; k++) {
                sum = sum + arr[k];
            }
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}

var arr = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log("Input Array: ", arr);
var output = maxSubArraySum1(arr);
console.log("Largest Sum: ", output);


/**
 * Approach: Brute force optimization 
 * In this approach we will get all the sub array and their sum
 * Here we will run third loop to calculate the sub array sum. 
 * Instead we will use the previously calculated sum.
 * 
 *  Time Complexity: O(n^2), as we are using three loops.
 *  Auxiliary Space: O(1), as we are using constant space.
 */

function maxSubArraySum2(arr) {
    var max = Number.MIN_VALUE;
    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        for (var j = i; j < arr.length; j++) {
            sum = sum + arr[j];

            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}

var arr = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log("Input Array: ", arr);
var output = maxSubArraySum2(arr);
console.log("Largest Sum: ", output);

/**
 * Kadane's Algorithm
 * Explanation: The simple idea of Kadane’s algorithm is to look for 
 * all positive contiguous segments of the array (max_ending_here is used for this). 
 * And keep track of the maximum sum contiguous segment among all 
 * positive segments (max_so_far is used for this). Each time we get a positive-sum 
 * compare it with max_so_far and update max_so_far if it is greater than max_so_far 
 * 
 *  Time Complexity: O(n)
 *  Auxiliary Space: O(1)
 */

function maxSubArraySum3(arr) {
    var maxSoFar = arr[0];
    var maxEndingHere = arr[0];

    for (var i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}

var arr = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log("Input Array: ", arr);
var output = maxSubArraySum3(arr);
console.log("Largest Sum: ", output);