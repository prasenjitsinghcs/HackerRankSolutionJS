// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    var xdis = Math.abs(z - x);
    var ydis = Math.abs(z - y);

    if (xdis === ydis) {
        return 'Mouse C';
    }

    if (xdis < ydis) {
        return 'Cat A';
    } else {
        return 'Cat B';
    }
}

var x = 1;
var y = 3;
var z = 2;
console.log(catAndMouse(x, y, z));