// Pick a midpoint
// If number we're looking for is larger, recurse right of mid
// If smaller, recurse left
// Otherwise, found the number!
const binarySearch = (nums, numToFind) => {
  const mid = Math.floor(nums.length / 2);

  if (nums[mid] === numToFind) return nums[mid];
  else if (nums[mid] < numToFind) {
    return binarySearch(nums.slice(mid + 1, nums.length), numToFind);
  } else if (nums[mid] > numToFind) {
    return binarySearch(nums.slice(0, mid), numToFind);
  } else {
    return -1;
  }
};

// Approx. .9ms when using splice vs UP TO .9ms when using slice (as low as .7ms)
console.time("binSearch");
let found3 = binarySearch([1, 2, 4, 5, 6, 7, 8, 9], 3);
for (let i = 0; i < 1000; i++) {
  found3 = binarySearch([1, 2, 4, 5, 6, 7, 8, 9], 3);
}
console.timeEnd("binSearch");
console.log(`binarySearch([1, 2, 4, 5, 6, 7, 8, 9], 3): ${found3}`);
