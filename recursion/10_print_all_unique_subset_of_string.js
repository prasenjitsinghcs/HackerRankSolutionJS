/**
 * Print all the unique subsets of a give string.
 * 
 * Input: A[] = [1, 5, 6]
 * Output: [[1], [1, 5], [1, 6], [5], [5, 6], [6], [1, 5, 6]]
 * Explanation: The number of all the non-empty possible subsets will be 2N-1. 
 * Here it will be [1], [1, 5], [1, 6], [5], [5, 6], [6] and [1, 5, 6]
 * 
 * Input: A[] = [1, 2, 2]
 * Output: [[1], [1, 2], [1, 2, 2], [2], [2, 2]]
 * 
 */

// Approach 1 (Recursion):

// Follow the given steps to solve the problem using the above approach:

// 1. Iterate over the elements one by one.
// 2. For each element, just pick the element and move ahead recursively and 
//    add the subset to the result.
// 3. Then using backtracking, remove the element and continue finding the 
//    subsets and adding them to the result.

function solution(input, index, output) {

    // if the input is empty print the output string
    if (index === input.length) {
        console.log(output);
        return;
    }

    // output is passed with including the character at index of Input string
    solution(input, index + 1, output + input[index]);

    while (index + 1 < input.length && input[index] === input[index + 1]) {
        index++;
    }

    // output is passed without including the character at index of Input string
    solution(input, index + 1, output);
}

var str = "aab";
console.log(`Unique subset of a given string "${str}"`);
solution(str, 0, "");


function solve(arr, index, output) {
    if (index === arr.length) {
        console.log(output);
        return;
    }

    output.push(arr[index]);
    solve(arr, index + 1, output);
    output.pop();

    while (index + 1 < arr.length && arr[index] === arr[index + 1]) {
        index++;
    }

    solve(arr, index + 1, output);
}

var arr = [1, 2, 2];
console.log(`\nUnique subset of a given list [${arr}]`);
solve(arr, 0, []);

/**
 * Time Complexity: O(2^n) for generating every subset and O(k)  to insert every
 * subset in another data structure if the average length of every subset is k. Overall O(k * 2^n).
 * 
 * Space Complexity: O(2^n * k) to store every subset of average length k. 
 * Auxiliary space is O(n)  if n is the depth of the recursion tree.
 * 
 */

