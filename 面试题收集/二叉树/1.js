// 二叉搜索树

function BinarySearchTree(keys) {
  let Node = function(data) {
    this.data = data
    this.left = null
    this.right = null
  }
  let root = null
  

  let insertNode = (node, newNode) => {
    if(newNode.data < node.data) {
      if(node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if(node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  this.insertNode = (data) => {
    let node = new Node(data)
    if(root === null) {
      root = node
    } else {
      insertNode(root, node)
    }
  }

  keys.forEach(key => this.insertNode(key))

  return root

}

const keys = [8,3,10,1,6,14,4,7,13]
console.log(BinarySearchTree(keys))

// 中序遍历 先左子树 后根节点 再右子树 可以将二叉搜索树从小到大排列

function inOrderTraverseFunction (node, cb) {
  if(node !== null) {
    inOrderTraverseFunction(node.left, cb)
    cb(node.data)
    inOrderTraverseFunction(node.right, cb)
  }
}
inOrderTraverseFunction(BinarySearchTree(keys),callback)

// 先序遍历 先根节点 后左子树 再右子树

function preOrderTraverseFuntion(node, cb) {
  if(!node) return
  cb(node.data)
  preOrderTraverseFuntion(node.left, cb)
  preOrderTraverseFuntion(node.right, cb)
}

// 后序遍历 先左子树 后右子树 再根节点

function postOrderTraverseFuntion(node, cb) {
  if(!node) return
  postOrderTraverseFuntion(node.left, cb)
  postOrderTraverseFuntion(node.right, cb)
  cb(node.data)
}

// 查找二叉树中最小的值
function finMinInTree(node) {
  if(!node) return null
  while(node) {
    if(!node.left) return node.data
    node = node.left
  }
 return node.data
}

function findMax(node) {
  if(!node) return null
  while(node) {
    if(!node.right) return node.data
    node = node.right
  }
  return node.data
}

// 层序遍历
function levelOrderTraversal(node, cb) {
  if(!node) return
  let stack = []
  stack.push(node)
  while(stack.length > 0) {
    let currentNode = stack.shift()
    cb(currentNode)
    if(currentNode.left) {
      stack.push(currentNode.left)
    }
    if(currentNode.right) {
      stack.push(currentNode.right)
    }
  }
}