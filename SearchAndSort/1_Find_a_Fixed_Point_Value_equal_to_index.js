/**
 * Given an sorted array of n distinct integers, write a function that returns a Fixed Point in the array, if there is any Fixed Point present in array, else returns -1. Fixed Point in an array is an index i such that arr[i] is equal to i. Note that integers in array can be negative.
 */

/**
 * Examples:
 * Input: arr[] = {-9, -6, 0, 3, 8}
 * Output: 3 // arr[3] == 3
 * 
 * Input: arr[] = {0, 3, 6, 9, 12}
 * Output: 0 // arr[0] = 0
 * 
 * Input: arr[] = {-11, -8, 5, 6, 7, 8}
 * Output: -1 // No Fixed Point
 */

/**
 * Method 1: Linear Search
 * Execute for loop i = 0 to n, where n is the length of the sorted array.
 * Check if arr[i] == i then return i, else return -1
 */

/**
 * linearSearch
 * @param {Number} array 
 * @returns Number
 */
function linearSearch(array) {
    var n = array.length;
    for (var i = 0; i < n; i++) {
        if (array[i] === i) {
            return i;
        }
    }
    return -1;
}

var arrays = [
    [-9, -6, 0, 3, 8],
    [0, 3, 6, 9, 12],
    [-11, -8, 5, 6, 7]
]

console.log('----- Using Linear Search -----')
arrays.forEach(array => {
    console.log(`Input: array = [${array}]`);
    var output = linearSearch(array);
    console.log(`Output: ${output}`);
})

/**
 * Time Complexity: O(n) 
 * Auxiliary Space: O(1) 
 */

/**
 * Method 2: Using Binary Search
 * 1) if low <= high
 * 2) Fist check if the middle element is Fixed Point or not, if it is then return mid 
 * 3) Else check index of mid + 1 is less than or equal to the element at the high index then Fixed Point lie on the right side of middle point.
 * 4) Similarly, check if the index of mid - 1 is greater than or equal to the element at low index, then Fixed Point will lie on left side of the middle point.
 * 5. Else return -1
 */

/**
 * binarySearch
 * @param {*} array 
 * @param {*} low 
 * @param {*} high 
 * @returns Number 
 */
function binarySearch(array, low, high) {
    if (high >= low) {
        var mid = Math.floor(low + (high - low) / 2);
        if (array[mid] == mid) {
            return mid;
        }
        let res = -1;

        if (mid + 1 <= array[high])
            res = binarySearch(array, (mid + 1), high);
        if (res != -1)
            return res;
        if (mid - 1 >= array[low])
            return binarySearch(array, low, (mid - 1));

        if (res != -1) {
            return res;
        }
    }

    return -1
}

var arrays = [
    [-9, -6, 0, 3, 8],
    [0, 3, 6, 9, 12],
    [-11, -8, 5, 6, 7]
]

console.log('----- Using Binary Search -----')
arrays.forEach(array => {
    console.log(`Input: array = [${array}]`);
    var output = binarySearch(array, 0, array.length - 1);
    console.log(`Output: ${output}`);
})

/**
 * Algorithmic Paradigm: Divide & Conquer 
 * Time Complexity: O(log n)
 * Auxiliary Space: O(log n) (As implicit stack is used for recursive calls)
 */

 

