/**
 * Given a sorted array arr[] with possibly duplicate elements, the task is to find indexes of the first and last occurrences of an element x in the given array.
 */

/**
 * Example:
 *  Input: arr[] = {1,2,3,3,3,3,7,8,9}, element = 3
 *  Output: First Occurrence = 2
 *          Last Occurrence = 5
 *
 *  Input: arr[] = {1,2,3,3,3,3,7,8,9}, element = 7   
 *  Output: First Occurrence = 6
 *          Last Occurrence = 6       
 */

/**
 * Iterative Approach:
 * In this approach we will go through the each element of the array and keep track for first and last occurrence of the element.
 * 1. First initialize firstIndex = -1 and lastIndex = -1
 * 2. Execute a for loop i = 0 to n - 1, where n is the length of the given sorted array.
 * 3. Check if arr[i] != element then continue from here else execute below steps
 * 4. When find the arr[i] equals to element then update the firstIndex = i and always update the lastIndex = i
 * 5. Print the fist and last occurrences of element
 */

/**
 * Function will Print the first and last occurance of an element in a sorted array
 * @param {Number} arr - sorted array
 * @param {Number} element 
 */
function findFirstAndLastIndex(arr, element) {
    var n = arr.length;
    firstIndex = -1
    lastIndex = -1

    for (var i = 0; i < n; i++) {
        if (element != arr[i]) continue;

        if (firstIndex == -1) {
            firstIndex = i;
        }
        lastIndex = i;
    }

    console.log(`arr = [ ${arr} ]`);
    console.log("Element: " + element);
    console.log("First Occurrence = ", firstIndex);
    console.log("Last Occurrence = ", lastIndex);
}

var arr = [1, 2, 3, 5, 5, 5, 6];
var element = 5;
findFirstAndLastIndex(arr, element)

/**
 * Time Complexity: O(n)
 * Auxiliary Space: O(1)
 */

/**
 * Binary Search Approach (An efficient approach)
 */

/*
 * 1. For the first occurrence of a number:
 *    a) if (low <= high) then do below steps else return -1
 *    b) Get mid index mid = low + (high - low) / 2
 *    c) if ((mid == 0 || arr[mid - 1] < element)) && arr[mid] == element) then return mid
 *    d) else if element > arr[mid]
 *          return first(arr, mid + 1, high, element)
 *    e) else
 *          return first(arr, low, mid - 1, element)
 */

function first(arr, low, high, element) {
    if (low <= high) {
        var mid = low + (high - low) / 2
        if ((mid == 0 || arr[mid - 1] < element) && arr[mid] == element) {
            return mid;
        } else if (element > arr[mid]) {
            return first(arr, mid + 1, high, element);
        } else {
            return first(arr, low, mid - 1, element);
        }
    }
    return -1
}

/*
 * 2. For the last occurrence of a number:
 *    a) if (low <= high) then do below steps else return -1
 *    b) Get mid index mid = low + (high - low) / 2
 *    c) if ((mid == n - 1 || arr[mid + 1] > element)) && arr[mid] == element) then return mid
 *    d) else if element < arr[mid]
 *          return first(arr, low, mid - 1, element)
 *    e) else
 *          return first(arr, mid + 1, high, element)
 */

function last(arr, low, high, element) {
    if (low <= high) {
        var n = arr.length;
        var mid = low + (high - low) / 2
        if ((mid == n - 1 || arr[mid + 1] > element) && arr[mid] == element) {
            return mid;
        } else if (element < arr[mid]) {
            return last(arr, low, mid - 1, element);
        } else {
            return last(arr, mid + 1, high, element);
        }
    }
    return -1
}

var arr = [1, 2, 3, 5, 5, 5, 6];
var element = 5;
console.log(`arr = [ ${arr} ]`);
console.log("Element: " + element);
console.log("First Occurrence = ", first(arr, 0, arr.length - 1, element));
console.log("Last Occurrence = ", last(arr, 0, arr.length - 1, element));

/**
 * Time Complexity: O(log n) 
 * Auxiliary Space: O(1)
 */

