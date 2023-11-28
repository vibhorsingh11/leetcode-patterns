/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.DLL = new DoublyLinkedList();
  this.capacity = capacity;
  this.map = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map[key]) return -1;
  const value = this.map[key].value;
  this.DLL.remove(this.map[key]);
  this.map[key] = this.DLL.push(key, value);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map[key]) this.DLL.remove(this.map[key]);
  this.map[key] = this.DLL.push(key, value);
  //check for capacity
  if (this.DLL.length > this.capacity) {
    const curr = this.DLL.head.key;
    delete this.map[curr];
    this.DLL.remove(this.DLL.head);
  }
};

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(key, val) {
    let newNode = new Node(key, val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  remove(node) {
    if (node.next === null && node.prev === null) {
      this.head = null;
      this.tail = null;
    } else if (node.next === null) {
      this.tail = node.prev;
      this.tail.next = null;
    } else if (node.prev === null) {
      this.head = node.next;
      this.head.prev = null;
    } else {
      const prev = node.prev;
      const next = node.next;
      prev.next = next;
      next.prev = prev;
    }
    this.length--;
  }
}

module.exports = LRUCache;
