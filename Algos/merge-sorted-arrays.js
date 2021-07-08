const mergeTwo = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let ans = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    for (i; i < arr1.length; i++) {
      ans.push(arr1[i]);
    }
  }
  if (j < arr2.length) {
    for (j; j < arr2.length; j++) {
      ans.push(arr2[j]);
    }
  }

  return ans;
};

console.log("merging two: " + mergeTwo([1, 2, 3], [1, 3, 4, 5]));
// console.log(mergeTwo([0, 5, 6], [1, 2]));
// console.log(mergeTwo([0], [0]));
// console.log(mergeTwo([1], [0]));
// console.log(mergeTwo([], [1, 2]));
// console.log(mergeTwo([1, 2], []));

const mergeK = (arrays) => {
  let ans = [];

  // start with the first
  ans.push(arrays.shift());

  while (arrays.length > 0) {
    ans[0] = mergeTwo(ans[0], arrays.shift());
  }

  return ans[0];
};

let kArrays = [[], [1, 2], [3, 4], [6], [5, 6]];
console.log("merging K: " + mergeK(kArrays));
