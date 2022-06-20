function weightedUniformStrings(s, queries) {
    // Write your code here
    var str = s.toLowerCase().split('');
    var b = [];
    var count = 1; 
    for (var i = 0; i < str.length; i++) {
      var charCode = str[i].charCodeAt(0) - 96;
      b.push(count * charCode);
      if (str[i] == str[i+1]) {
        count++;
      } else {
        count = 1;
      }
    }
  
    var output = q.map(ele => {
      if (b.find(item => item === ele)) {
        return 'Yes'
      } else {
        return 'No';
      }
    })
  
    return output;
}




var s = 'aaabbbbcccddd';
var q = [9, 7, 8, 12, 5];

console.log(weightedUniformStrings(s, q));
