class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirst(data) {
        var node = new Node(data);
        if (this.head === null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size = this.size + 1;
    }

    addLast(data) {
        var node = new Node(data);
        if (this.head === null) {
            this.head = node;
        } else {
            var nextNode = this.head;
            while (nextNode.next !== null) {
                nextNode = nextNode.next;
            }
            nextNode.next = node;
        }
        this.size = this.size + 1;
    }

    displayList() {
        if (this.head === null) {
            console.log('List is empty');
            return;
        }
        var nextNode = this.head;
        var str = '';
        while(nextNode !== null) {
            str += nextNode.data + " -> ";
            nextNode = nextNode.next;
        }
        console.log(str + "NULL");
    }

    deleteFirst() {
        if (this.head === null) {
            console.log('List is empty');
            return;
        }
        this.head = this.head.next;
        this.size = this.size - 1;
    }

    deleteLast() {
        if (this.head === null) {
            console.log('List is empty');
            return;
        }
        this.size = this.size - 1;
        if (this.head.next === null) {
            this.head = null;
            return;
        }

        var currentNode = this.head;
        var nextNode = currentNode.next;
        while(nextNode.next !== null) {
            // console.log(nextNode.data);
            currentNode = nextNode;
            nextNode = nextNode.next;
        }

        currentNode.next = null;

    }

    reverse() {
        if (this.head === null) {
            console.log('List is empty');
            return;
        }
        var previousNode = null;
        var currentNode  = this.head;
        var nextNode     = currentNode.next;

        while(currentNode != null) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode  = nextNode;
        }
        this.head = previousNode;
    }

    getSize() {
        console.log('size = ' + this.size);
        return this.size;
    }
}

var list = new LinkedList();

var items = [];

items.forEach(item => list.addFirst(item));
list.displayList();
console.log('Reverse Linked List');
list.reverse();
list.displayList();



