function arrayManupulation(n, queries) {
    // Write your code here

    var arr = new Array(n).fill(0);
    for (var i = 0; i < queries.length; i++) {
        let [a, b, k] = queries[i];
        a--;
        b--;
        arr[a] = arr[a] + k;
        if (b < n) {
            arr[b + 1] = arr[b + 1] - k;
        }
    }

    var max = arr[0];

    for (i = 1; i < n; i++) {
        arr[i] = arr[i] + arr[i - 1];
        max = Math.max(max, arr[i]);
    }

    return max;
}

var n = 10;
var queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];

console.log(arrayManupulation(n, queries));