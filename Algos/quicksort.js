const quickSort = (arr, left, right) => {
  const i = partition(arr, left, right);

  if (left < i - 1) {
    quickSort(arr, left, i - 1);
  }

  if (i < right) {
    quickSort(arr, i, right);
  }
};

const partition = (arr, left, right) => {
  const pivot = arr[Math.floor((right + left) / 2)];

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;
};

const swap = (arr, i, j) => {
  const temp = arr[i];

  arr[i] = arr[j];
  arr[j] = temp;
};

let arr = [1, 2, 4, 7, 3, 8, 9, 0];

quickSort(arr, 0, arr.length - 1);

console.log(arr);
