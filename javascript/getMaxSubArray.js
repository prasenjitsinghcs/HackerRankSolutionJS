var arr = [6,3,10,1,10,14,4,1,8,0,9,5,0,5,7,0,9,5,8,2];

function getMaxSubArr(arr, len) {
  var start = 0;
  var end   = len - 1;
  
  var i = 0;
  var max = 0;
  while (i <= end) {
    max = max + arr[i];
    i++;
  }
  
  var sum = max;
  
  var st  = start;
  var ed  = end;
  
  while (end < arr.length) {
    start++;
    end++;
    sum = sum - arr[start - 1] + arr[end]

    if (sum > max) {
      max = sum;
      st = start;
      ed = end;
    }
    
  }
  
  while(st <= ed) {
    console.log(arr[st++]);
  }
  
}

getMaxSubArr(arr, 3)
