function reverse(arr, low, high) {
    while(low < high) {
      var temp = arr[low];
      arr[low] = arr[high];
      arr[high] = temp;
      low++;
      high--;
    }
  }
  
  function rotate(arr, k) {
    k = k % arr.length;
    if (k === 0) {
      return arr;
    }
    var low = 0;
    var high = arr.length - 1;
  
    reverse(arr, low, high);
    reverse(arr, low, k - 1);
    reverse(arr, k, high);
    return arr;
  }
  
  
  var arr = [1,2,3,4,5];
  var k = 3;
  console.log(arr);
  console.log("output")
  console.log(rotate(arr, k));