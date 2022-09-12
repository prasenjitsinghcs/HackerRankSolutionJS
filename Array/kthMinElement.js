/**
 * Given an array and a number K where K is smaller than the size of the array. 
 * Find the K’th smallest element in the given array. 
 * Given that all array elements are distinct.
 */

/**

USING SORTING

Follow the given steps to solve the problem:
    1. Sort the input array in the increasing order
    2. Return the element at the K-1 index (0 – Based indexing) in the sorted array

Time Complexity: O(N log N)
Auxiliary Space: O(1) 

*/

function getKthMinElement(arr, K) {
    for (var i = 0; i < K; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr[K - 1]
}

var arr = [4, 5, 1, 2, 3, 9, 8, 7], K = 2;
console.log("Input Array: ", arr)
console.log("K = ", K)
var kthMin = getKthMinElement(arr, 2)
console.log("Output: ", kthMin);


var arr = [3, 4, 5, 1], K = 2;
console.log("Input Array: ", arr)
console.log("K = ", K)
var kthMin = getKthMinElement(arr, 2)
console.log("Output: ", kthMin);

/**
USING SET

Set data structure can be used to find the kth smallest element as it stores 
the distinct elements in sorted order. Set can be used because it is mentioned 
in the question that all the elements in the array are distinct.

Follow the given steps to solve the problem: 
    1. Insert all array elements into the set
    2. Advance the iterator to the Kth element in the set
    3. Return the value of the element at which the iterator is pointing
 */

function getKthMinUsingSet(arr, K) {
    var setarr = new Set();
    for (var i = 0; i < arr.length; i++) {
        setarr.add(arr[i]);
    }
    console.log(setarr)
    return [...setarr]
}

var arr = [9, 4, 5, 7, 3, 6], K = 3;
console.log("Input Array: ", arr)
console.log("K = ", K)
var kthMin = getKthMinUsingSet(arr, 2)
console.log("Output: ", kthMin);

