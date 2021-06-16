// https://leetcode.com/explore/interview/card/microsoft/30/array-and-strings/213/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
	// No space found, do nothing to input array
	if (s.indexOf(' ') === -1) {
		// Likely O(N)
		return;
	}

	reverse(s, 0, s.length - 1); // Reverse the entire input array, apple green --> neerg elppa

	let start = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === ' ') {
			reverse(s, start, i - 1);
			start = i + 1;
		}
	}
	reverse(s, start, s.length - 1);
};

function reverse(input, i, j) {
	let temp = '';

	while (i < j) {
		temp = input[i];
		input[i] = input[j];
		input[j] = temp;
		i++;
		j--;
	}
}

let arr = ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e'];
reverseWords(arr);
let str = '';
arr.forEach((char) => (str += char));
console.log(str);
