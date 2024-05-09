/**
 * Project Euler #1: Multiples of 3 and 5 (HackerRank)
 * 
 * If we list all the natural numbers below 10 that are mutiples of 3
 * or 5, then we get 3, 5, 6, and 9. The sum of these numbers is 23.
 * 
 * Here we need to find the sum or all the mutiples of 3 or 5 below N.
 * 
 * Constrainsts:
 * 1 <= N <= 10 ^ 9
 * 
 * Output Format:
 * Print the sum of all the multiples of or 3 or 5 below N. 
 */

/**
 * 1. Calculate the total count n3 of numbers which are multiples of 3 with in the range of 1 to N
 * 2. Calculate the total count n5 of numbers which are multiples of 5 with in the range of 1 to N
 * 3. If N > 15 then calculate the total count n15 of nubers which are multiples of 3 and 5 both wiht in the range of 1 to N
 * 4. Calculate the sum of all the multiples of 3 as totalSum3, using Formula to find the sum of an arithmetic progression
 * 5. Calculate the sum of all the multiples of 5 as totalSum5, using the above formula
 * 6. Calculate the sum of all the multiples of 5 and 3 ( which will be mutiples of 15) as totalSum15
 * 7. Now calculate the total = (totalSum3 + totalSum5 - totalSum15), here we subtracting the totalSum15 
 *    because term multiples of 15 are mutiples of both 3 and 5, and we need to consider this term only once
 *    while calculating the resulting sum.
 * 
 * 
 * Formula to find the sum of an arithmetic progression  
 * Sn = n/2[2a + (n − 1) × d] 
 * a = first term of arithmetic progression 
 * n = number of terms in the arithmetic progression 
 * d = common difference
 */

function getSumOfMutiplesOf3and5(n) {
    n = BigInt(n);
    var n3 = BigInt(parseInt((n - 1n) / 3n))
    var n5 = BigInt(parseInt((n - 1n) / 5n))
    var n15 = BigInt(parseInt((n - 1n) / 15n))

    // sum of numbers divisible by 3
    var totalSum3 = BigInt((3n * n3 + 3n * n3 * n3) / 2n)

    // sum of numbers divisible by 5
    var totalSum5 = BigInt((5n * n5 + 5n * n5 * n5) / 2n)
    var totalSum15 = 0n

    if (n > 15n) {
        // sum of the number divisible by both 3 and 5
        totalSum15 = BigInt((15n * n15 + 15n * n15 * n15) / 2n)
    }

    var total = totalSum3 - totalSum15 + totalSum5
    return BigInt(total).toString();
}

var numArr = [10, 100, 1000];
numArr.forEach(n => {
    console.log('N = ' + n);
    var sum = getSumOfMutiplesOf3and5(n);
    console.log('Total sum = ' + sum);
})
