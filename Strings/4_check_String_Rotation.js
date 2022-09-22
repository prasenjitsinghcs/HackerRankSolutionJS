/**
 * 
 * Given a string s1 and a string s2, write a function to check whether s2 is a rotation of s1.
 * 
 */

/**
 * 
 * Examples: 
 * Input: S1 = ABCD, S2 = CDAB
 * Output: Strings are rotations of each other
 * 
 * Input: S1 = ABCD, S2 = ACBD
 * Output: Strings are not rotations of each other
 * 
 */

/**
 * Approach: N A T I V E -- A P P R O A C H
 * Get the roation of str2 for each index and compare against the str1
 * 
 * Time Complexity: O(N * N), where N is the length of the string.
 * Auxiliary Space: O(1)
 *
 */

function isRotation(str1, str2, index) {
    var i = 0;

    while (i < str1.length) {
        var j = (index + str1.length + i) % str1.length;
        if (str1[i] != str2[j]) {
            return false;
        }
        i++;
    }
    return true;
}

function checkString2(str1, str2) {
    var i = 0;
    while (i < str1.length) {
        if (isRotation(str1, str2, i++)) {
            return true;
        }
    }
    return false;
}

console.log('Approach: N A T I V E   ')
var str1 = "AACD", str2 = "ACDA";
console.log('str1 => ', str1)
console.log('str2 => ', str2)

console.log('Output: ', checkString2(str1, str2));

/**
 * S T R I N G --- C O N C A T E N A T I O N
 * 
 * Efficient Approach: Follow the given steps to solve the problem
 * 1. Create a temp str string and store concatenation of str1 to str1 in str, i.e str = str1.str1
 * 2.If str2 is a substring of str then str1 and str2 are rotations of each other.
 * 
 * Time Complexity: O(N), where N is the length of the string.
 * Auxiliary Space: O(N)
 * 
 */
function checkString(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }

    var str = str1 + str1;

    return str.includes(str2);
}

console.log('Approach: S T R I N G --- C O N C A T E N A T I O N')
var str1 = "AACD", str2 = "ACDA";
console.log('str1 => ', str1)
console.log('str2 => ', str2)

console.log('Output: ', checkString(str1, str2));

