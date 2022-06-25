function bigSorting(unsorted) {
    // Write your code here
    return unsorted.sort((a, b) => checkNum(a, b));
    // return unsorted;
}

function checkNum(a, b) {
    if (a.length > b.length) {
        return 1;
    } else if (b.length > a.length) {
        return -1;
    } else {
        var len = a.length;

        while(len > 0) {
            let index = a.length - len
            if (parseInt(a[index]) > parseInt(b[index])) {
                return 1;
            } else if (parseInt(a[index]) < parseInt(b[index])) {
                return -1;
            }
            len--;
        }

        return 0;
    }
}

arr = ['4324234234234', '435345', '34543534', '2', '345432'];

console.log(bigSorting(arr));