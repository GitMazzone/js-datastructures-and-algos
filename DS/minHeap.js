/**
 * [p, l, r, ...]
 * Heap implemented as an array, where:
 * parent = (childIndex - 1) / 2
 * left = 2 * (parentIndex + 1)
 * right = 2 * (parentIndex + 2)
 */
class MinHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  // GET INDEX OF P / L / R
  getLeftChildIndex(parentIndex) {
    return 2 * (parentIndex + 1);
  }
  getRightChildIndex(parentIndex) {
    return 2 * (parentIndex + 2);
  }
  getParentIndex(childIndex) {
    return (childIndex - 1) / 2;
  }

  // HAS P / L / R
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  // GET VALUE AT P / L / R
  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(index1, index2) {
    const temp = this.heap[index1];

    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  // Returns min element or throws exception if empty
  peek() {
    this.throwExceptionIfEmpty("peek");

    return this.heap[0];
  }

  // Returns AND REMOVES min element from heap, or throws exception if empty
  poll() {
    this.throwExceptionIfEmpty("poll");

    const item = this.heap[0];

    this.heap[0] = this.heap[this.size - 1]; // move last item to top of heap
    this.heap.pop(); // remove the smallest that we put at end
    this.size--;
    this.heapifyDown(); // move top to appropriate place in heap

    return item;
  }

  add(item) {
    this.heap.push(item);
    this.size++;
    this.heapifyUp();
  }

  heapifyDown() {
    let current = 0;

    while (this.hasLeftChild(current)) {
      let smallerChildIndex = this.getLeftChildIndex(current);

      if (
        this.hasRightChild(current) &&
        this.rightChild(current) < this.leftChild(current)
      ) {
        smallerChildIndex = this.getRightChildIndex(current);
      }

      if (this.heap[current] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(current, smallerChildIndex);
      }

      current = smallerChildIndex;
    }
  }

  heapifyUp() {
    let current = this.size - 1;

    // swap parent & current if parent is larger
    while (
      this.hasParent(current) &&
      this.parent(current) > this.heap[current]
    ) {
      this.swap(this.getParentIndex(current), current);
      current = this.getParentIndex(current);
    }
  }

  throwExceptionIfEmpty(fn) {
    if (this.size === 0) throw `Heap is empty! Unable to ${fn}.`;
  }
}

let heap = new MinHeap();

heap.add(15);
heap.add(25);
heap.add(17);
heap.add(10);
heap.add(20);
// should be [10, 15, 20, 17, 25]

console.log(heap);
console.log(heap.peek());
console.log(heap.poll());
console.log(heap);
console.log(heap.peek());
