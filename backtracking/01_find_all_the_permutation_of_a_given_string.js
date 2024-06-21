/**
 * Given a string str, the task is to write a program to print all permutations
 * of a given string. 
 */

/**
 * Input: str = “ABC”
 * Output: “ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”
 * 
 * Input: str = “XY”
 * Output: “XY”, “YX”
 */


class Anagram {
    static main() {
        var str = "ABC";
        console.log(`Solution using Backtracking`);
        console.log(`Input: ${str}`);
        Anagram.solution(str, 0);

        console.log(`\nSolution without Backtracking`);
        console.log(`Input: ${str}`);
        Anagram.getAnagram(str, "");
    }

    /**
     * Solution with Backtracking and Swapping 
     * @param {*} str 
     * @param {*} index 
     * @returns 
     */
    static solution(str, index) {
        if (index === str.length) {
            console.log(str);
            return;
        } else {
            for (let i = index; i < str.length; i++) {
                str = Anagram.swap(str, index, i);
                Anagram.solution(str, index + 1);
                // str = this.swap(str, index, i);
            }
        }
    }

    static swap(str, left, right) {
        var strArr = str.split("");
        let temp = strArr[left];
        strArr[left] = strArr[right];
        strArr[right] = temp;
        str = strArr.join("");
        return str;
    }

    /**
     * Solution without back tracking 
     * @param {*} str 
     * @param {*} out 
     * @returns 
     */
    static getAnagram(str, out) {
        if(str.length === 0) {
            console.log(out);
            return;
        }
        for(let i = 0; i < str.length; i++) {
            var input = str.substr(0, i) + str.substr(i+1);
            var output = out + str[i];
            Anagram.getAnagram(input, output);
        }
    }
}

Anagram.main();

/**
 * Time Complexity: O(N * N!) Note that there are N! permutations and it 
 * requires O(N) time to print a permutation.
 * 
 * Auxiliary Space: O(R – L)
 */












