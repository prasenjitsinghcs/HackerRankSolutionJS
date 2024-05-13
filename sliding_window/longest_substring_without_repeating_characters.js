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
 * Approach 2: Sliding Window
 */

function getLongestSubStringWithoutRepeatingChar(str) {
    let i = 0, j = 0, map = {}, max = Number.MIN_VALUE;

    while(j < str.length) {
        if (map[str[j]] !== undefined) {
            map[str[j]] = map[str[j]] + 1;
        } else {
            map[str[j]] = 1;
        }

        size = Object.keys(map).length;

        if (size === j - i + 1) {
            max = Math.max(max, j - i + 1);
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
    return max;
}

var out = getLongestSubStringWithoutRepeatingChar(str);
console.log(`Input Str: ${str}`);
console.log(`Output: ${out}`);

// Input Str: ABCDEFGABEF
// Output: 7

// Time Complexity: O(n), Since each character is processed by the left and right pointers exactly once.
// Auxiliary Space: O(1)