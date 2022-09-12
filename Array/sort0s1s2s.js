/**
  Given an array A[] consisting of only 0s, 1s, and 2s. 
  The task is to write a function that sorts the given array. 
  The functions should put all 0s first, then all 1s and all 2s in last.

  This problem is also the same as the famous “Dutch National Flag problem”. 
  The problem was proposed by Edsger Dijkstra. The problem is as follows:
 */

/**
 * Sort an array of 0s, 1s, and 2s using the Pointer Approach: 
 *  1. If the ith element is 0 then swap the element to the low range.
 *  2. Similarly, if the element is 1 then keep it as it is.
 *  3. If the element is 2 then swap it with an element in high range.
 * 
 * Time Complexity: O(n), Only one traversal of the array is needed. 
 * Space Complexity: O(1), No extra space is required.
 */

function sort0s1s2sUsingPointer(arr) {
    var low = 0, mid = 0;
    var high = arr.length - 1;
    while (mid <= high) {
        if (arr[mid] === 0) {
            swap(arr, low, mid);
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            swap(arr, mid, high);
            high--;
        }
    }
    return arr;
}

function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

/**
 * Test Case
 */

console.log('--------- Using Pointer Approch ----------')

var arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
console.log("Input Array: ", arr);
var output = sort0s1s2sUsingPointer(arr);
console.log("Output Array: ", output)

var arr = []
console.log("Input Array: ", arr);
var output = sort0s1s2sUsingPointer(arr);
console.log("Output Array: ", output)

/**
 *  Sort an array of 0s, 1s, and 2s using Counting Approach:
 * 
 * Follow the steps below to solve the given problem:  
    1. Keep three counters c0 to count 0s, c1 to count 1s, and c2 to count 2s
    2. Traverse through the array and increase the count of c0 if the element is 0, 
        increase the count of c1 if the element is 1 and increase the count of c2 if the element is 2
    3. Now again traverse the array and replace the first c0 elements with 0, the next c1 elements with 1, and the next c2 elements with 2.
 
    Time Complexity: O(n), Only nonnested traversals of the array are needed.

    Space Complexity: O(1)
    
*/

function sort0s1s2sUsingCounting(arr) {
    var count0 = 0, count1 = 0, count2 = 0;
    var index = 0;
    while (index < arr.length) {
        if (arr[index] == 0) {
            count0++;
        } else if (arr[index] == 1) {
            count1++;
        } else {
            count2++;
        }
        index++;
    }

    var index = 0;
    while (index < count0) {
        arr[index] = 0;
        index++;
    }

    while (index < count0 + count1) {
        arr[index] = 1;
        index++;
    }

    while (index < count0 + count1 + count2) {
        arr[index] = 2
        index++;
    }

    return arr;
}

/**
 * Test Case
 */
console.log('------------- Using Counting Approch -------------')
var input = [2,0,1,0,1,2,0,2,1,0,2,1]
console.log("Input Array: ", input)
var output = sort0s1s2sUsingCounting(input);
console.log("Output Array: ", output)


