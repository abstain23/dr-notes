function mergeSort(arr) {
  const len = arr.length
  if(len < 2) {
    return arr
  }

  const midIndex = Math.floor(len / 2)
  const left = arr.slice(0, midIndex)
  const right = arr.slice(midIndex)

  return merge(mergeSort(left), mergeSort(right))
  
}


function merge(left, right) {
  const  res = []
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }

  while(left.length) {
    res.push(left.shift())
  }
  
  while(right.length) {
    res.push(right.shift())
  }

  return res
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.time('归并排序耗时');
console.log('arr :', mergeSort(arr));
console.timeEnd('归并排序耗时')