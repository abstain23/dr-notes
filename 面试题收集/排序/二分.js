// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/pythonjs-er-fen-fa-33-sou-suo-xuan-zhuan-pai-xu-sh/

const search = (nums, target) => {
  let start = 0, end = nums.length - 1

  while(start <= end) {
    let mid = Math.floor((start + end) / 2)
    if(nums[mid] === target) return mid
    if(nums[mid] >= nums[start]) { // 左边有序
      if(target >= nums[start] && target < nums[mid]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    } else {
      if(target > nums[mid] && target <= nums[end]) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }
  
  return -1
}

console.log(search([4,5,6,7,0,1,2], 0))