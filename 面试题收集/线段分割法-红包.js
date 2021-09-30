// 微信抢红包

function solution(money, peopleNum) {
  if(peopleNum === 1) {
    return [peopleNum]
  }
  if(money * 100 < 1 && peopleNum > 1) {
    console.log('err')
    return
  }

  let split_list = [], res = [], split_map = {}

  while(split_list.length < peopleNum - 1) {
    let min = 1
    let max = money * 100 - 1
    let value = Math.round(Math.random() * max + min)
    if(!split_map[value]) {
      split_list.push(value)
      split_map[value] = true
    }
  }
  let last = 0
  split_list.sort((a, b) => a - b)
  for(let split of split_list) {
    let v =  ((split -last) / 100).toFixed(2)
    res.push(v)
    last = split
  }

  res.push(((money*100 -last) / 100).toFixed(2))

  console.log(res)
  
}

solution(100, 2)