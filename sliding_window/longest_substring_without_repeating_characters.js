/**
 * Given a string str, find the length of the longest substring without 
 * repeating characters.
 */

/**
 * Example 1:
 * Input: “ABCDEFGABEF”
 * Output: 7
 * Explanation: The longest substring without repeating characters are 
 * “ABCDEFG”, “BCDEFGA”, and “CDEFGAB” with lengths of 7
 */

var str = "ABCDEFGABEF";

/**
 * Approach 1: Brute force approach
 */
function solution(str) {
    let max = -1;
    let low = 0, high = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            const distinct = new Set();
            let index = i;
            while(index <= j) {
                distinct.add(str[index]);
                index++;
            }

            if (distinct.size === j - i + 1) {
                if (j - i + 1 > max) {
                    low = i;
                    high = j;
                    max = j - i + 1;
                }
            }
        }
    }

    console.log("Sub String: " + str.substr(low, high - low + 1));

    return max;
}

console.log("Brute Force Approach");
console.log(`Input Str: ${str}`);
var out = solution(str);
console.log(`Output: ${out}`);

/**
 * Time Complexity: O(n ^ 3)
 * Auxiliary Space: O(n)
 */

/**
 * Approach 2: Sliding Window
 */

function getLongestSubStringWithoutRepeatingChar(str) {
    let i = 0, j = 0, map = {}, max = Number.MIN_VALUE;
    let low = 0, high = 0;

    while(j < str.length) {
        if (map[str[j]] !== undefined) {
            map[str[j]] = map[str[j]] + 1;
        } else {
            map[str[j]] = 1;
        }

        size = Object.keys(map).length;

        if (size === j - i + 1) {
            if (j - i + 1 > max) {
                low = i;
                high = j;
                max = j - i + 1;
            }
            j++;
        } else if (size < j - i + 1) {
            while(size < j - i + 1) {
                if (map[str[i]] !== undefined) {
                    map[str[i]] = map[str[i]] - 1;
                }
                if (map[str[i]] === 0) {
                    delete map[str[i]];
                    size--;
                }
                i++;
            }
            j++;
        }
    }
    console.log("Sub String: " + str.substr(low, high - low + 1));
    return max;
}

console.log("\n\nSliding Window Approach:");
console.log(`Input Str: ${str}`);
var out = getLongestSubStringWithoutRepeatingChar(str);
console.log(`Output: ${out}`);

// Input Str: ABCDEFGABEF
// Output: 7

// Time Complexity: O(n), Since each character is processed by the left and right pointers exactly once.
// Auxiliary Space: O(1)