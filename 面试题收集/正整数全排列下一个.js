// 给出一个正整数，找出这个正整数所有数字全排列的下一个数。
// 12345 12354 12435 12453
// 12345  54321 从右往左寻找第一个大于前一个的数字

function sortAll(number) {
  let arrNum = number.split('')

  let findIndex = 0
  for(let i = arrNum.length - 1; i > 0; i--) {
    if(arrNum[i] > arrNum[i - 1]) {
      findIndex = i
      break
    }
  }
  if(findIndex === 0) return null

  let preIndex= findIndex - 1, reveArr = arrNum.slice(findIndex).reverse((a, b) => a - b)
  for(let i = 0; i < reveArr.length; i++) {
    if(reveArr[i] > arrNum[preIndex]) {
      let temp = arrNum[preIndex] 
      arrNum[preIndex] = reveArr[i]
      reveArr[i] = temp
      break
    }
  }

  return arrNum.slice(0, findIndex).concat(reveArr).join('')
  
}

console.log(sortAll('12431'))
console.log(sortAll('12345'))
console.log(sortAll('54321'))
console.log(sortAll('112111'))


// 删去k个数字后的最小值
// 12345 1 54321 1 从左往右寻找第一个大于后一个的数字

function deleteK(number, k) {
  if(number.length === 0) return 0
  if(k === 0) return number
  let arrNum = number.split('')
  console.log(arrNum)
  let findIndex = arrNum.length - 1
  for(let i = 0; i < arrNum.length - 1; i++) {
    if(arrNum[i] > arrNum[i + 1]) {
      findIndex = i
      break
    }
  }
  arrNum.splice(findIndex, 1)
  console.log(findIndex)
  return deleteK(arrNum.join(''), --k)
}

console.log(deleteK('45431', 2))
console.log(deleteK('12', 2))