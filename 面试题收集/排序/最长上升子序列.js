// 最长连续递增子序列
var findLengthOfLCIS = function(nums) {
  let res = [], temp = 1
  for(let i = 1; i < nums.length; i ++) {
    console.log(nums[i], nums[i - 1])
      if(nums[i] > nums[i - 1] ) {
          temp += 1
      } else {
          res.push(temp)
          temp = 1
      }
  }

  res.push(temp)
  console.log(res)
  return Math.max(...res)
};


console.log(findLengthOfLCIS([1,3,5,7]))


// 最长递增子序列
// [10,9,2,5,3,7,101,18]
var lengthOfLcis = function(nums) {
  let n = nums.length 
  if(n === 0) {
    return 0
  }
  let dp = new Array(n).fill(1)

  for(let i = 0; i < n; i++) {
    console.log('i', i, nums[i])
    for(let j = 0; j < i; j++) {
      console.log('j', j, nums[j])
      if(nums[i] < nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}

lengthOfLcis([10,9,2,5,3,7,101,18])


var lengthOfLcis = function(nums) {
  let len = nums.length;
  if (len <= 1) {
        return len;
  }

  let tails = [nums[0]]

  for(let i = 0; i < len; i ++) {
    if(nums[i] > tails[tails.length - 1]) {
      tails.push(nums[i])
    } else {
      let left = 0, right = tails.length - 1
      while(left < right) {
        let mid = Math.floor((left + right) / 2)
        if(tails[mid] < nums[i]) {
          left = mid + 1
        } else {
          right = mid
        }
      }
      tails[left] = nums[i]
    }
  }
  return lengthOfLcis.length
}

// [2,3,7,101] 101   => 0 3 1  2 101   0 3 1