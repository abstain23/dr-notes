class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

module.exports =  class LinkList {
  constructor() {
    this.head = new Node('head')
  }

  findByValue(value) {
    let currentNode = this.head.next
    while(currentNode !== null && currentNode.data !== value) {
      currentNode = currentNode.next
    }
    return currentNode === null ? -1 : currentNode
  }

  findByIndex(index) {
    let currentNode = this.head.next
    let i = 0
    while(currentNode !== null && i < index) {
      currentNode = currentNode.next
      i++
    }
    return currentNode === null ? -1 : currentNode
  }

  append(data) {
    let newNode = new Node(data)
    let currentNode = this.head
    while(currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }

  insertByElement(data, node) {
    const currentNode = this.findByValue(node)
    if(currentNode !== -1) {
      const newNode = new Node(data)
      let next = currentNode.next 
      newNode.next = next
      currentNode.next = newNode
    }
  }
}