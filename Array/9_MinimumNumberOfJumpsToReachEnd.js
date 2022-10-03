/**
 * 
 * Problem Statement:
 * Given an array of integers where each element represents the max number of steps that can be made forward from that element. Write a function to return the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then we cannot move through that element. If we can’t reach the end, return -1.
 * 
 * Examples: 
 * 
 * Example 1:
 * 
 * Input:  arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
 * Output: 3 (1-> 3 -> 8 -> 9)
 * Explanation: Jump from 1st element to 
 * 2nd element as there is only 1 step, 
 * now there are three options 5, 8 or 9. 
 * If 8 or 9 is chosen then the end node 9 
 * can be reached. So 3 jumps are made.
 * 
 * Example 2:
 * 
 * Input  :  arr[] = {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1}
 * Output : 10
 * Explanation: In every step a jump is needed so the count of jumps is 10.
 */

/**
 * Method 1: Greeday Approach
 * 
 * Variable to be used:
 * 1. maxReach - stores at all the time the maximum reachable index in the array.
 * 2. step - stores the number of steps we can still take in the current jump ‘jump’ (and is initialized with value at index 0, i.e. initial number of steps) 
 * 3. jump - stores the amount of jumps necessary to reach the maximal reachable position. It also indicates the current jump we are making in the array.
 */

function minimumJumps(arr, n) {
    // The number of jumps needed to

    // reach the starting index is 0
    if (n <= 1)
        return 0;

    // Return -1 if not possible to jump
    if (arr[0] == 0)
        return -1;

    // initialization

    // stores all time the maximal
    // reachable index in the array.
    let maxReach = arr[0]

    // stores the number of steps
    // we can still take
    let step = arr[0]

    // stores the number of jumps
    // necessary to reach that maximal
    // reachable position.
    let jump = 1

    // Start traversing array
    let i = 1;

    for (i = 1; i < n; i++) {
        // Check if we have reached the end of the array
        if (i == n - 1)
            return jump;

        // updating maxReach
        maxReach = Math.max(maxReach, i + arr[i])

        // we use a step to get to the current index
        step--

        // If no further steps left
        if (step == 0) {

            // we must have used a jump
            jump++

            // Check if the current index/position or lesser index
            // is the maximum reach point from the previous indexes
            if (i >= maxReach)
                return -1

            // re-initialize the steps to the amount
            // of steps to reach maxReach from position i.

            step = maxReach - i
        }
    }

    return -1;
}

var arr = [6, 3, 0, 1, 0, 4, 4, 7, 8, 0];
console.log(`arr = [${arr.toString()}]`)
console.log("Minimum number of jumps to reach end is ", minimumJumps(arr, arr.length))

/**
 * Time complexity: O(N) - We are using only one loop
 * Auxiliary Space: O(1) - No extra space is required
 */

/**
 * 
 * Method 2: Naive Recursive Approach
 * 
 * Initially, we declare the minJumps function, which will try all possible solutions to reach the end of the given array. The function will have two parameters: The given array arr, and index representing the current position in the array.
 * The base condition of recursive function here is when we reach at the end of the array arr, then return 0, this is the minimum number of jumps to reach the end of the array arr starting from the end of the array arr.
 * Now declare the variable jumps that will represent the minimum number of jumps to reach the end of the array starting from the current position. Initially the value equals to MAX_VALUE.
 * Then we will get the minimul jumps among all the possible moves we can make. We’ll get the optimal answer for each possible next position starting from that position plus one, which represents the current jump.
 * Finally, the minJumps(arr, 0) will return the minimum number of jumps to reach the end of the given array arr starting from the first element.
 */

function minJumps(arr, index) {
    var n = arr.length;
    if (index >= n) {
        return 0;
    }

    // Return -1 if not possible to jump
    if (arr[0] == 0)
        return -1;

    var jumps = Number.MAX_VALUE;

    for (var move = 1; move <= arr[index]; move++) {
        if (index + move <= n) {
            jumps = Math.min(jumps, 1 + minJumps(arr, index + move))
        }
    }

    return jumps;
}

var arr = [6, 3, 3, 1, 2, 4, 4, 7, 8, 0]
console.log(`arr = [${arr.toString()}]`)
console.log("Minimum number of jumps to reach end is ", minJumps(arr, 0))

/**
 * Time complexity: O(N ^ 2) - We are checking for each occurence
 * Auxiliary Space: O(1) - No extra space is required
 */


/**
 * @todo - DP solution
 */