var arr = [6, 1, 1, 6, 3, 1, 7, 2, 3];

function getFirstLastIndex(arr, num) {
    var first;
    var last;
    for (var i = 0; i < arr.length; i++) {
        if (!first && num === arr[i]) {
            first = i;
        }

        if (!last && num === arr[arr.length - 1 - i]) {
            last = arr.length - 1 - i;
        }

        if (first && last) {
            break;
        }
    }

    return [first, last]

}

console.log(getFirstLastIndex(arr, 1));
