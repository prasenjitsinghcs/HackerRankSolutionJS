/**
 * Given a string you need to print all possible strings that can be made by 
 * placing spaces (zero or one) in between them. 
 */

/**
 * Input:  str[] = "ABC"
 * Output: ABC
 *         AB C
 *         A BC
 *         A B C
 */

/**
 * 1. Initialize index = 1 and output = "A" (first character of the given string)
 * 2. Now iterate over the string starting from index = 1 to the length of the string
 * and include each character with and without spaces in the output recursively.
 */

function solve(str, index, output) {
    if (index === str.length) {
        console.log(output);
        return;
    }
    // Include the character with space to the output
    solve(str, index + 1, output + " " + str[index]);

    // Include the character without space to the output
    solve(str, index + 1, output + str[index]);
}

function main(str) {
    console.log(`\nInput: ${str}\n`);
    console.log(`Output: `);
    solve(str, 1, str[0]);
}

main("ABC");
main("CAT");

/**
 * Input: ABC
 * Output: 
 * A B C
 * A BC
 * AB C
 * ABC
 * 
 * 
 * Input: CAT
 * Output: 
 * C A T
 * C AT
 * CA T
 * CAT
 */

/**
 * Time Complexity: O(2^n)
 * The time complexity of this approach is O(2^n), where n is the length of the 
 * given string. This is because, for a string of length n, we are taking two 
 * decision for each chanracter with or without space.
 * 
 * Space Complexity: O(n)
 * The recursive function call stack requires O(n) space for the worst case, 
 * where n is the length of the given string.
 */


