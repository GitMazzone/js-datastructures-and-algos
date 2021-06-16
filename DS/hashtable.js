const hash = (key, size) => {
	let hashedKey = 0;

	for (let i = 0; i < key.length; i++) {
		hashedKey += key.charCodeAt(i);
	}

	return hashedKey % size;
};

// Implementation of a hash table that uses ES6 Maps for buckets, which provide
// built-in methods use in these insert, remove, and search class methods.
class HashTable {
	constructor() {
		this.size = 20;
		this.buckets = Array(this.size);

		// Make each index in the table a Map (bucket)
		for (let i = 0; i < this.buckets.length; i++) {
			this.buckets[i] = new Map();
		}
	}

	insert(key, value) {
		let index = hash(key, this.size);

		this.buckets[index].set(key, value);
	}

	remove(key) {
		let index = hash(key, this.size);
		let deleted = this.buckets[index].get(key);

		this.buckets[index].delete(key);

		return deleted;
	}

	search(key) {
		let index = hash(key, this.size);

		return this.buckets[index].get(key);
	}
}

const hashTable = new HashTable();

hashTable.insert('Mikeyboi', 'Athens');
hashTable.insert('Dani', 24);
hashTable.insert('Mere', 'Brrrrrr');
hashTable.insert('Pool', 'Gogan');
hashTable.insert('Losingmy', 'Mind');

console.log(hashTable);
console.log(hashTable.search('Dani'));
console.log(hashTable.search('Pool'));

hashTable.remove('Losingmy');
console.log(hashTable);
