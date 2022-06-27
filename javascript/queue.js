class Queue {
    constructor(size) {
        this.queue = new Array(size).fill(null);
        this.size = size;
        this.rear = - 1;
    }

    isEmpty() {
        return this.rear == -1;
    }

    add(data) {
        if (this.rear == this.size - 1) {
            console.log('queue full')
            return;
        }

        this.rear++;
        this.queue[this.rear] = data;
    }

    remove() {
        if (this.isEmpty()) {
            console.log('queue is empty');
            return;
        }

        if (this.rear === 0) {
            this.rear--;
            return this.queue[0];
        }

        var frontItem = this.queue[0];
        for (var i = 0; i < this.rear; i++) {
            this.queue[i] = this.queue[i+1];
        }
        this.rear--;
        console.log('removed -> ' + frontItem);
        return frontItem;
    }

    peek() {
        if (this.isEmpty()) {
            console.log('queue is empty');
            return;
        }
        console.log('peek -> ' + this.queue[0]);
        return this.queue[0];
    }

    display() {
        if (this.isEmpty()) {
            console.log('queue is empty');
            return;
        }

        for (var i = 0; i <= this.rear; i++) {
            console.log(this.queue[i]);
        }
    }

}

var queue = new Queue(5);

queue.display();
