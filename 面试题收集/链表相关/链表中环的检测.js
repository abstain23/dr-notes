const LinkList = require('./linkList')

const link = new LinkList()

link.append(1)
link.append(2)
link.append(3)
link.append(4)
link.append(5)

let currentNode = link.head

while(currentNode.next) {
  currentNode = currentNode.next
}

currentNode.next = link.head.next.next.next

// debugger
console.log(link)

function solution(link) {
  const head = link.head
  if(!head || !head.next) {
    return false
  }
  let fast = head.next.next, slow = head
  while(fast !== slow) {
    if(!fast || !fast.next) return false
    fast = fast.next.next
    slow = slow.next
  }
  return true
}

console.log(solution(link))