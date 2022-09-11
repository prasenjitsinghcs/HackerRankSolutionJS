/**
 * REVERSE THE ARRAY
 * 
 * Write a Program to reverse an Array or String
 * 
 * Given an array (or string), the task is to reverse the array/string
 */

/**
 * Iterative Way:
 * 1) Initialize start and end indexes as start = 0 and end = n - 1
 * 2) In a loop, swap arr[start] with arr[end] and update the value 
 * of start and end as below
 * start = start + 1
 * end   = end   - 1
 */

function reverseArray(arr) {
    var start = 0;
    var end = arr.length - 1;

    while (start < end) {
        swap(arr, start, end)
        start = start + 1;
        end = end - 1;
    }
}

function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp
}

/**
 * The time complexity: O(n)
 */
console.log('Iterative Approch:')
var input = [1, 2, 3, 4, 5, 6];
console.log("Input Array: ", input);
reverseArray(input);
console.log("Reversed Array: ", input);

var input = [];
console.log("Input Array: ", input);
reverseArray(input);
console.log("Reversed Array: ", input);

/**
 * Recursive Way:
 * 1) Initialize start and end indexes as start = 0 and end = n - 1
 * 2) Swap arr[start] with arr[end]
 * 3) Recursivley call reverse for rest of the array
 */

function reverseArray_Rec(arr, start, end) {
    if (start >= end) {
        return;
    }

    swap(arr, start, end)

    start++;
    end--;

    // call recurseive function
    reverseArray_Rec(arr, start, end);
}

/**
 * Test for recursive function
 */
console.log("\n\nRecursive Approch:")

// Test case 1
var input = [8, 7, 6, 5, 4, 3]
console.log("Input Array: ", input)
reverseArray_Rec(input, 0, input.length - 1)
console.log("Reversed Array: ", input);

// Test case 2
var input = []
console.log("Input Array: ", input)
reverseArray_Rec(input, 0, input.length - 1)
console.log("Reversed Array: ", input);

/**
 * Time complexity for both the approch is O(n)
 */
