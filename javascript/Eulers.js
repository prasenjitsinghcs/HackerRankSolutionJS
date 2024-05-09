function getSum(n) {
    n = BigInt(n);
    var n3 = BigInt(parseInt((n - 1n) / 3n))
    var n5 = BigInt(parseInt((n - 1n) / 5n))
    var n15 = BigInt(parseInt((n - 1n) / 15n))
    
    var totalSum3 = BigInt((3n * n3 + 3n * n3 * n3) / 2n) // sum of numbers divisible by 3
    var totalSum5 = BigInt((5n * n5 + 5n * n5 * n5) / 2n) // sum of numbers divisible by 5
    var totalSum15 = 0n
    
    if (n > 15n) {
        totalSum15 = BigInt((15n * n15 + 15n * n15 * n15) / 2n) // sum of the number divisible by both 3 and 5
    }
    
    var total = totalSum3 - totalSum15 + totalSum5
    return BigInt(total).toString();
}

var n = BigInt('100000000000');
console.log(n)
var sum = getSum(n);
console.log(sum);