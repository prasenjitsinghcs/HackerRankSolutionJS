var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];

/*
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort1(n, arr) {
    // Write your code here
    var k = arr[n - 1];
    var j = n - 2;
    while(j >= 0 && arr[j] > k) {
        arr[j + 1] = arr[j];
        j--;
        console.log(arr.join(' '));
        
    }
    arr[j + 1] = k;
    console.log(arr.join(' '));
}


insertionSort1(arr.length, arr);