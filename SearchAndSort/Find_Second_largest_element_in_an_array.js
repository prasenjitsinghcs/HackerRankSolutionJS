/**
 * Find the 2nd largest element in a given array.
 */
/**
 * Examples:
 * Input: [4]
 * Output: Not Found
 * Input: [2,2,2]
 * Output: Not Found
 * Input: [1,2,3,4,5]
 * Output: 4
 * Input: [2,2,1,1,5,5]
 * Output: 2
 * Input: [1,1,3,3,2,2]
 * Output: 2
 */

/**
 * Method 1: using sorting
 * 
 * In this approach we can sort the array of element in decending order, and then return the element which is not equal to the largest element.
 */

function getSecondLargest(arr) {
    if (arr.length < 2) {
        return 'Invalid Input'
    }

    arr = arr.sort((a, b) => b - a);

    var largest = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != largest) {
            return arr[i]
        }
    }

    return -1
}

var arr = [
    [4],
    [2,2,2],
    [1,2,3,4,5],
    [2,2,1,1,5,5],
    [1,1,3,3,2,2]
]

console.log('------- Method 1: Using Sorting of Array --------')
arr.forEach(a => {
    console.log(`Input: [ ${a} ]`)
    console.log('Output: ' + getSecondLargest(a))
})

/**
 * Time Complexity: O(n log n). Time required to sort the array is O(n log n).
 * Auxiliary space: O(1). As no extra space is required.
 * 
 */

/**
 * Method 2: Two traversal
 * Traverse the array two time, in first traversal find the first largest and in second
 * traversal find the second largest element present in the array excluding the previous largest.
 * 
 */

function getSecondLargestMethod2(arr) {
    if (arr.length < 2) {
        return "Invalid Input";
    }
    var largest = second = -1;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest ) {
            largest = arr[i];
        }
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > second && arr[i] < largest) {
            second = arr[i];
        }
    }

    return second;
}

var arr = [
    [4],
    [2,2,2],
    [1,2,3,4,5],
    [2,2,1,1,5,5],
    [1,1,3,3,2,2]
]
console.log('------- Method 2: Two traversal --------');
arr.forEach(a => {
    console.log(`Input: [ ${a} ]`)
    console.log('Output: ' + getSecondLargestMethod2(a))
})

/**
 * Time Complexity: O(n). Two traversals of the array is needed.
 * Auxiliary space: O(1). As no extra space is required.
 */

/**
 * Method 3: Efficient Solution
 * In this approch initialize first and second equlas to -1 and then traverse the array from 0 to n - 1,
 * where n is the length of the array.
 * Check if the current element arr[i] > first than second = first and first = arr[i]
 * else if the current element in between first and second than update second = arr[i]
 * At the end return the second
 * 
 */

function getSecondLargestMethod3(arr) {
    if (arr.length < 2) {
        return "Invalid Input";
    }

    var first = second = -1;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] < first) {
            second = arr[i];
        }
        console.log(`Current => arr[${i}] = ${arr[i]}, First => ${first}, second = ${second}`)
    }
    return second;
}

var arr = [
    [4],
    [2,2,2],
    [1,2,3,4,5],
    [2,2,1,1,5,5],
    [1,1,3,3,2,2]
]
console.log('----------- Method 3: Single traversals ----------');
arr.forEach(a => {
    console.log(`Input: [ ${a} ]`)
    console.log('Output: ' + getSecondLargestMethod3(a))
})

/** 
 * Time Complexity: O(n). Two traversals of the array is needed.
 * Auxiliary space: O(1). As no extra space is required.
 * 
 * /




