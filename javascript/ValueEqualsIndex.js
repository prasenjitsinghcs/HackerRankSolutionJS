var arr = [7,2,1,3,7,6,8,3,9,4,9,8,7,2,9,3,4,7,9];

function getFixedPointValue(arr) {
    for (var i = 0; i < arr.length; i++) {
        var index = i + 1;
        if (index === arr[i]) {
            console.log(index);
        }
    }
}

getFixedPointValue(arr)

