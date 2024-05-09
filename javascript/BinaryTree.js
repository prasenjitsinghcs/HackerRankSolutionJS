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

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;
c.right = g;

d.left = h;
d.right = i;

/**
 *                   a
 *                 /   \
 *                b     c
 *              /  \   /  \
 *             d    e f    g
 *           /  \
 *          h    i 
 */
console.log("Level order traversal: ");
levelOrderTraversal(a);

console.log("Level Count: ");
countLevels(a)

function levelOrderTraversal(start) {
    const queue = [start];

    while (queue.length > 0) {
        var current = queue.shift();
        if (!current) {
            break;
        }
        console.log(current.data);

        if (current.left) {
            queue.push(current.left)
        }

        if (current.right) {
            queue.push(current.right)
        }
        
    };

    return "done";
}
