function insertSort(arr) {
  var len = arr.length
  var preIndex, current
  for (var i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  console.log(arr)
  return arr
}

insertSort2([4, 5, 6, 1, 3, 2])

function insertSort2(arr) {
  if (arr.length < 2) return

  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i],
      j = i - 1
    for (; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = temp
  }
  console.log(arr)
}
