var n = 4;
var open = n;
var close = n;
var ans = [];
var str = "";

solution(open, close, str, ans);
console.log(ans);

function solution(open, close, str, ans) {
    if (open === 0 && close === 0) {
        ans.push(str);
        return;
    }

    if (open != 0) {
        var str1 = str;
        str1 = str1 + "(";
        solution(open - 1, close, str1, ans);
    }

    if (close > open) {
        var str2 = str;
        str2 = str2 + ")";
        solution(open, close - 1, str2, ans);
    }
}
