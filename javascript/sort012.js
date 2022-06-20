var arr = [0,1,2,0,1,2,0,1,0,1,0,1]

function sort012(arr) {
  var mid = 0;
  var low = 0;
  var high = arr.length - 1;

  console.log(high);

  while (mid <= high) {
    if (arr[mid] === 0) {
      console.log('arr[mid] === 0')
      swap(arr, low, mid);
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      console.log('arr[mid] === 1')
      mid++;
    } else {
      console.log('else');
      swap(arr, mid, high);
      high--;
    }
  } 
  return arr;
}

function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

console.log(sort012(arr))
