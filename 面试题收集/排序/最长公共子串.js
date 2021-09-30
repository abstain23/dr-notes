// acbcbcefcdcdcd abcbcedcdcdcd => bcbce
function solution1(str1, str2) {
  let res = '', len1 = str1.length, len2 = str2.length
  for(let i = 0; i<len1; i++) {
    for(let j = 0; j< len2; j++) {
      let tempStr = '', k = 0
      while(i+k< len1 && j+k < len2 && str1[i + k] === str2[j + k]) {
        tempStr += str1[i + k]
        k++
      }
      if(tempStr.length > res.length) {
        res = tempStr
      }
    }
  }
  return res
}

console.log(solution1('acbcbcefcdcdcd', 'abcbcedcdcdcd'))


function knapsack (capacity, objectArr, order) {
  if (order < 0 || capacity <= 0) {
      return 0;
  }
  if (arr[order].size > capacity) {
      return knapsack(capacity, objectArr, order - 1);
  }
  return Math.max(arr[order].value + knapsack(capacity - arr[order].size, objectArr, order - 1),
                  knapsack(capacity, objectArr, order - 1));
}

console.log(knapsack(16, [
  {value: 4, size: 3},
  {value: 5, size: 4},
  {value: 10, size: 7},
  {value: 11, size: 8},
  {value: 13, size: 9}
], 4)); // 23
