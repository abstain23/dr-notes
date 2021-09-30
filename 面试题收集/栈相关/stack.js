class StackBaseArr {
  constructor() {
    this.stack = []
    this.count = 0
  }

  push(val) {
    this.stack[this.count] = val
    this.count += 1
  }

  pop() {
    if(this.count === 0) return null
    let temp = this.stack[this.count - 1]
    this.count -= 1
    return temp
  }
}

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class StackBaseLinkList {
  constructor() {
    this.top = null
  }

  push(val) {
    const node = new Node(val)
    if(this.top === null) {
      this.top = node
    } else {
      node.next = this.top
      this.top = node
    }
  }

  pop() {
    if(this.top === null) {
      return null
    }
    let top = this.top
    this.top = this.top.next
    return top
  }

}