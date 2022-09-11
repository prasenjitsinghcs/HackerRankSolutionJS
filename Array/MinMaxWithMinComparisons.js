/**
 * Mininmum and maximum of an array using minumum numnber of comparisons
 * 
 * The given an array of size N. The task is to find the minumum and 
 * the maximum of the array using minumum number of comparisons.
 */

/**
 * Using Linear Seach
 */

function getMinMax(arr) {
    var minmax = {};

    if (arr.length === 1) {
        minmax.min = arr[0];
        minmax.max = arr[0];
        return minmax;
    } 

    if (arr[0] > arr[1]) {
        minmax.max = arr[0];
        minmax.min = arr[1];
    } else {
        minmax.max = arr[1];
        minmax.min = arr[0];
    }

    var index = 2;
    while(index < arr.length) {
        if (arr[index] < minmax.min) {
            minmax.min = arr[index];
        } else if (arr[index] > minmax.max) {
            minmax.max = arr[index];
        }
        index++;
    }
    return minmax;
}


// Case 1
var input = [6,3,0,1,0,4,4,7,8,0];

console.log("Input Array: ", input);
var minmax = getMinMax(input);
console.log("MinMax:  ", minmax);

var input = [6];

console.log("Input Array: ", input);
var minmax = getMinMax(input);
console.log("MinMax:  ", minmax);

var input = [];

console.log("Input Array: ", input);
var minmax = getMinMax(input);
console.log("MinMax:  ", minmax);

/**
 * Time complaxity: O(n)
 * Space: O(1) - as no extra space was needed
 *
 */

/**
 * @todo: for other approch
 */