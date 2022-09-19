/**
 * Search in a row wise and column wise sorted matrix
 * 
Given an n x n matrix and an integer x, find the position of x in the matrix if it is present. Otherwise, print “Element not found”. 

Every row and column of the matrix is sorted in increasing order. The designed algorithm should have linear time complexity. 

Example: 

Input: mat[4][4] = {{10, 20, 30, 40},
                    {15, 25, 35, 45},
                    {27, 29, 37, 48},
                    {32, 33, 39, 50}}
x = 29
Output: Found at (2, 1)
Explanation: Element at (2,1) is 29

*/

function search(arr, target) {
    var right = arr[0].length;
    var bottom = arr.length;
    var count = 0;
    for (var i = 0; i < bottom; i++) {
        for (var j = 0; j < right; j++) {
            count++;
            if (arr[i][j] > target) {
                right = j;
            } else if (arr[i][j] < target) {
                continue;
            } else {
                return true;
            }
        }
    }
    return "Element not found";
}

var arr = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 39, 50]
]
var target = 39;

console.log(search(arr, target))

function search2(arr, target) {
    var smalest = arr[0][0];
    var largest = arr[arr.length - 1][arr[0].length - 1];

    if (target < smalest || target > largest) {
        return false;
    }

    var i = 0, j = arr[0].length - 1;

    while (i < arr.length && j >= 0) {
        if (arr[i][j] === target) {
            return true;
        } else if (arr[i][j] > target) {
            j--;
        } else {
            i++;
        }
    }

    return false;
}

var target = 29;
console.log(search2(arr, target));

