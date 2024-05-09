const path = require("path");
function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  console.log(arguments.callee.name);
  return arr;
}

function main() {
  console.log(path.basename(__filename));
  console.log(arguments.callee.name);
  var arr = [5,9,3,8,7,2,1,6,4,0];
  console.log(bubbleSort(arr));
}

main();
