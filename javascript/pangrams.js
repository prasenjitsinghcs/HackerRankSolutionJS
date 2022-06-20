var str = 'We promptly judged antique ivory buckles for the prize';

function pangrams(s) {
   // Write your code here
   if (s.length < 26) {
     return 'not pangrams';
   }
   
   var str = s.toLowerCase(); 
   
   var pangramString = 'abcdefghijklmnopqrstuvwxyz';
   var count = 0;
   for (var i = 0; i < pangramString.length; i++) {
     if (str.indexOf(pangramString[i]) > -1) {
       count++;
     }
   }
   if (count === 26) {
     return 'pangrams'
   } else {
     return 'not pangrams';
   }
}

console.log(pangrams(str));
