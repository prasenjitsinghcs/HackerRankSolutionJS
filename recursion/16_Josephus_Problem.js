/**
 * There are N people standing in a circle waiting to be executed. The counting 
 * out begins at some point in the circle and proceeds around the circle in a 
 * fixed direction. In each step, a certain number of people are skipped and the
 * next person is executed. The elimination proceeds around the circle (which is 
 * becoming smaller and smaller as the executed people are removed), until only 
 * the last person remains, who is given freedom. 
 * 
 * Given the total number of persons N and a number k which indicates that k-1 
 * persons are skipped and the kth person is killed in a circle. The task is to 
 * choose the person in the initial circle that survives.
 */

/**
 * Input: N = 5 and k = 2
 * Output: 3
 * Explanation: Firstly, the person at position 2 is killed, 
 * then the person at position 4 is killed, then the person at position 1 is killed. 
 * Finally, the person at position 5 is killed. So the person at position 3 survives. 
 */

/**
 * Follow the below steps to Implement the idea:
 * 1. Create a array person and push all the values from 1 to N in person
 * 2. Recursively eliminate the index element
 *    a. Erase the element on the position index
 *    b. Call for (index + k)% size of person.
 *    c. If size of person = 1, return person[i].
 */

function solve(arr, index, k) {
    if (arr.length === 1) return arr[0];

    index = (index + k) % arr.length;
    console.log(arr, `Person at index ${index} killed`);
    arr.splice(index, 1);
    return solve(arr, index, k);
}

function main(n, k) {
    console.log(`Input: n = ${n}, k = ${k}`);
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    
    const ans = solve(arr, 0, k - 1);
    console.log(`Output: ${ans}`);
}

main(5,2);

// Time Complexity: O(N^2)
// Auxiliary Space: O(N)

/**
 * @todo Implement the solution for below time and space complexity
 * Time Complexity: O(N) Space Complexity: O(N)
 * 
 * Time Complexity: O(N) Space Complexity: O(1)
 * 
 */
