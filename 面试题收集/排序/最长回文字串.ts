/*
 * @Author: your name
 * @Date: 2021-12-08 18:43:35
 * @LastEditTime: 2021-12-08 19:02:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \notes\面试题收集\排序\最长回文.js
 */

function solution(s: string) {
  const len = s.length
  if (len < 2) {
    return s
  }

  let start = 0,
    maxLen = 1

  function help(left: number, right: number) {
    while (left >= 0 && right < len && s[left] === s[right]) {
      // console.log(s[left], s[right])
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1
        start = left
      }
      left--
      right++
    }
  }
  for (let i = 0; i < len; i++) {
    help(i - 1, i + 1)
    help(i, i + 1)
  }
  // console.log(start, maxLen)
  return s.substring(start, start + maxLen)
}

console.log(solution('111abba'))
console.log(solution('abcba'))
console.log(solution('cbbd'))
console.log(solution('ab'))

function solution2(s: string) {
  let str = '#',
    mid = 0,
    right = 0,
    maxLen = 0,
    maxlenMid = 0,
    child = []
  for (let i = 0; i < s.length; i++) {
    str += s[i]
  }

  for (let i = 0; i < str.length; i++) {
    child[i] = i < right ? Math.min(child[2 * mid - 1], right - i) : i
  }
}
