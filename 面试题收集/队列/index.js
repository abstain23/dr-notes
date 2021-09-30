class QueueBaseArrry {
  constructor() {
    this.queue = []
  }
  enqueue(value) {
    this.queue.push(value)
  }
  dequeue() {
    return this.queue.pop()
  }
}

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class QueueBaseLink {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue(value) {
    const node = new Node(value)
    if(this.head === null) {
      this.head = node
      this.tail = this.head
    } else {
      this.tail.next = node
      this.tail = this.tail.next
    }
  }

  dequeue() {
    if(this.head !== null) {
      const value = this.head.element
      this.head = this.head.next
      return value
    } else {
      return null
    }
  }
}