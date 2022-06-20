module.exports = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    },
    div: function(a, b) {
        if (a === 0) {
            return 0;
        }
        if (b === 0) {
            return "Exception"
        }
        return a / b;
    }
}