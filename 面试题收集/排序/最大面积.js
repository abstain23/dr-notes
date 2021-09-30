var largestRectangleArea = function(heights) {
  let maxArea = 0, len = heights.length
  for(let i = 0; i < len; i++) {
      let minH = heights[i]
      for(let j = i; j < len; j ++) {
          minH = Math.min(minH, heights[j])
          maxArea = Math.max(maxArea, minH * (j - i + 1))
          console.log('i', i, 'j', j)
          console.log(minH, maxArea) // 1 1
      }
  }
  return maxArea
};

largestRectangleArea([2,1,5,6,2,3])

const a = [2,1,5,6,2,3]

for(let i = 0; i < a.length; i ++) {
  console.log(a[i])
}


var largestRectangleArea  = function(heights) {
  let maxArea = 0, stack = []
  heights.push(0)
  heights.unshift(0)

  for(let i = 0; i < heights.length; i ++) {
    while(stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      maxArea = Math.max(maxArea, heights[stack.pop()] * (i - stack[stack.length - 1] - 1))
    }
    stack.push(i)
  }

  return maxArea
}

console.log(largestRectangleArea([2,1,5,6,2,3]))


var largestRectangleArea = function(heights) {
  let stack = []; // 定义一个单调递增栈
  heights.push(-1) // 
  let maxans = 0;
  for (let i=0;i<heights.length;i++) {
      let cur = heights[i] // 2 [0] [5]
      // 栈不为空 并且当前柱子小于栈顶的柱子高度 进入循环
      while(stack.length>0&&cur<heights[stack[stack.length-1]]) {
        console.log('stack', stack)
          // 弹出栈顶的索引值
          let index = stack.pop() // 3
          // 计算弹出的柱子 和他左边第一个比他小的柱子之间的距离  如果栈为空说明当前弹出的柱子左边的柱子都比他要高，如果不为空，那就找到与新栈顶的距离
          let left = stack.length==0?index:index-stack[stack.length-1]-1 // 3 - 1 - 2
          // 当前弹出的柱子 与右边比他小的柱子的距离
          let right = i-index-1 // 0
          console.log('left', left)
          console.log('right', right)
          maxans = Math.max(maxans,(left+right+1)*heights[index]) // 2
      }
      // 将当前柱子的索引压入栈
      stack.push(i)
  }
  return maxans
};

console.log(largestRectangleArea([2,1,5,6,2,3]))

// stack: [] 1
//

// 作者：bu-xiu-gang-zi
// 链接：https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/dan-diao-di-zeng-zhan-ji-suan-zui-da-mia-70a7/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。