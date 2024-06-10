/**
 * Print all permutations of a string keeping the sequence but changing cases.
 */

/**
 * Input : ab
 * Output : AB Ab ab aB
 * 
 * Input : ABC
 * Output : abc Abc aBc ABc abC AbC aBC ABC
 */

/**
 * 1. Initialize index = 0 and output = ""
 * 2. Now iterate over the string starting from index = 0 to the length of the string
 * 3. In each recursive call include the character at index with upper case and 
 * lower case in the output string recursively.
 */

function solve(str, index, output) {
    if (index === str.length) {
        console.log(output);
        return;
    }

    // Include the character in upper case in output string
    solve(str, index + 1, output + (str[index].toUpperCase()));

    // Include the character in lower case in output string
    solve(str, index + 1, output + (str[index].toLowerCase()));
}

function main(str) {
    console.log(`\nInput: ${str}`);
    console.log(`Output:`)
    solve(str, 0, "");
}

main("ab")
main("abc")

/**
 * Input: ab
 * Output:
 * AB
 * Ab
 * aB
 * ab
 * 
 * Input: abc
 * Output:
 * ABC
 * ABc
 * AbC
 * Abc
 * aBC
 * aBc
 * abC
 * abc
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