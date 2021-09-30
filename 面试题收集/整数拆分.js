/**
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 * 2 => 1 + 1 => 1 * 1 = 1
 * 3 => 1 +2 => 2
 * 4 => 2 * 2 = 4 
 * 5 => 3 * 2
 * 6 => 3 * 3
 * 7  4 * 3
 * 8 3 * 3 * 2
 */
function solution(num) {
  const arr = Array(num + 1).fill(1)
  for(let i = 2;  i < arr.length; i++) {
    for(let j = 1; j < i; j ++) {
      console.log(arr[i], j * (i - j), j * arr[i - j])
      arr[i] = Math.max(arr[i], j * (i - j), j * arr[i - j])
    }
  }
  console.log(arr)
  console.log(arr[num])
  return arr[num]
}
solution(9)


function solution2(num) {
  if(num === 2) return 1
  if(num === 3) return 2

  const a = Math.floor(num / 3)
  const b = num % 3

  if(b === 0) {
    return Math.pow(3, a)
  }

  if(b === 1) {
    return Math.pow(3, a - 1) * 4
  }

  return Math.pow(3, a) * 2

}