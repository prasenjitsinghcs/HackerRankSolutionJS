/**
 * Program to cyclically rotate an array by one
 * 
 * Statement: Given an array, cyclically rotate the array clockwise by one. 
 */

/**
 * Approach 1:
 * 1. Store last element in an variable called x.
 * 2. Shift all elements one position ahead.
 * 3. Replace first element of array with x.
 * 
 *  Time Complexity: O(n), as we need to iterate through all the elements. Where n is the number of elements in the array.
 *  Auxiliary Space: O(1), as we are using constant space.
 */

function rotateClockwiseByOne(arr) {
    var last = arr[arr.length - 1];
    // shift each element by one position ahead
    var n = arr.length - 1;

    while (n > 0) {
        arr[n] = arr[n - 1]
        n--;
    }
    arr[0] = last;
    return arr;
}

/**
 * Test
 */
var arr = [1, 2, 9, 8, 4, 5, 6];

console.log("Input Array: ", arr);

var output = rotateClockwiseByOne(arr);

console.log("Output: ", output);

/**
 * Approach 2: Two Pointer approach
 * 1. Use two pointers, say i and j which point to first and last element of array respectively.
 * 2. Bring last element to first and shift rest in forward direction, so start swaping arr[i] and arr[j] and keep j fixed and i moving towards j. 
 * 3. Repeat till i is not equal to j.
 * 
 *  Time Complexity: O(n), as we need to iterate through all the elements. Where n is the number of elements in the array.
 *  Auxiliary Space: O(1), as we are using constant space.
 */

function rotate2(arr) {
    var i = 0, j = arr.length - 1;
    while (i != j) {
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        i++;
    }
    return arr;
}

console.log('Using Two Pointer')
var arr = [2, 4, 6, 8, 3, 6]
console.log('Input Array: ', arr);
var output = rotate2(arr);
console.log("Output Array: ", output);

/**
 * Approach 3: Slice and Reverse (rotate array by k places)
 * 1. reverse the whole array
 * 2. reverse array from index 0 to index k - 1
 * 3. reverse array from index k to index n - 1
 * 
 *  Time Complexity: O(n), as we need to iterate through all the elements. Where n is the number of elements in the array.
 *  Auxiliary Space: O(1), as we are using constant space.
 */

function reverse(arr, start, end) {
    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function roateByKplace(arr, k) {
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
    return arr;
}

console.log('Using Slice and reverse:')
var arr = [5, 2, 4, 6, 7, 9, 8]
console.log('Input Array: ', arr);
var output = roateByKplace(arr, 1);
console.log("Output Array: ", output);


