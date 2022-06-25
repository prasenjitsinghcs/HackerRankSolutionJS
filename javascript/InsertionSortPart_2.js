/*
 * Complete the 'insertionSort2' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort2(n, arr) {
    // Write your code here
    for (var i = 1; i < n; i++) {
        var k = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > k) {
            arr[j + 1] = arr[j];
            j = j - 1;
            // console.log(arr.join(' '));
        }
        arr[j + 1] = k;
        console.log(arr.join(' '));
    }

}