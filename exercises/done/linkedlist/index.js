// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;

        while (node) {
            if (node.next === null) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return null;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while(node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        let last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next; 
        }
        return null;
    }

    removeAt(index) {
        let node = this.head;
        let pos = this.getAt(index);
        let prev = this.getAt(index - 1);

        if (!node || index > this.size()) {
            return null;
        } else {
            if (index === 0) {
                this.removeFirst();
            } else if (index === this.size() - 1) {
                this.removeLast();
            } else if (index < this.size() - 1) {
                prev.next = pos.next;
            }
        }
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        let prev = this.getAt(index - 1) || this.getLast();
        let node = new Node(data, prev.next);
        prev.next = node;
    }

    forEach(fn) {
        let counter = 0;
        let node = this.head;

        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }

}

module.exports = { Node, LinkedList };
