'use strict'
function alternate(s) {
    // Write your code here
    const str = s.split('');
    const arr = [... new Set(str)];

    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const char1 = arr[i];
            const char2 = arr[j];
            const newStr = str.filter(item => item == char1 || item == char2);
            if (valid(newStr)) {
                max = Math.max(max, newStr.length);
            }
        }
    }
    return max;
}

function valid(str) {
    let index = 0;

    const char1 = str[0];
    const char2 = str[1];

    while(index < str.length) {
        if (index % 2 === 0 && str[index] !== char1) {
            return false;
        }

        if (index % 2 === 1 && str[index] !== char2) {
            return false;
        }
        index++;
    }
    return true;
}

var num = alternate('asdcbsdcagfsdbgdfanfghbsfdab')
console.log(num);