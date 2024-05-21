/**
 * The task is to delete the middle element of Stack without using any 
 * additional data structure.
 */

/**
 * Input  : Stack[] = [1, 2, 3, 4, 5]
 * Output : Stack[] = [1, 2, 4, 5]
 * 
 * Input  : Stack[] = [1, 2, 3, 4, 5, 6]
 * Output : Stack[] = [1, 2, 4, 5, 6]
 */
var stack = [1, 2, 3, 4, 5];

function deleteMiddleElement(stack) {
    if (stack.length === 0) {
        return stack;
    } 
    var k = getMidIndex(stack.length);
    solve(stack, k);
    return stack;
}

function solve(stack, k) {
    if (k === 1) {
        stack.pop();
        return;
    }

    var top = stack.pop();
    solve(stack, k - 1);
    stack.push(top);
}

function getMidIndex(n) {
    return parseInt(n / 2) + 1;
}

console.log(`Delete Middle Element:`)
console.log(`Input: [${stack}]`);
deleteMiddleElement(stack);
console.log(`Output: [${stack}]`);

/**
 * Time Complexity: O(N), For the recursive calls
 * Auxiliary Space: O(N), For the Recursion call Stack
 */
