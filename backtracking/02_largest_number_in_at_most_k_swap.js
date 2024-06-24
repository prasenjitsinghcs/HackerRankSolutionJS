/**
 * Given two positive integers M and K, find the maximum integer possible by 
 * doing at-most K swap operations on its digits.
 */

/**
 * 
 * Input: M = 254, K = 1
 * Output: 524
 * Explanation: Swap 5 with 2 so number becomes 524
 * 
 * Input: M = 254, K = 2
 * Output: 542
 * Explanation: Swap 5 with 2 so number becomes 524, Swap 4 with 2 so number becomes 542
 */

/**
 * 1. Create a global variable largest that will store the maximum string or number.
 * 2. Define a recursive function solution and pass num, current index and 
 * the k (number of swaps)
 * 3. Define the base condition if index === num.length - 1 or k == 0 (no swaps left)
 * 4. Now execute the for loop from i -> index + 1 to num.length 
 * 5. Now cheque for the digit which is max in the range of i -> index + 1 to num.length
 * length of the number, then swap the digit at index with the max digit in range. 
 * 6. Then print the largest = max(largest, num[i])
 * 7. Now call the recursive function solution(num, index + 1, k - 1)
 * 8. Back track by swap the digit at index with the max digit in range
 */

function solution(num, index, k) {
    if (index === num.length - 1 || k === 0) {
        return;
    }

    let max = getMax(num, index);

    for (let i = index + 1; i < num.length; i++) {
        if (num[index] < num[i] && num[i] === max) {
            swap(num, i, index);
            largest = Math.max(Number(num.join("")), largest);
            solution(num, index + 1, k - 1);
            swap(num, i, index);
        }
    }
}

function swap(num, a, b) {
    const temp = num[a];
    num[a] = num[b];
    num[b] = temp;
}

function getMax(num, start) {
    let max = num[start];

    for (let i = start; i < num.length; i++) {
        max = Math.max(max, num[i]);
    }

    return max;
}


let num = [1, 2, 3, 4, 4];
let largest = Number(num.join(""));

console.log(`Input: ${largest}`);

solution(num, 0, 4);

console.log(`Output: ${largest}`);

/**
 * Time Complexity: O(N ^ k), For every recursive call N recursive calls are 
 * generated until the value of k is 0, Thus O((N ^ k).
 * 
 * Auxiliary Space: O(N). The space required to store the output string.
 */
