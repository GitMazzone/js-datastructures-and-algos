/**
 * Queue
 *    FIFO
 *    Enqueue, dequeue
 *    Common uses: print jobs
 * Can be implemented as array in JS.
 */

// QUEUE via array
const arrQueue = [];
arrQueue.push(1);
arrQueue.push(2);
arrQueue.push(3);
console.log(`queue: ${arrQueue}`);
console.log(`dequeue: ${arrQueue.shift()}`);
console.log(`queue: ${arrQueue}`);

class Queue {
	constructor() {
		this.storage = {};
		this.head = 0;
		this.tail = 0;
	}

	enqueue(item) {
		this.storage[this.tail] = item;
		this.tail++;
	}

	dequeue() {
		const dequeued = this.storage[this.head];

		delete this.storage[this.head];
		this.head++;

		return dequeued;
	}
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
console.log(`dequeued: ${queue.dequeue()}`);
console.log(queue);
console.log(`dequeued: ${queue.dequeue()}`);
console.log(queue);
