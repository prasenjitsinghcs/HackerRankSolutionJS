/**
 * Check if a string is valid suffle of two other strings
 * 
 * Given three strings, need to check if the string one is the suffle of another two strings
 */

/**
 * Example:
 * str_one = 'xaybzc'
 * str_two = 'xyz'
 * str_three = 'abc'
 * 
 * Here string 'xaybzc' is a valid suffle of strings 'xyz' and 'abc' 
 */

/**
 * 1. first check if the length of the suffeled string str is equal to length of continated string 
 * of str_two and str_three, if not print not a valid suffle
 * 2. If yes then sort the string using char code, get the corresponding char code of the strings and store them
 * in a temp array.
 * 3. Now sort those temporary array strArr and str1Str2Arr
 * 4. Now compare the character of each index starting from 0 to n, if found any unmatch print not a valid suffle or return false
 * else return true.
 * 
 * 
 */

function isVaidSuffle(str, str1, str2) {
    var strArr = [], str1Str2Arr = [];
    var temp = str1 + str2;

    if (str.length !== temp.length) {
        return false;
    }

    for (var i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        strArr.push(code);
    }

    for (var i = 0; i < temp.length; i++) {
        let code = temp.charCodeAt(i);
        str1Str2Arr.push(code);
    }

    str1Str2Arr = str1Str2Arr.sort((a, b) => a - b);
    strArr = strArr.sort((a, b) => a - b);

    while (i < strArr.length) {
        if (strArr[i] != str1Str2Arr[i]) {
            return false;
        }
    }
    return true;
}


var str = '1xy2';
var str1 = 'xy';
var str2 = '12';

console.log(`str  => ${str}, \nstr1 => ${str1}, \nstr2 => ${str2}`);
console.log('Is Valid Suffle: ', isVaidSuffle(str, str1, str2))

var str = '1xy2';
var str1 = 'xy3';
var str2 = '12';

console.log(`str  => ${str}, \nstr1 => ${str1}, \nstr2 => ${str2}`);
console.log('Is Valid Suffle: ', isVaidSuffle(str, str1, str2));

var str = 'xyzabc';
var str1 = 'xac';
var str2 = 'ybz';

console.log(`str  => ${str}, \nstr1 => ${str1}, \nstr2 => ${str2}`);
console.log('Is Valid Suffle: ', isVaidSuffle(str, str1, str2));