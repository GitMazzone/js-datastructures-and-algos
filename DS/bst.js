// Re-watch first 3:30 of video & note characteristics of BST, O(N), etc.
// DRAW THE SAMPLE TREE ON PAPER, INCLUDING ALL OPS

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor(value) {
		this.root = new Node(value);
		this.count = 1;
	}

	size() {
		return this.count;
	}

	insert(value) {
		this.count++;

		const newNode = new Node(value);

		// Recursively travel tree for insertion point
		const searchTree = (node) => {
			if (value < node.value) {
				if (!node.left) {
					node.left = newNode;
				} else {
					searchTree(node.left);
				}
			} else if (value > node.value) {
				if (!node.right) {
					node.right = newNode;
				} else {
					searchTree(node.right);
				}
			}
		};

		searchTree(this.root);
	}

	// Will always be leftmost node
	min() {
		let currentNode = this.root;

		while (currentNode.left) {
			currentNode = currentNode.left;
		}

		return currentNode.value;
	}

	// Always rightmost node
	max() {
		let currentNode = this.root;

		while (currentNode.right) {
			currentNode = currentNode.right;
		}

		return currentNode.value;
	}

	// Traverse left or right accordingly while there's still a node to visit,
	// and while value still not found
	contains(value) {
		let currentNode = this.root;

		while (currentNode) {
			if (value === currentNode.value) {
				return true;
			}
			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}

		return false;
	}

	// 3 types of DFS, which look branch-by-branch
	// Inorder means
	// left, root, right
	dfsInorder() {
		let result = [];

		const traverse = (node) => {
			if (node.left) traverse(node.left);

			result.push(node.value);

			if (node.right) traverse(node.right);
		};

		traverse(this.root);

		return result;
	}

	// root, left, right
	dfsPreorder() {
		let result = [];

		const traverse = (node) => {
			result.push(node.value);

			if (node.left) traverse(node.left);

			if (node.right) traverse(node.right);
		};

		traverse(this.root);

		return result;
	}

	// left, right, root
	dfsPostOrder() {
		let result = [];

		const traverse = (node) => {
			if (node.left) traverse(node.left);

			if (node.right) traverse(node.right);

			result.push(node.value);
		};

		traverse(this.root);

		return result;
	}

	// BFS look level-by-level
	// Will be using a queue
	bfs() {
		let result = [];
		let queue = [];

		queue.push(this.root);

		while (queue.length) {
			let currentNode = queue.shift();

			result.push(currentNode.value);

			if (currentNode.left) {
				queue.push(currentNode.left);
			}
			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}

		return result;
	}
}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log(`size: ${bst.size()}`);
console.log(`min: ${bst.min()}`);
console.log(`max: ${bst.max()}`);
console.log(`contains 2? ${bst.contains(2)}`);
console.log(`contains 11? ${bst.contains(11)}`);
console.log(`DFS inorder: ${bst.dfsInorder()}`);
console.log(`DFS preorder: ${bst.dfsPreorder()}`);
console.log(`DFS postorder: ${bst.dfsPostOrder()}`);
console.log(`BFS: ${bst.bfs()}`);
