var arr = [6,3,0,1,0,4,4,7,8,0,9,8,7,0,6,3,4,4,6,5]; 

function getKthMax(arr, k) {
  var kth;
  for(var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
       if (arr[j+1] < arr[j]) {
         var temp = arr[j];
         arr[j] = arr[j+1];
         arr[j+1] = temp;
       }
    }
    if (i + 1 === k) {
      console.log(arr)
      return arr[arr.length - i - 1]
    }
  }
}

console.log(getKthMax(arr, 4));
