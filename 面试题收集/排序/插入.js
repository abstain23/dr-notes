// function insertSort(arr) {
//   var len = arr.length
//   var preIndex, current
//   for (var i = 1; i < len; i++) {
//     preIndex = i - 1
//     current = arr[i]
//     while (preIndex >= 0 && arr[preIndex] > current) {
//       arr[preIndex + 1] = arr[preIndex]
//       preIndex--
//     }
//     arr[preIndex + 1] = current
//   }
//   console.log(arr)
//   return arr
// }

insertSort2([5, 2, 1, 4])

function insertSort2(arr) {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let j = i - 1,
      temp = arr[i]
    for (; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    console.log(j)
    arr[j + 1] = temp
  }
  console.log(arr)
}

const time = Date.now()
for (let i = 0; i < 10000; i++) {}
console.log(Date.now() - time)
