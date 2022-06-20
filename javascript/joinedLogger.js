function joinedLogger(level, sep) {
    // write your code here
    return function (arg) {
        var textArray = [];
        for (var i = 0; i < arg.length; i++) {
            var msg = arg[i];
            
            if (msg.level >= level) {
                textArray.push(msg.text);
            }
        }
         textArray.join(sep);
    }
}

var a = joinedLogger(15, ';');

var msg1 = {level: 10, text: 'foo'};
var msg2 = {level: 20, text: 'bar'};
var msg3 = {level: 30, text: 'baz'};

console.log(a([msg1, msg2, msg3]));