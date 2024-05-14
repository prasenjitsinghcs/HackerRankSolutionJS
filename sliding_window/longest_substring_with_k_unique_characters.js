/**
 * Given a string you need to print the size of the longest possible substring 
 * that has exactly K unique characters. If there is no possible substring 
 * then print -1.
 */

/**
 * Input: S = "aabacbebebe", K = 3
 * Output: 7
 * Explanation: "cbebebe" is the longest substring with 3 distinct characters.
 */

var str = "aabacbebebe", k = 3;

/**
 * Approach 1: Brute Force Approach
 */

function getLongetSubStr(str, k) {
    let low = 0, high = 0;
    let max = Number.MIN_VALUE;
    for(let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            if (j - i + 1 >= k) {
                let index = i;
                const distinct = new Set();
                while(index <= j) {
                    distinct.add(str[index]);
                    index++;
                }

                if (distinct.size === k) {
                    max = Math.max(max, j - i + 1);
                    low = i;
                    high = j;
                }
            }
        }
    }
    console.log("Sub string = " + str.substr(low, high - low + 1));
    return max;
}

console.log("Brute force Approach:");
console.log(`Input: str = "${str}", k = ${k}`);
var out = getLongetSubStr(str, k);
console.log(`Output: ${out} (max length of the sub sting containing ${k} unique characters)`);

// Time Complexity: O(n ^ 3), Since each character is processed by the left and right pointers exactly once.
// Auxiliary Space: O(n)

/**
 * Approach 2: Sliding Window Approach
 */
function getLongetSubString(str, k) {
    let i = 0, j = 0, map = {}, max = Number.MIN_VALUE;
    let low = 0, high = 0;

    while(j < str.length) {
        if (map[str[j]] !== undefined) {
            map[str[j]] = map[str[j]] + 1;
        } else {
            map[str[j]] = 1;
        }

        let size = Object.keys(map).length;

        if (size < k) {
            j++;
        } else if(size === k) {
            if (j - i + 1 > max) {
                max = j - i + 1;
                low = i;
                high = j;
            }
            j++;
        } else if (size > k) {
            while(size > k) {
                if (map[str[i]] !== undefined) {
                    map[str[i]] = map[str[i]] - 1;
                }
                if (map[str[i]] === 0) {
                    delete map[str[i]];
                }
                size = Object.keys(map).length;
                i++;
            }
            j++;
        }
    }

    console.log("Sub string = " + str.substr(low, high));
    return max;

}
console.log("\n\nSliding Window Approach:")
console.log(`Input: str = "${str}", k = ${k}`);
var out = getLongetSubString(str, k);
console.log(`Output: ${out} (max length of the sub sting containing ${k} unique characters)`);

// Input: str = "aabacbebebe", k = 3
// Sub string = cbebebe
// Output: 7 (max length of the sub sting containing 3 unique characters)

// Time Complexity: O(n), Since each character is processed by the left and right pointers exactly once.
// Auxiliary Space: O(1)
