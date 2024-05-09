
/**
 * Median in a Row-wise Sorted Matrix-Interview Problem
 * 
 * Given a N*M matrix which is sorted row-wise, you task is to find the median 
 * of the given matrix.
 * 
 * Median: The median of a group of ordered number is the middle number that 
 * will separate the highest half with lowest half of numbers. If there are 
 * two middle numbers the, the median is the mean of the numbers.
 */

/**
 * For example:
 * Input:  2  3  3
 *         1  5  6 
 *         6  6  7
 * 
 * Output: 5
 * 
 * Explanation: The total number of elements is 9(odd), in this case the formula 
 * for finding the median is (1+N*M)/2 th smallest element out of the given elements. 
 * Here it is 5 which is the 5th smallest element as 1 2 3 and 3 are smaller than it.
 */

/**
 * Brute Force Solution:
 * Here it is given that total number of elements is always odd. Since the number of 
 * elements are odd there is no case of having more than one midde elements. We can 
 * think of very simple approach where we will sort the all the elements of the matrix 
 * in a linear array and after sorting we will output the (N*M + 1)/2 th element of 
 * the linear array.
 * 
 * Steps:
 * 1. First create an array of size MxN and copy all the elments of that matrix in 
 * that array. You can copy either row-wise of coloum-wise.
 * 2. After copying sort the array
 * 3. Output the element at [(NxM + 1) / 2 - ] th index as this will be the middle 
 * element partitioning the array in lower and upper halves.
 * 
 * Time Complexity: O(N*M*log(N*M)
 * Space Complexity: O(N*M)
 *
 */

function medianRowwiseSortedMatrix(matrix) {
    var array = [];
    var rows = matrix.length;
    var cols = matrix[0].length;
    var median_index = parseInt(((rows * cols) + 1) / 2);

    // Copy matirx elements to an linear array
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            array.push(matrix[i][j]);
        }
    }

    // Sort the array
    var array = array.sort((a, b) => a - b);
    console.log("Sorted Array: ", array);

    return array[median_index - 1];
}

var matrix = [
    [2, 3, 3],
    [1, 5, 6],
    [6, 6, 7]
]

console.log("Matrix: ", matrix);
var median = medianRowwiseSortedMatrix(matrix);
console.log("Median: ", median);