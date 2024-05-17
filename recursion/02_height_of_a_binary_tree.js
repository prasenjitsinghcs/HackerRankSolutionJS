/**
 * Given a binary tree, the task is to find the height of the tree. 
 * The height of the tree is the number of vertices in the tree from the root 
 * to the deepest node. 
 * 
 * 
 *                       1
 *                     /   \ 
 *                    2     3 
 *                   /  \
 *                  4    5
 * 
 */

function Node(item) {
    this.data = item;
    this.left = null;
    this.right = null;
}

/**
 * Generating three mentioned above
 */
const one   = new Node(1);
const two   = new Node(2);
const three = new Node(3);
const four  = new Node(4);
const five  = new Node(5);

let root = one;

root.left = two;
root.right = three;

two.left = four;
two.right = five;


function getBinaryTreeLength(node) {
    // Base condition - height of empty tree is 0
    if (node === null) {
        return 0;
    }

    // height of left sub tree
    const left = getBinaryTreeLength(node.left);

    // height of right sub tree
    const right = getBinaryTreeLength(node.right);

    return 1 + Math.max(left, right);
}

const height = getBinaryTreeLength(root);
console.log(`Height of Binary Tree is ${height}`)

/**
 * Height of Binary Tree is 3
 */


/**
 * Time Complexity: O(N)
 * Auxiliary Space: O(N) due to recursive stack
 */