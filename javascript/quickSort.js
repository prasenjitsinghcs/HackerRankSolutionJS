'use strict';
function quickSort(arr, low, high) {
    if (low < high) {
        var pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
    var pivot = arr[high];
    var i = low - 1;
    for (var j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, (i + 1), high);
    return (i + 1);
}

function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

var arr = [2, 7, 6, 5, 1, 4];
var n = arr.length;
quickSort(arr, 0, n - 1);
console.log(arr);