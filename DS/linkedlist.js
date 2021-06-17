/**
 * Singly linked list has a head and tail
 *    tail.next null
 * Doubly linked list just adds a link to previous node to traverse backwards
 *    head.prev = null
 *    tail.next = null
 * Good for
 *    Used in hashtables/maps
 *    Sequential access
 *    Insert/removing elements -- much faster than array b/c no shifting needed
 *    Volatile datasets where lots of insert/remove
 * Not good
 *    Sequential access, rather than direct like with array
 */

class DoublyLinkedList {
	constructor() {
		this.head = this.tail = null;
	}

	append(value) {
		if (!this.tail) {
			this.head = this.tail = new Node(value); // List was empty
		} else {
			const oldTail = this.tail;

			this.tail = new Node(value);
			this.tail.prev = oldTail;
			oldTail.next = this.tail;
		}
	}

	prepend(value) {
		if (!this.head) {
			this.head = this.tail = new Node(value);
		} else {
			const oldHead = this.head;

			this.head = new Node(value);
			this.head.next = oldHead;
			oldHead.prev = this.head;
		}
	}

	deleteHead() {
		if (this.head) {
			if (this.head === this.tail) {
				// Only 1 node left
				this.head = this.tail = null;
			} else {
				this.head = this.head.next;
				this.head.prev = null;
			}
		}
	}

	deleteTail() {
		if (this.tail) {
			if (this.head === this.tail) {
				this.head = this.tail = null;
			} else {
				this.tail = this.tail.prev;
				this.tail.next = null;
			}
		}
	}

	contains(value) {
		let node = this.head;

		while (node) {
			if (node.value === value) return true;
			node = node.next;
		}

		return false;
	}

	print() {
		if (!this.head) {
			console.log('\tEmpty list.\n');
			return;
		}

		let node = this.head;
		let listAsString = '';

		if (node) {
			listAsString += `\tnull <-- HEAD: ${node.value} `;
			node = node.next;
		}

		while (node !== this.tail) {
			listAsString += `<--> ${node.value} `;
			node = node.next;
		}

		listAsString += `<--> TAIL: ${node.value} --> null`;

		console.log('\n', listAsString, '\n');
	}

	values() {
		let node = this.head;
		let values = [];

		while (node) {
			values.push(node.value);

			node = node.next;
		}

		return values;
	}
}

class Node {
	constructor(value, prev, next) {
		this.value = value;
		this.prev = prev || null;
		this.next = next || null;
	}
}

let dll = new DoublyLinkedList();
dll.append(2);
dll.append(3);
dll.append(4);
dll.append(5);
dll.append(6);
dll.print();
dll.prepend(1);
dll.deleteTail();
dll.print();
dll.deleteHead();
dll.print();
console.log(`dll contains 3: ${dll.contains(3)}`);
console.log(`dll contains 7: ${dll.contains(7)}`);

// Testing deletion on empty lists
let dll2 = new DoublyLinkedList();
dll2.append(1);
console.log(dll2.head);
dll2.deleteHead();
dll2.deleteHead();
dll2.deleteTail();
dll2.append(29);
dll2.prepend(0);
dll2.print();
dll2.deleteTail();
dll2.deleteTail();
dll2.print();
