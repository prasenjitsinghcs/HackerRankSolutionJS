/**
 * Print all the duplicates in the input string
 */

/**
 * Implementation:
 * 
 * 1. Traverse the string from left to right and push the character as key and count as its value in map
 * 2. Print the map element which have count > 1
 * 
 * Time Complexity: O(N), where N = length of the string passed and it generally takes O(log(N)) time for an element insertion in a map. 
 * Space Complexity: O(K), where K = size of the map
 */

function duplicates(str) {
    var map = {};
    var i = 0;
    while (i < str.length) {
        if (map[str[i]]) {
            map[str[i]] = map[str[i]] + 1
        } else {
            map[str[i]] = 1;
        }
        i++;
    }

    var keys = Object.keys(map);

    // Print the dulicate charcters count
    keys.forEach(key => {
        if (map[key] > 1)
            console.log(`${key} => count - ${map[key]}`);
    })
}


var input = 'prasenjitsinghcs';
console.log("Input: ", input);
console.log("Output: ");
duplicates(input);