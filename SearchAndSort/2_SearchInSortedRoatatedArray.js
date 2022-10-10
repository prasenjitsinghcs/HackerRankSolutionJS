/**
 * Given a sorted rotated array, search the target element in the give rotated sorted array.
 * 
 * Example: 
 * arr = [5, 6, 7, 8, 9, 0, 1, 2, 3, 4]
 * target = 1
 * output = 6 (element 1 is on index 6)
 */

/**
 * Method 1: Linear search
 * In this approch we can simply lookup for each element and compare with the target element.
 * Run a loop from index 0 to n -1 where n is the length of the given array
 * if arr[i] === target then return index i else return -1
 */

/**
 * searchElement(arr, target)
 * @param {*} arr 
 * @param {Number} target 
 * @returns 
 */
function searchElement(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1
}

var arr = [3, 4, 5, 6, 7, 8, 9, 0, 1, 2]
var low = 0;
var high = arr.length - 1;

console.log('Find Target element using Linear Search')
console.log("arr = ", arr)
console.log("target = 5,\tOutput = ", searchElement(arr, 5))
console.log("target = 1,\tOutput = ", searchElement(arr, 1))
console.log("target = 7,\tOutput = ", searchElement(arr, 7))
console.log("target = 3,\tOutput = ", searchElement(arr, 3))
console.log("target = 10,\tOutput = ", searchElement(arr, 10))

/**
 * Time Complexity: O(n) 
 * Auxiliary Space: O(1) 
 */

/**
 * Method 2: Binary Search
 * In this approach we need to find the mid index of the given sorted array.
 * If low <= high
 * Then identify the completely sorted portion, if element at index low is less then element at index mid (arr[low] < arr[mid])
 * then we can say the first half from index low to mid - 1 will be sorted else right half from mid + 1 to end will be sorted.
 * If first half is sorted then check if target element is in between arr[low] and arr[mid - 1], if yes then call the searchInRotatedSortedArray(arr, target, low, mid - 1); 
 * else call the searchInRotatedSortedArray(arr, target, mid + 1, high);
 * If second half is sorted then check if the target element is in between index mid + 1 to end, if yes then call searchInRotatedSortedArray(arr, target, mid + 1, high); 
 * else call the searchInRotatedSortedArray(arr, target, low, mid - 1);
 * 
 */


/**
 * searchInRotatedSortedArray
 * @param {*} arr 
 * @param {Number} target 
 * @param {Number} low 
 * @param {Number} high 
 * @returns 
 */
function searchInRotatedSortedArray(arr, target, low, high) {
    if (low <= high) {
        var mid = low + Math.floor((high - low) / 2);
        
        if (arr[mid] === target) {
            return mid;
        }

        if (arr[low] < arr[mid]) {
            if (target >= arr[low] && target <= arr[mid - 1]) {
                return searchInRotatedSortedArray(arr, target, low, mid - 1);
            } else {
                return searchInRotatedSortedArray(arr, target, mid + 1, high);
            }
        } else {
            if (target >= arr[mid + 1] && target <= arr[high]) {
                return searchInRotatedSortedArray(arr, target, mid + 1, high);
            } else {
                return searchInRotatedSortedArray(arr, target, low, mid - 1);
            }
        }
    }
    return -1
}

var arr = [3, 4, 5, 6, 7, 8, 9, 0, 1, 2]
var low = 0;
var high = arr.length - 1;

console.log('Find Target element using Binary Search')
console.log("arr = ", arr)
console.log("target = 5,\tOutput = ", searchInRotatedSortedArray(arr, 5, low, high))
console.log("target = 1,\tOutput = ", searchInRotatedSortedArray(arr, 1, low, high))
console.log("target = 7,\tOutput = ", searchInRotatedSortedArray(arr, 7, low, high))
console.log("target = 3,\tOutput = ", searchInRotatedSortedArray(arr, 3, low, high))
console.log("target = 10,\tOutput = ", searchInRotatedSortedArray(arr, 10, low, high))

/**
 * Time Complexity: O(log(n)) 
 * Auxiliary Space: O(1) 
 */