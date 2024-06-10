/**
 * Given a string S, we can transform every letter individually to be lowercase 
 * or uppercase to create another string.  Return a list of all possible strings 
 * we could create.
 */

/**
 * Examples:
 * 
 * Input: S = "a1b2"
 * Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
 * 
 * Input: S = "3z4"
 * Output: ["3z4", "3Z4"]
 * 
 * Input: S = "12345"
 * Output: ["12345"]
 */

/**
 * 1. Initialize index = 0 and output = ""
 * 2. Now iterate over the string starting from index = 0 to the length of the string
 * 3. In each recursive call include the character of index in output string
 * 4. If current character is a number then include this in output string 
 * 5. else include the chacter with upper case and lower case in the the output string
 */

function solve(str, index, output) {
    if (index === str.length) {
        console.log(output);
        return;
    }
    const code = str.charCodeAt(index);
    if (code < 48 || code > 57) { // If not a number then change the case
        // Include the character with lower case
        solve(str, index + 1, output + (str[index].toLowerCase()));

        // Include the character with lower case
        solve(str, index + 1, output + (str[index].toUpperCase()));
    } else {
        // Include the character as it is to the output string 
        solve(str, index + 1, output + str[index]);
    }
}

function main(str) {
    console.log(`\nInput: ${str}`);
    console.log(`Output: `);
    solve(str, 0, "");
}

main("a1b2");
main("3z4");
main("12345");

/**
 * Input: a1b2
 * Output: 
 * a1b2
 * a1B2
 * A1b2
 * A1B2
 * 
 * Input: 3z4
 * Output: 
 * 3z4
 * 3Z4
 * 
 * Input: 12345
 * Output: 
 * 12345
 * 
 */

/**
 * Time Complexity: O(2^n)
 * The time complexity of this approach is O(2^n), where n is the length of the 
 * given string. This is because, for a string of length n, we are taking two 
 * decision for each chanracter with upper case or lower case.
 * 
 * Space Complexity: O(n)
 * The recursive function call stack requires O(n) space for the worst case, 
 * where n is the length of the given string.
 */