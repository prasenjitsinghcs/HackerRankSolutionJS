function getTotalX(a, b) {
    // Write your code here
    var max = Math.max(...a);
    var min = Math.min(...b);

    var count = 0;

    for (var num = max; num <= min; num++) {
        var isMuliFactor = true;
        a.forEach((ele) =>{
            if (num % ele !== 0) {
                isMuliFactor = false;
            }
        })

        b.forEach((ele) =>{
            if (ele % num !== 0) {
                isMuliFactor = false;
            }
        })

        if (isMuliFactor) 
           count++;
    }

    return count;
}

var a = [2, 4];
var b = [16, 32, 96];

console.log(getTotalX(a, b));