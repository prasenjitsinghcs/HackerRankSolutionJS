function checkSubSet(arr, sum) {
    var n = arr.length + 1;
    var wt = sum + 1;
  
    var t = Array.from(Array(n + 1), () => new Array(wt + 1).fill(0))

    for (var i = 0; i <= n; i++) {
      for (var j = 0; j <= wt; j++) {
        if (i == 0) {
          t[0][j] = 0;
        }
        
        if (j == 0) {
          t[i][0] = 1;
        }
      }
    }

    console.log(t);
  
    for (var i = 1; i <= n; i++) {
       for (var j = 1; j <= wt; j++) {
         if (arr[i - 1] <= j) {
           t[i][j] = t[i - 1][j] + t[i - 1][j - arr[i - 1]]
         } else {
           t[i][j] = t[i - 1][j]
         }
       }
    }

    return t[n][wt];
}

var arr = [1,2,5,7,4];
var target = 8;

console.log(checkSubSet(arr, target));
