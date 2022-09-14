/**
 * Intersection of two sorted arrays
 * 
 * Given two sorted arrays, find their intersection.
 * 
 *   1) Use two index variables i and j, initial values i = 0, j = 0 
 *   2) If arr1[i] is smaller than arr2[j] then increment i. 
 *   3) If arr1[i] is greater than arr2[j] then increment j. 
 *   4) If both are same then print any of them and increment both i and j. 
 *   
 * 
 *   Time Complexity : O(m + n)
 *   Auxiliary Space: O(1)
 */

function intersectionOfTwoArrays(arr1, arr2) {
    var i = 0, j = 0, output = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr1[i]) {
            j++;
        } else {
            output.push(arr2[j++]);
            i++;
        }
    }

    return output;
}

var arr1 = [3, 4, 5, 6, 10];
var arr2 = [1, 2, 3, 4, 6, 7, 8, 9, 10];
console.log('A : ', arr1);
console.log('B : ', arr2);
var output = intersectionOfTwoArrays(arr1, arr2)

console.log("Union: ", output);