class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');
var h = new Node('h');
var i = new Node('i');

a.left  = b;
a.right = c;

b.left  = d;

c.left  = e;
c.right = f;

e.left  = g;
e.right = h;

f.left  = i;

/**
 *                a
 *               / \
 *              b    c
 *             /   /   \ 
 *            d   e     f
 *               / \   /
 *              g   h  i  
 * 
 * 
 */            

console.log("Inorder Traversal: ")
inOrderTraversal(a);

console.log("Pre order Traversal: ")
preOrderTraversal(a);

console.log("Post order Traversal: ")
postOrderTraversal(a);

console.log("Height of a binary tree: ")
console.log(maxHeightOfTree(a));

console.log("Print right view of a binary tree: ");

var max_level = 0
console.log(printRightView(a, 1));

function inOrderTraversal(node) {
    if (!node) {
        return;
    }    
    
    inOrderTraversal(node.left);

    console.log(node.data);

    inOrderTraversal(node.right);
}

function preOrderTraversal(node) {
    if (!node) {
        return;
    }    

    console.log(node.data);
    
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
}

function postOrderTraversal(node) {
    if (!node) {
        return;
    }    

    postOrderTraversal(node.left);
    postOrderTraversal(node.right);

    console.log(node.data);
}

function maxHeightOfTree(node) {
    if (!node) {
        return 0;
    }

    if (!node.left) {
        return 1;
    }

    if (!node.right) {
        return 1;
    }

    return Math.max(maxHeightOfTree(node.left), maxHeightOfTree(node.right)) + 1;
}

function printRightView(node, level) {
    if (!node) {
        return;
    }    

    if (max_level < level) {
        console.log(node.data);
        max_level = level;
    }

    printRightView(node.right, level + 1);
    printRightView(node.left, level + 1);
}
