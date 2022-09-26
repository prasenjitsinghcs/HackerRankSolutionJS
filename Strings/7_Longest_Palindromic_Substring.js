/**
 * Given a string, find the longest substring which is a palindrome.
 */

/**
 * For example, 
 * Input: Given string :"gyaanvnaayvw", 
 * Output: "yaanvnaay"
 * 
 * For example, 
 * Input: Given string :"gyaanvyaanwallah", 
 * Output: "alla"
 */

/**
 * Method 1: Brute Force Approach 
 * 
 * This is the simple approach, here we find the all the substring,
 * and then check for each substring whether the substring is palindrome
 * or not. Here we will use three loops, two outer loops will get the substrings
 * and inner loop will check for each substring wheather this is palindrome or not.
 */

function longestPalSubstr(str) {
    var len = 0;
    var start = 0;
    var end = 0;
    for (var i = 0; i < str.length; i++) {
        for (var j = i; j < str.length; j++) {
            if (isPalindrome(str, i, j)) {
                if (j - i + 1 > len) {
                    start = i;
                    end = j;
                    len = j - i + 1;
                }
            }
        }
    }

    return str.substring(start, end + 1);
}

function isPalindrome(str, start, end) {
    while (start < end) {
        if (str[start] != str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

// Driver Code
var array = [
    'gyaanvnaayvw',
    'abbcd',
    'abdcdb',
    'abcd'
];

array.forEach((str, i) => {
    console.log(`---------- Test Case ${i} ----------`);
    console.log("Input: ", str);
    var output = longestPalSubstr(str);
    console.log('Longest Palindrome: ', output);
})

/**
 * Time Complexity: O(n ^ 3) - Two outer loop to get sub string, and one inner loop to check palindrome for a sub string
 * Space Complexity: O(1) - No extra space required
 */

/**
 * Method 2: Expand Around center (Optimal Solution)
 * In this approach we will take each element of the string as center and expand the length of the sub string towards left
 * and right until the left and right characters are equal to discover the longest palindrome possible. For an even length
 * of palindrome we need to consider every adjacent characters as center or midpoint of palindrome.
 * 
 * 1. First check for the given string length if the length of string is less then or equal to 1, then simple return from the function.
 * 2. Initialize the start and end pointer. start = 0 and end = 0
 * 3. In for loop at each character expand the substring until its a palindrome and get the length in len1 and len2 resepectivlty for odd and even length palindrome.
 * 4. Get the max length len 
 * 5. Check if end - start < len then update the start and end pointer
 * 6. Return the substring within start and end, this will be the longest palindromic substring present in the give input string. 
 */

function longestPalindromicSubstring(str) {

    if (str.length <= 1) {
        return str;
    }

    var start = 0;
    var end = 0;

    for (var i = 0; i < str.length; i++) {
        var len1 = expand(str, i, i);
        var len2 = expand(str, i, i + 1);
        var len = Math.max(len1, len2);

        if (end - start < len) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return str.substring(start, end + 1);
}

function expand(str, start, end) {
    while (start >= 0 && end < str.length && str[start] === str[end]) {
        start--;
        end++;
    }
    return end - start - 1;
}

// Driver Code
var array = [
    'gyaanvnaayvw',
    'abbcd',
    'abdcdb',
    'abcd'
];

array.forEach((str, i) => {
    console.log(`---------- Test Case ${i} ----------`);
    console.log("Input: ", str);
    var output = longestPalindromicSubstring(str);
    console.log('Longest Palindrome: ', output);
})


/**
 * Time Complexity: O(n ^ 2)
 * Space Complexity: O(1)
 */