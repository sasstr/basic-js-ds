const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the value to the queue
 * queue.enqueue(3); // adds the value to the queue
 * queue.dequeue(); // returns the top value from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  node = new ListNode();

  getUnderlyingList() {
    return this.node;
  };

  enqueue(value) {
    let endNode = this.node;
    while (endNode.next !== null) {
      endNode = endNode.next;
    }
    if (endNode.value === undefined) {
      endNode.value = value;
    } else {
      endNode.next = new ListNode(value);
    }
  };

  dequeue() {
    const value = this.node.value;
    this.node = this.node.next;
    return value;
  };
};

module.exports = {
  Queue
};
