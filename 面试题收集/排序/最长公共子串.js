/*
 * @Author: your name
 * @Date: 2021-07-14 16:38:33
 * @LastEditTime: 2021-12-08 18:44:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \notes\面试题收集\排序\最长公共子串.js
 */
// acbcbcefcdcdcd abcbcedcdcdcd => bcbce
function solution1(str1, str2) {
  let res = '',
    len1 = str1.length,
    len2 = str2.length
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      let tempStr = '',
        k = 0
      while (i + k < len1 && j + k < len2 && str1[i + k] === str2[j + k]) {
        tempStr += str1[i + k]
        k++
      }
      if (tempStr.length > res.length) {
        res = tempStr
      }
    }
  }
  return res
}

console.log(solution1('acbcbcefcdcdcd', 'abcbcedcdcdcd'))

function lcs(str1, str2) {
  let m = str1.length,
    n = str2.length
  const dp = new Array(m + 1).fill(0).map(item => new Array(n + 1).fill(''))

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        console.log(str1[i - 1], str2[j - 1])
        dp[i][j] = dp[i - 1][j - 1] + str2[j - 1]
      } else {
        dp[i][j] =
          dp[i][j - 1].length > dp[i - 1][j].length
            ? dp[i][j - 1]
            : dp[i - 1][j]
      }
    }
  }
  return dp[m][n]
}

console.log(lcs('abcd', 'acd'))

function knapsack(capacity, objectArr, order) {
  if (order < 0 || capacity <= 0) {
    return 0
  }
  if (arr[order].size > capacity) {
    return knapsack(capacity, objectArr, order - 1)
  }
  return Math.max(
    arr[order].value +
      knapsack(capacity - arr[order].size, objectArr, order - 1),
    knapsack(capacity, objectArr, order - 1)
  )
}

console.log(
  knapsack(
    16,
    [
      { value: 4, size: 3 },
      { value: 5, size: 4 },
      { value: 10, size: 7 },
      { value: 11, size: 8 },
      { value: 13, size: 9 }
    ],
    4
  )
) // 23
