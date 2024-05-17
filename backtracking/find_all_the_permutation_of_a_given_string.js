var str = "ABC";

console.log("Solution with Backtracking (swap)");
permute(str, 0);

/**
 * Solution with Backtracking and Swapping 
 * @param {*} str 
 * @param {*} index 
 * @returns 
 */
function permute(str, index) {
    if (index === str.length) {
        console.log(str);
        return;
    } else {
        for (let i = index; i < str.length; i++) {
            str = swap(str, index, i);
            permute(str, index + 1);
            // str = swap(str, index, i);
        }
    }
}

function swap(str, left, right) {
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

function getAnagram(str, out) {
    if(str.length === 0) {
        console.log(out);
        return;
    }
    for(let i = 0; i < str.length; i++) {
        var input = str.substr(0, i) + str.substr(i+1);
        var output = out + str[i];
        getAnagram(input, output);
    }
}
console.log("Solution normal input/output");
getAnagram(str, "");












