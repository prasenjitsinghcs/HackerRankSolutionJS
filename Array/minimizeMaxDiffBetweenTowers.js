/**
 * Minimize the maximum difference between the heights
 * 
 * Given the heights of N towers and a value of K, Either increase or decrease 
 * the height of every tower by K (only once) where K > 0. 
 * After modifications, the task is to minimize the difference between the 
 * heights of the longest and the shortest tower and output its difference.
 */

/**
 * The idea is to increase the first i towers by k and decrease the rest tower by k after sorting the heights, 
 * then calculate the maximum height difference. This can be achieved using sorting.
 */

/**
 * Time Complexity: O(N * log(N)), Time is taken for sorting
 * Auxiliary Space: O(1)
 */

function getMinDiff(arr, k) {
    console.log("Input Array: ", arr);
    console.log("K: ", k);
    var n = arr.length;
    arr = arr.sort((a, b) => a - b);
    var ans = arr[n - 1] - arr[0]; // get initial max diff

    var tempmin = arr[0]; // get temp min
    var tempmax = arr[n - 1]; // get temp max
    for (var i = 1; i < n; i++) {
        if (arr[i] - k < 0) {
            continue;
        }

        tempmin = Math.min(arr[0] + k, arr[i] - k);
        tempmax = Math.max(arr[n - 1] - k, arr[i - 1] + k)

        ans = Math.min(ans, tempmax - tempmin);
    }
    console.log("Output: ", ans);
    return ans;
}

console.log('Test Case : 1 ------------------');
var arr = [1, 10, 15]
var k = 6;
var output = getMinDiff(arr, k);

console.log('Test Case : 2 ------------------');
var arr = [1, 5, 10, 15]
var k = 3;
var output = getMinDiff(arr, k);

