/**
 * Given a word and a text, return the count of the occurrences of anagrams of 
 * the word in the text(For eg: anagrams of word for are for, ofr, rof etc.))
 */

/**
    Input : text -> "forxxorfxdofr" word -> "for"
    Output : 3
    Explanation : Anagrams of the word "for" – "for", "orf", "ofr" appear in 
    the text and hence the count is 3.
 */

let text = "forxxorfxdofr", word = "for";
// let text = "aaabccbbacba", word = "abc";

/**
 * Approach 1: Brute Force
 */

function countAnagrams(text, word) {
    let wordMap = {};
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (wordMap[word[i]] !== undefined) {
            wordMap[word[i]] = wordMap[word[i]] + 1;
        } else {
            wordMap[word[i]] = 1;
        }
    }

    for (let i = 0; i < text.length - word.length + 1; i++) {
        let substrMap = {};
        for (let j = i; j < i + word.length; j++) {
            if (substrMap[text[j]] !== undefined) {
                substrMap[text[j]] = substrMap[text[j]] + 1;
            } else {
                substrMap[text[j]] = 1;
            }
        }

        if (compareMap(wordMap, substrMap)) {
            count++;
        }

    }

    return count;
}

function compareMap(wordMap, substrMap) {
    const keys = Object.keys(wordMap);

    for (let key of keys) {
        if (wordMap[key] !== substrMap[key]) {
            return false;
        }
    }
    return true;
}

console.log(`Brute Force Approach: `)
console.log(`Input: text -> "${text}", word -> "${word}" `);
var count = countAnagrams(text, word);
console.log(`Output: count -> ${count}`); 

/**
    Brute Force Approach: 
    Input: text -> "forxxorfxdofr", word -> "for" 
    Output: count -> 3

 */

/**
 * Time Complexity: O(N * K * K)
 * Space Compexity: O(K)
 */

/**
 * Approach 2: Sliding Window Approach
 */

function countAnagramsSlidingWindow(text, word) {
    let i = 0, j = 0, k = word.length, map = {}, count = 0;
    let total = 0;
    for (let char of word) {
        if (map[char] !== undefined) {
            map[char] = map[char] + 1;
        } else {
            map[char] = 1;
        }
    }

    count = Object.keys(map).length;

    while(j < k) {
        if (map[text[j]] != undefined) {
            map[text[j]] = map[text[j]] - 1;
        }
        if (map[text[j]] === 0) {
            count--;
        }
        j++;
    }

    if (count === 0) {
        console.log(text.substr(i, k));
        total++;
    }

    while(j < text.length) {
        if (map[text[j]] != undefined) {
            map[text[j]] = map[text[j]] - 1;
        }
        if (map[text[j]] === 0) {
            count--;
        }

        if (map[text[i]] !== undefined) {
            map[text[i]] = map[text[i]] + 1;
        }

        if (map[text[i]] > 0) {
            count++;
        }

        if (count === 0) {
            console.log(text.substr(i + 1, k));
            total++;
        }
        i++;
        j++;
    }

    return total;

}

console.log(`\n\nSliding Window Approach: `)
console.log(`Input: text -> "${text}", word -> "${word}" `);
var count = countAnagramsSlidingWindow(text, word);
console.log(`Output: count -> ${count}`); 

/**
 *  Sliding Window Approach: 
    Input: text -> "forxxorfxdofr", word -> "for" 
    for, orf, ofr
    Output: count -> 3
 */

/**
 * Time Complexity: O(N)
 * Space Complexity: O(K)
 */