
function bubbleSort(arr) {
  if(arr.length <= 1) return arr
  let len = arr.length
  for(let i = 0; i < len; i ++) {
    let flag = false
    for(let j = 0; j < len - i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        flag = true
      }
    }
    if(!flag) {
      return arr
    }
  }
  return arr
}
console.log(bubbleSort([1,3,5,2,4,7,2,1,6]))