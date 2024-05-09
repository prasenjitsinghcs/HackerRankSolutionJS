/**
 * Josephus Problem
 * GAME OF DEATCH
 */

var n = 40;
var k = 7;
var index = 0;

var arr = [];

for (var i = 0; i < n; i++) {
    arr.push(i + 1);
}

k--;
console.log(solution(arr, index, k));

function solution(arr, index, k) {
    if (arr.length === 1) {
        return arr[0];
    }

    index = (index + k) % arr.length;
    arr.splice(index, 1);

    return solution(arr, index, k)
}