/**
 * Tower of Hanoi is a mathematical puzzle where we have three rods 
 * (A, B, and C) and N disks. Initially, all the disks are stacked in decreasing
 * value of diameter i.e., the smallest disk is placed on the top and they are 
 * on rod A. The objective of the puzzle is to move the entire stack to another 
 * rod (here considered C), obeying the following simple rules: 
 * 
 * 1. Only one disk can be moved at a time.
 * 2. Each move consists of taking the upper disk from one of the stacks and 
 *    placing it on top of another stack i.e. a disk can only be moved if it 
 *    is the uppermost disk on a stack.
 * 3. No disk may be placed on top of a smaller disk.
 * 
 * 
 * 
 * Input: 3
 * Output: 
 * Disk 1 moved from A to C
 * Disk 2 moved from A to B
 * Disk 1 moved from C to B
 * Disk 3 moved from A to C
 * Disk 1 moved from B to A
 * Disk 2 moved from B to C
 * Disk 1 moved from A to C
 * 
 */

/**
 * The idea is to use the helper node to reach the destination using recursion.
 * Below is the pattern for this problem:
 * 1. Shift ‘N-1’ disks from ‘A’ to ‘B’, using C.
 * 2. Shift last disk from ‘A’ to ‘C’.
 * 3. Shift ‘N-1’ disks from ‘B’ to ‘C’, using A.
 */

function solution(n, from, to, aux) {
    if (n === 0) {
        return;
    }

    solution(n - 1, from, aux, to);
    console.log(`Disk ${n} move from rod ${from} to rod ${to}`);
    solution(n - 1, aux, to, from);
}


let n = 3, from = 'A', to = 'C', aux = 'B';
solution(n, from, to, aux);


/**
 * Time complexity: O(2 ^ N), There are two possibilities for every disk. 
 * Therefore, 2 * 2 * 2 * . . . * 2(N times) is 2N
 * Auxiliary Space: O(N), Function call stack space
 */