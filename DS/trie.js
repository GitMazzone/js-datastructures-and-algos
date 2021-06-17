// Credit goes to https://leetcode.com/problems/implement-trie-prefix-tree/discuss/399178/Clean-JavaScript-solution

class Trie {
	constructor() {
		// Using dict instead of Map eliminates need for class Node
		// Each key is a character and holds another dict with char and/or isWord
		this.root = {};
	}

	// Time: O(word.length) since dict/map access is O(1)
	/**
	 * trie.insert('app')
	 * trie --> {
	 *  a: {
	 *    p: {
	 *      p: { isWord: true }
	 *    }
	 *  }
	 * }
	 */
	insert(word) {
		let node = this.root;

		for (let char of word) {
			if (node[char] == null) node[char] = {};

			node = node[char];
		}

		node.isWord = true;
	}

	// Return node at last character in word
	traverse(word) {
		let node = this.root;

		for (let char of word) {
			node = node[char];

			if (node == null) return null;
		}

		return node;
	}

	// Traverse puts us at the last char, if found
	search(word) {
		const node = this.traverse(word);

		return node != null && node.isWord === true;
	}

	startsWith(prefix) {
		return this.traverse(prefix) != null;
	}
}
