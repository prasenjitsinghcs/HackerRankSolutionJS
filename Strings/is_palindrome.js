/**
 * Check if a given string is Palindrome or not.
 * 
 * A string is said to be palindrome if the reverse of the string is the same 
 * as the string. For example, “abba” is a palindrome because the reverse of 
 * “abba” will be equal to “abba” so both of these strings are equal and are 
 * said to be a palindrome, but “abbc” is not a palindrome.
 */

/**
 * Approach: two pointer
 * 1. take two pointer left and right and intialize left = 0 and right = n - 1, 
 * where n is the length of the given string.
 * 2. if you found str[left] != str[end] true that means string is not Palindrom
 * 3. Increment the left and decrement the right pointer by one.
 * 4. Repeat step 2 and 3 until start < end
 * 
 * 
 * Time complexity: O(n) 
 * Auxiliary Space: O(1)
 */

function isPalindrome(str) {
    var left = 0;
    var right = str.length - 1;

    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log("Apporch 1: Two pointer approch");

var input = "gyaanvyaanwallah";
console.log("Input: ", input);
console.log("Is Palindrome: ", isPalindrome(input));

var input = "abcddcba";
console.log("Input: ", input);
console.log("Is Palindrome: ", isPalindrome(input));

var input = "abcxcba";
console.log("Input: ", input);
console.log("Is Palindrome: ", isPalindrome(input));

/**
 * Approach 2: Using recursion
 * 
 * Time complexity: O(n) 
 * Auxiliary Space: O(1)
 */

function isPalindrome2(str, left, right) {
    if (str === null || left < 0 || right < 0) {
        return false;
    }

    if (left >= right) {
        return true;
    }

    if (str[left] == str[right]) {
        return isPalindrome2(str, left + 1, right - 1)
    }

    return false;
}

console.log("Apporch 2: Using recursion");

var input = "gyaanvyaanwallah";
console.log("Input: ", input);
console.log("Is Palindrome: ", isPalindrome2(input, 0, input.length - 1));

var input = "abcddcba";
console.log("Input: ", input);
console.log("Is Palindrome: ", isPalindrome2(input, 0, input.length - 1));

var input = "abcxcba";
console.log("Input: ", input);
console.log("Is Palindrome: ", isPalindrome2(input, 0, input.length - 1));
