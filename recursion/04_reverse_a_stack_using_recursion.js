/**
 * Write a program to reverse a stack using recursion, 
 * without using any loop.
 * 
 * Input: elements present in stack from top to bottom 
 *  | 1 |
 *  | 2 |
 *  | 3 |
 *  | 4 |
 *  |---| 
 * 
 * Output: 
 *  | 4 |
 *  | 3 |
 *  | 2 |
 *  | 1 |
 *  |---| 
 */

//            bottom     top
const stack = [4, 3, 2, 1];

function reverse(stack) {
    if (stack.length === 0) {
        return;
    }

    const item = stack.pop();
    reverse(stack);
    insertAtBottom(stack, item);
}

function insertAtBottom(stack, item) {
    if (stack.length === 0) {
        stack.push(item);
        return;
    }

    const a = stack.pop();
    insertAtBottom(stack, item);
    stack.push(a);
}

console.log(`Input: ${stack}`)
reverse(stack);
console.log(`Output: ${stack}`)

/**
 * Time Complexity: O(N ^ 2). 
 * Auxiliary Space: O(N) use of Stack
 */