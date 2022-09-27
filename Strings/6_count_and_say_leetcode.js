/**
 * Count and Say LeetCode Problem Solution
 * 
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
 * countAndSay(1) = "1" This is the base case
 * countAndSay(n) is the way you would “say” the digit string from countAndSay(n-1), which is then converted into a different digit string.
 * 
 * To determine how you “say” a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.
 * 
 * For example: the saying and conversion for digit string "3322251":
 * 
 *                        3 3 2 2 2 5 1
 *           two 3's, three 2's, one 5, and one 1
 *            2  3     3    2     1  5      1   1 = "23321511"
 * 
 * Given a positive integer n, return the nth term of the count-and-say sequence.
 * 
 */

/**
 * 
 * Example 1:
 * Input: n = 1
 * Output: "1"
 * Explanation: This is the base case.
 * 
 * Example 2:
 * Input: n = 4
 * Output: "1211"
 * Explanation:
 * countAndSay(1) = "1"
 * countAndSay(2) = say "1" = one 1 = "11"
 * countAndSay(3) = say "11" = two 1's = "21"
 * countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 * 
 * Constraints: 1 <= n <= 30
 */

/**
 * 
 * Solution:
 * countAndSay(str)
 * 1. First check if n == 1 then return "1"
 * 2. Initialize the resulting string as "1"
 * 3. Now execute the while loop until n > 1
 * 4. In while loop call the helper method addCountToString(result) and pass the result value to this and store the output of the fucntion in the same result variable. This method will count the contigiurs digits and form a new string. 
 * 5. Decrement the value of n by 1
 * 6. Return the result
 * 
 * Helper Method: addCountToString(str)
 * 1. Initialize previous = str[0] (first character of input string), count = 1 and output = ""
 * 2. Now execute for loop i = 1 to i <= str.length
 * 3. Inside for loop check for previous value if the previous value is not equal to the current string element if (previous != str[i]) then append the output string with the previous element and count output += count + previous. Update the previous value with current string element previous = str[i]. and reset the value of count = 1
 * 4. Else simple increment the count count++
 * 5. Repeat the steps from 2 to 4 until the for loop ends.
 * 6. Return the output string which contains the count of character present in the input string
 * 
 */
function countAndSay(n) {
    if (n === 1) {
        return "1";
    }

    var result = "1";

    while (n > 1) {
        result = addCountToString(result);
        n--;
    }
    return result;
};


function addCountToString(str) {
    var previous = str[0];
    var count = 1;
    var output = "";
    for (var i = 1; i <= str.length; i++) {
        if (previous != str[i]) {
            output += count + previous;
            previous = str[i];
            count = 1;
        } else {
            count++;
        }
    }

    return output;
}

var n = 4;
console.log("Input: ", n)
console.log("Output: ", countAndSay(4))
