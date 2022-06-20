function stones(n, a, b) {
    // Write your code here
    if (a > b) {
        var temp = a;
        a = b;
        b = temp;
    }

    var diff = b - a;
    var firstVal = a * (n - 1);
    var result = [firstVal];

    if (diff === 0) {
        return result;
    }

    for (var i = 1; i < n; i++) {
        result.push(firstVal + i * diff);
    }

    return result;
}

var n = 4;
var a = 10;
var b = 100;
console.log(stones(n, a, b));
