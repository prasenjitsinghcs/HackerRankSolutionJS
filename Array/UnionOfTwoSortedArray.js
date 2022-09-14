/**
 * Union and Intersection of two sorted arrays
 * 
 * Given two sorted arrays, find their union and intersection.
 * 
 *   1) Use two index variables i and j, initial values i = 0, j = 0 
 *   2) If arr1[i] is smaller than arr2[j] then print arr1[i] and increment i. 
 *   3) If arr1[i] is greater than arr2[j] then print arr2[j] and increment j. 
 *   4) If both are same then print any of them and increment both i and j. 
 *   5) Print remaining elements of the larger array.
 * 
 *   Time Complexity : O(m + n)
 *   Auxiliary Space: O(1)
 */

function unionOfTwoArrays(arr1, arr2) {
    var i = 0, j = 0, output = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            output.push(arr1[i++])
        } else if (arr2[j] < arr1[i]) {
            output.push(arr2[j++])
        } else {
            output.push(arr2[j++]);
            i++;
        }
    }

    while (i < arr1.length) {
        output.push(arr1[i++])
    }

    while (j < arr2.length) {
        output.push(arr2[j++])
    }

    return output;
}

var arr1 = [3, 4, 5, 6];
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('A : ', arr1);
console.log('B : ', arr2);
var output = unionOfTwoArrays(arr1, arr2)

console.log("Union: ", output);