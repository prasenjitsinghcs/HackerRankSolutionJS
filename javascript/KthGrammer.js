
/**
 *  n = 1, k = 1 -> 0
 *  n = 2        -> 01
 *  n = 3        -> 0110
 *  n = 4        -> 01101001     
 * 
 */

console.log(getkthGrammer(1, 1));
console.log(getkthGrammer(2, 5));
console.log(getkthGrammer(3, 4));
console.log(getkthGrammer(4, 3));
console.log(getkthGrammer(5, 4));
console.log(getkthGrammer(6, 3));

function getkthGrammer(n, k) {
    if (n == 1) {
        return 0;
    }

    var mid = Math.pow(2, n - 1) / 2;

    if (k <= mid) {
        return getkthGrammer(n - 1, k);
    } else {
        return 1 - getkthGrammer(n - 1, k - mid);
    }
}