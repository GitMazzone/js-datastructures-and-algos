// https://www.youtube.com/watch?v=giiaIofn31A&ab_channel=MichaelMuinosMichaelMuinos

/**
 * ABOUT
 * A trie (or prefix tree) is a tree where each node can have up to 26 children
 * if we assume only lowercase letters a-z, and the root is a blank.
 * It's often used to store characters.
 * End of a word will be marked with a boolean, like isEndOfWord
 * Use case examples:
 *    Any words that start with 'car'?
 *    Given list of strings, find names from list.
 */
/**
 * IMPLEMENTATION DETAILS
 * Each node has:
 *    A character (a-z, lowercase)
 *    Map / table of child nodes: Map(char, node)
 *    Boolean that tells if it's the end of a word
 */

class Trie {
	constructor(root = new Node()) {
		this.root = root;
	}

	// Return null on successful insert, error if already exists
	insert(word) {
		let node = this.root;

		for (let i = 0; i < word.length; i++) {
			const char = word[i];

			if (!node.children.has(char)) {
				node.children.set(char, new Node(char));
			}

			node = node.children.get(char);
		}

		node.isEndOfWord = true;
	}

	// Return the word if it exists in the trie, false otherwise
	contains(word) {
		let node = this.root;

		for (let i = 0; i < word.length; i++) {
			if (node.children.has(word[i])) {
				node = node.children.get(word[i]);
			} else {
				return false;
			}
		}

		return node.isEndOfWord && word;
	}

	// Return an array containing all words with a given prefix
	prefixedBy(prefix) {
		let node = this.root;
		let result = [];

		for (let i = 0; i < prefix.length; i++) {
			if (node.children.get(prefix[i])) {
				node = node.children;
			}
		}
	}

	// Return an array containing all words in the trie
	allWords = () => {};
}

class Node {
	constructor(character = null, children = new Map(), isEndOfWord = false) {
		this.character = character;
		this.children = children;
		this.isEndOfWord = isEndOfWord;
	}
}

// let trie = new Trie();

// trie.insert('hello');
// trie.insert('hell');
// trie.insert('help');
// trie.insert('heap');
// trie.insert('oreo');
// trie.insert('ore');
// trie.insert('ores');
// trie.insert('apple');
// trie.insert('ap');

// console.log(trie.contains('hello'));
// console.log(trie.contains('oren'));
// console.log(trie.contains('oreee'));
// console.log(trie.contains('ore'));
// console.log(trie.contains('apple'));
// console.log(trie.contains('app'));

var obj = new Trie();
console.log('ins apple: ' + obj.insert('apple'));
console.log('contains apple: ' + obj.contains('apple'));
console.log('contains app: ' + obj.contains('app'));
console.log('ins app: ' + obj.insert('app'));
console.log('contains app: ' + obj.contains('app'));
