// Nth fibonacci number using memoization
// O(N) run time because we only ever go to N depth
// O(N) space for same reason, though this is same as non-memo solution
const fib = (n, cache) => {
	if (n <= 1) return n; // Base case n == 1 || 0

	if (n in cache) {
		return cache[n]; // Already computed fib(n)
	} else {
		cache[n] = fib(n - 1, cache) + fib(n - 2, cache); // Update cache
	}

	return cache[n];
};

// {} appears slightly faster than Map()
let cache = {};

// About 3ms compared to 4ms for Map()
console.time('fib');
for (let i = 0; i < 6000; i++) {
	fib(i, cache);
}
console.timeEnd('fib');
