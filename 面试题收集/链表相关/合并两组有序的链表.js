const LinkList = require('./linkList')

let link1 = new LinkList()
link1.append(1)
link1.append(2)
link1.append(3)
link1.append(4)
link1.append(5)

// // debugger
// console.log(link)

let link2 = new LinkList()
link2.append(1)
link2.append(3)
link2.append(4)
link2.append(8)
link2.append(10)

link1 = link1.head
link2 = link2.head

// while(link2) {
//   console.log(link2.data)
//   link2 = link2.next
// }
// while(link1) {
//   console.log(link1.data)
//   link1 = link1.next
// }

function solution(l1,l2) {
  if(!l1) return l2
  if(!l2) return l1

  let newLink = new LinkList(),curry = newLink.head
  while(l1 && l2) {
    // console.log(l1, l2)
    if(l1.data < l2.data) {
      curry.next = l1
      l1 = l1.next
    } else {
      curry.next = l2
      l2 = l2.next
    }
    curry = curry.next
  }

  if(l1) {
    curry.next = l1
  }
  if(l2) {
    curry.next = l2
  }
  // console.log(curry)

  // debugger
  return newLink.head
}

let res = solution(link1.next, link2.next)


function solution2(l1, l2) {
  if(!l1) return l2
  if(!l2) return l1

  if(l1.data < l2.data) {
    l1.next = solution2(l1.next, l2)
    return l1
  } else {
    l2.next = solution2(l1, l2.next)
    return l2
  }

}


console.log(solution2(link1.next, link2.next))
debugger