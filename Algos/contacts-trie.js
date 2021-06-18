/**
 * Problem: Create a simple contacts class that stores string names (a-z only)
 *          and finds how many contacts start with a string provided.
 */

class Node {
	constructor() {
		this.children = {};
		this.nameCount = 0;
		this.isName = false;
	}
}
class Contacts {
	constructor() {
		this.root = new Node();
	}

	add(name) {
		let node = this.root;
		node.nameCount++; // Always increment root, assuming no dups

		for (let char of name) {
			if (!node.children[char]) node.children[char] = new Node();

			node = node.children[char];
			node.nameCount++;
		}

		node.isName = true;
	}

	// Returns number of contacts that start with a prefix
	startsWith(prefix) {
		if (!this.root.children[prefix[0]]) return 0;

		let node = this.root;

		// return length of keys found at last node in prefix + 1 for current node
		// traverse to last node in prefix
		for (let char of prefix) {
			if (node.children[char]) node = node.children[char];
		}

		return node.nameCount;
	}
}

let contacts = new Contacts();
contacts.add('mike');
contacts.add('milly');
contacts.add('milton');
contacts.add('mrbob');
contacts.add('earl');
contacts.add('edward');
contacts.add('edy');
contacts.add('eddy');
console.log(`starts with m: ${contacts.startsWith('m')}`);
console.log(`starts with mi: ${contacts.startsWith('mi')}`);
console.log(`starts with e: ${contacts.startsWith('e')}`);
console.log(`starts with ed: ${contacts.startsWith('ed')}`);
console.log(`starts with edd: ${contacts.startsWith('edd')}`);
console.log(`starts with y: ${contacts.startsWith('y')}`);
console.log(`starts with ' ': ${contacts.startsWith('')}`);
