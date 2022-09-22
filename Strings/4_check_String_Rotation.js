/**
 * Given a string s1 and a string s2, write a function to check whether s2 is a rotation of s1.
 */

/**
 * Examples: 
 * Input: S1 = ABCD, S2 = CDAB
 * Output: Strings are rotations of each other
 * 
 * Input: S1 = ABCD, S2 = ACBD
 * Output: Strings are not rotations of each other
 */

/**
 * Native Approach
 * 
 */
function checkString(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }

    var str = str1 + str1;

    return str.includes(str2);
    
}

var str1 = "AACD", str2 = "ACDA";

console.log(checkString(str1, str2));


