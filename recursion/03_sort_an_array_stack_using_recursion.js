/**
 * Given a stack, the task is to sort it using recursion.
 * 
 * Input: elements present in stack from bottom to top -3 14 18 -5 30
 * Output: -5 -3 14 18 30
 */

const stack = [-3, 14, 18, -5, 30];

function sortStack(stack) {
    if (stack.length === 0) {
        return;
    }

    const item = stack.pop();
    sortStack(stack);
    insert(stack, item);
}

function insert(stack, item) {
    if (stack.length === 0 || stack[stack.length - 1] <= item) {
        stack.push(item);
        return;
    }
    
    const a = stack.pop();
    insert(stack, item);
    stack.push(a);
}

console.log(`Input: ${stack}`)
sortStack(stack);
console.log(`Output: ${stack}`)

/**
 * Time Complexity: O(N ^ 2). 
 * Auxiliary Space: O(N) use of Stack
 */