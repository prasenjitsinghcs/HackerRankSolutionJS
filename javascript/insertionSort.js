var arr = [1,5,7,4,8,9,6,0,3,2];

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var key = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j];
      --j;
    }
    arr[j+1] = key; 
  }
  return arr;
}

console.log(insertionSort(arr));
