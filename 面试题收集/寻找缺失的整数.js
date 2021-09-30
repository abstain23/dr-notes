/**
 * 假设一个无序数组里有若干个正整数，
 * 范围是1～100，其中有98个整数出现了偶数次，
 * 只有2个 整数出现了奇数次，如何找到这2个出现 奇数次的整数？
 */
let arr = [4,1,2,2,5,1,4, 3]
function solution(arr) {
  let orRes = 0, res = [0,0]

  arr.forEach(item => {
    orRes = orRes ^ item
  })

  if(orRes === 0) return null
  let s = orRes & (-orRes)

  arr.forEach(item => {
    if((item & s) === 0) {
      res[0] = res[0] ^ item
    } else {
      res[1] = res[1] ^ item
    }
  })
  console.log(res)
 return res
}


function solution2(arr) {
  let resMap = {}, res = []
  arr.forEach(item => {
    if(!resMap[item]) {
      resMap[item] = 1
    } else {
      resMap[item] += 1
    }
    
  })
  Object.keys(resMap).forEach(key => {
    if(resMap[key] % 2 !==0) {
      res.push(key)
    }
  })
  console.log(res)
  return res
}


solution2(arr)