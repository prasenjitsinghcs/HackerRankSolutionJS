/**
 * Write a function that reverses a string.
 * 
 * Given string as an array of characters
 */

/**
 * Example: input = ['g', 'y', 'a', 'a', 'n']
 *         output = ['n', 'a', 'a', 'y', 'g']
 */

/**
 * Approach: character swapping
 * 1. Take two pointer start = 0 and end = n - 1
 * 2. swap the element at position start and end, 
 * and increase start by 1 and decrease end by 1.
 * 2. repeat step 2 until start < end
 * 
 * Time Complexity: 0(n) reverse the array element in n / 2 iteration
 * Space Complexity: 0(1) no extra space required
 */

function reverseString(str) {
    if (str.length == 1) {
        return str;
    }

    var start = 0;
    var end   = str.length - 1;

    while(start < end) {
        // swap the character at start and end position
        var temp = str[start];
        str[start] = str[end];
        str[end] = temp;

        start++;
        end--;
    }
    return str;
}

var input = 'gyaanvyaanwallah';
input = input.split('');
console.log("Input: ", input);
output = reverseString(input);
console.log("Output: ", output);

