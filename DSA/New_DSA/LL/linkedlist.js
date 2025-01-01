class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    printList() {
        let current = this.head;
        let listValues = [];

        while (current) {
            listValues.push(current.data); // Collect data of each node
            current = current.next; // Move to the next node
        }

        console.log(listValues.join(" -> ")); // Print the list in readable format
    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

list.printList();
