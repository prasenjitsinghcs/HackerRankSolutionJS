function isPrime(num) {
  for(var i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function validatePalin(num) {  
  
    var str = num.toString();
    // get the total length of the words  
    var len = str.length;  
  
    // Use for loop to divide the words into 2 half  
    for (var i = 0; i < len / 2; i++) {  
  
        // validate the first and last characters are same  
        if (str[i] !== str[len - 1 - i]) {  
            return false;  
        }  
    }  
    return true;  
}  

var num = 1;
var count = 0;
while (num <= Number.MAX_SAFE_INTEGER) {
  var decimal = parseInt(num, 2);
  if (isBinaryNumber(num) && isPrime(num) && validatePalin(num)) {
    console.log(`num => ${num}, decimal => ${decimal}`);
  }
  num++;
}

function isBinaryNumber(num) {
  var str = num.toString();
  var strArr = [... new Set(str.split(''))];
  if (strArr.length <= 2 && (strArr[0] == '0' || strArr[0] == '1') && (strArr[1] == '0' || strArr[1] == '1')) {
    return true;
  } else {
    return false;
  }
}


