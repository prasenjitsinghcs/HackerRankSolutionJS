/**
 * Given two strings, string, and pattern, the task is to find the smallest 
 * substring in string containing all characters of pattern. 
 */

/**
 * Input: string = “this is a test string”, pattern = “tist” 
 * Output: “t stri” 
 * Explanation: “t stri” contains all the characters of pattern.
 * 
 * Input: string = “geeksforgeeks”, pattern = “ork” 
 * Output: “ksfor”
 */

let str = "this is a test string", pattern = "tist";
// let str = "geeksforgeeks", pattern = "ork"; 

/**
 * Approach 2: Sliding Window
 */

function solution(str, pattern) {
    let i = 0, j = 0, min = Number.MAX_VALUE, map = {}, low = 0, high = 0;
    createMap(pattern, map);
    let count = Object.keys(map).length;
    
    while(j < str.length) {
        if (map[str[j]] !== undefined) {
            map[str[j]] = map[str[j]] - 1;
        } 

        if (map[str[j]] === 0) {
            count--;
        }

        if (count > 0) {
            j++;
        } else if (count === 0) {
            while(count === 0 && j - i + 1 >= pattern.length) {
                if (j - i + 1 < min) {
                    min = j - i + 1;
                    low = i;
                    high = j;
                }

                if (map[str[i]] !== undefined) {
                    map[str[i]] = map[str[i]] + 1;
                    if (map[str[i]] === 1) {
                        count++;
                    }
                }     
                
                i++;
            }
            j++;
        }
    }

    console.log("Output: ");
    console.log(`Substring: "${str.substr(low, high - low + 1)}"`);
    console.log("Min Length: " + min);

    return min;

}

function createMap(str, map) {
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] !== undefined) {
            map[str[i]] = map[str[i]] + 1;
        } else {
            map[str[i]] = 1;
        }
    }
}

console.log(`Input: str = "${str}", pattern = "${pattern}"`);
solution(str, pattern);

/**
 * Input: str = "this is a test string", pattern = "tist"
 * Output: Substring: "t stri"
 * Min Length: 6
 */

/**
 * Time Complexity:  O(N), where N is the length of string. 
 * Auxiliary Space: O(1)
 */
