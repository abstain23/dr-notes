function quickSort(arr) {
  const len = arr.length
  if(len < 2) {
    return arr
  }

  const midIndex = Math.floor(len / 2)
  const midVal = arr.splice(midIndex, 1)[0]
  const left = []
  const right = []


  for(let i = 0; i < arr.length; i++) {
    if(arr[i] <= midVal) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(midVal, quickSort(right))
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.time('快速排序耗时');
console.log('arr :', quickSort(arr));
console.timeEnd('快速排序耗时')

function a() {
  try {
    JSON.parse('{name:xiaoming}')
  } catch (error) {
    console.log('err', error)
  } finally {
    return 2
  }
  
}

console.log(a())