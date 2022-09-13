/**
 * Move all negative numbers to beginning and positive to end with constant extra space
 * 
 * An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.
 * 
 * Note: Order of elements is not important here.
 */

/**
 * Two Pointer Approach: The idea is to solve this problem with constant space and linear time is by using a two-pointer or two-variable approach where we simply take two variables like left and right which hold the 0 and N-1 indexes. Just need to check that :

    1. Check If the left and right pointer elements are negative then simply increment the left pointer.
    2. Otherwise, if the left element is positive and the right element is negative then simply swap the elements, and simultaneously increment and decrement the left and right pointers.
    3. Else if the left element is positive and the right element is also positive then simply decrement the right pointer.
    4. Repeat the above 3 steps until the left pointer ≤ right pointer.

    This is an in-place rearranging algorithm for arranging the positive and negative numbers where the order of elements is not maintained.
    Time Complexity: O(N)
    Auxiliary Space: O(1)

    Below is the implementation of the above approach:
 */

function movePositiveAndNegative(arr) {
    var left = 0;
    var right = arr.length;

    while (left < right) {
        if (arr[left] < 0 && arr[right] < 0) { // - -
            left++;
        } else if (arr[left] > 0 && arr[right] < 0) { // + -
            var temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        } else if (arr[left] > 0 && arr[right] > 0) { // + +
            right--;
        } else { // - +
            left++;
            right--;
        }
    }
    return arr;
}

console.log('----------- Two Pointer Approach -----------')
var input = [-1, 3, 4, 7, -6, 3, -2, 1, -7]
console.log("Input Array: ", input);
var output = movePositiveAndNegative(input);
console.log("Output Array: ", output);

/**
 * Approach: Partiotion process of quick sort
 * 
 * Time complexity: O(N) 
 * Auxiliary Space: O(1)
 */
function movePositiveAndNegativePartitionApproch(arr) {
    var j = 0;
    var i = 0;
    while (i < arr.length) {
        if (arr[i] < 0) {
            if (i != j) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
            j++;
        }
        i++;
    }
    return arr;
}

console.log('----------- Quick Sort Partition Approach -----------')
var input = [-1, 3, 4, 7, -6, 3, -2, 1, -7]
console.log("Input Array: ", input);
var output = movePositiveAndNegativePartitionApproch(input);
console.log("Output Array: ", output);
