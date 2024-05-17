/**
 * Given a number N, we need to print numbers from 1 to N using recursion
 */

/**
 * Input  : 10
 * Output : 1 2 3 4 5 6 7 8 9 10
 */

var n = 10;

function printNumber1ToN(n) {
    // Base condition
    if (n === 0) {
        return;
    }

    printNumber1ToN(n - 1);
    
    console.log(n);
}

console.log(`\nPrint number from 1 to ${n}`);
printNumber1ToN(n);


/**
 * Given a number N, we need to print numbers from N to 1 using recursion
 */

/**
 * Input  : 10
 * Output : 10 9 8 7 6 5 4 3 2 1
 */

var n = 10;

function printNumberNto1(n) {
    // Base condition
    if (n === 0) {
        return;
    }

    console.log(n);

    printNumberNto1(n - 1);
    
}

console.log(`\nPrint number from ${n} to 1`);
printNumberNto1(n);