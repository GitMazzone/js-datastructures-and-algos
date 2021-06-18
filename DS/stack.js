/**
 * Stack
 *    LIFO
 *    Push, pop, peek
 *    Common uses: action history for undo/redo
 * Can be implemented as array in JS.
 */

// STACK via array
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
console.log(`stack: ${stack}`);
console.log(`pop: ${stack.pop()}`);
console.log(`peek: ${stack[stack.length - 1]}`);

// STACK class
class Stack {
	constructor() {
		this.storage = {};
		this.size = 0;
	}

	push(item) {
		this.size++;
		this.storage[this.size] = item;
	}

	pop() {
		const popped = this.storage[this.size];

		delete this.storage[this.size];
		this.size--;

		return popped;
	}

	peek() {
		return this.storage[this.size];
	}
}

const homegrownStack = new Stack();
homegrownStack.push('dog');
homegrownStack.push('cat');
homegrownStack.push('blyat');
console.log(homegrownStack);
console.log(`popped: ${homegrownStack.pop()}`);
console.log(`peeked: ${homegrownStack.peek()}`);
console.log(`stack size: ${homegrownStack.size}`);
