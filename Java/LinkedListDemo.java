class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    static Node head = null;
    static int size = 0;

    public static void addFirst(int data) {
        Node node = new Node(data);
        if (head == null) {
            head = node;
        } else {
            node.next = head;
            head = node;
        }
        size = size + 1;
    }

    public static void addLast(int data) {
        Node node = new Node(data);
        size = size + 1;
        if (head == null) {
            head = node;
            return;
        }
        Node currentNode = head;
        while(currentNode.next != null) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }

    public static void displayList() {
        if (head == null) {
            System.out.println("List is Empty");
            return;
        }
        Node currNode = head;
        String s = "";
        while (currNode != null) {
            s += currNode.data + " -> ";
            currNode = currNode.next;
        }
        System.out.println(s + "null");
    }

    public static void deleteFirst() {
        if (head == null) {
            System.out.println("List is Empty");
            return;
        }
        head = head.next;
        size = size - 1;
    }

    public static void deleteLast() {
        if (head == null) {
            System.out.println("List is Empty");
            return;
        }
        size = size - 1;
        if (head.next == null) {
            head = null;
            return;
        }

        Node currentNode = head;
        Node nextNode = currentNode.next;
        while(nextNode.next != null) {
            currentNode = nextNode;
            nextNode = nextNode.next;
        }
        currentNode.next = null;
    }

    public static void reverseList() {
        if (head == null) {
            System.out.println("List is Empty");
            return;
        }
        System.out.println("Reverse Linked List");
        Node previousNode = null;
        Node currentNode = head;
        Node nextNode = currentNode.next;

        while(currentNode != null) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        head = previousNode;
    }

    public static void addNumberOne() {
        if (head == null) {
            System.out.println("List is Empty");
            return;
        }
        LinkedList.reverseList();

        Node currentNode = head;
        currentNode.data +=1;
        int carry = 0;
        while(currentNode.next != null) {
            if (currentNode.data + carry == 10) {
                carry = 1;
                currentNode.data = 0;
            } else {
                currentNode.data = currentNode.data + carry;
                carry = 0;
            }
            currentNode = currentNode.next;
        }
        LinkedList.reverseList();
    }

    public static void removeDuplicate() {
        System.out.println("Removing duplicate elememts from List");

        if (head == null) {
            System.out.println("List is Empty");
            return;
        }
        Node currentNode = head;
        Node nextNode    = currentNode.next;

        while(nextNode != null) {
            if (currentNode.data == nextNode.data) {
                currentNode.next = nextNode.next;
                nextNode = nextNode.next;
                size--;
            } else {
                currentNode = nextNode;
                nextNode = nextNode.next;
            }
        }
    }

    public static void rotateLinkedList(int k) {
        System.out.printf("Rotate Linked List by %d position to right\n", k);
        if (head == null) {
            System.out.println("List is Empty");
            return;
        }

        k = k % size;

        if (k == 0) {
            return;
        }

        Node kthNode = head;

        while(k > 1) {
            kthNode = kthNode.next;
            k--;
        }

        Node currNode = head;

        while(currNode.next != null) {
            currNode = currNode.next;
        }
        currNode.next = head;

        head = kthNode.next;
        kthNode.next = null;  
    }
}

class TestList {
    public static void main(String[] args) {
        LinkedList.addLast(1);
        LinkedList.addLast(2);
        LinkedList.addLast(2);
        LinkedList.addLast(9);
        LinkedList.addLast(9);
        LinkedList.addLast(10);
        LinkedList.displayList();

        // Removing duplicate from list
        LinkedList.removeDuplicate();
        LinkedList.displayList();

        // Rotating Linked List by 2 positon clock wise

        LinkedList.rotateLinkedList(2);
        LinkedList.displayList();
    }
}
