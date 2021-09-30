const LinkList = require('./linkList')

const link = new LinkList()

link.append(1)
link.append(2)
link.append(3)
link.append(4)
link.append(5)

// debugger
console.log(link)

function reverseLink(link) {
  const head = link.head
  let pre = null, current = head.next, next = head.next
  while(next) {
    next = current.next
    current.next = pre
    pre = current
    current = next
  }
  
  console.log(pre)
  head.next = pre
  debugger
}

reverseLink(link)