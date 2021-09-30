const entries = [
  {
    "province": "浙江", "city": "杭州", "name": "西湖"
  }, {
    "province": "四川", "city": "成都", "name": "锦里"
  }, {
    "province": "四川", "city": "成都", "name": "方所"
  }, {
    "province": "四川", "city": "阿坝", "name": "九寨沟"
  }];

const level = ["province", "city", "name"];



function test(data, level) {
  let res = []
  for (let i = 0; i < data.length; i++) {
    help(data[i], 0, res)
  }
  function help(item, index, res) {
    if (index === level.length) return
    let key = level[index]
    let children = []
    const findIndex = res.findIndex(item1 => item1.value === item[key])
    if(findIndex === -1) {
      if (index !== level.length - 1) {
        res.push({
          value: item[key],
          children
        })
      } else {
        res.push({
          value: item[key]
        })
      }
      help(item, index + 1, children)
    } else {
      children = res[findIndex].children
      help(item, index + 1, children)
    }    
  }

  return res
}



console.log(test(entries, level))






















// [
//   {
//     "value": "浙江",
//     "children": [
//       {
//         "value": "杭州",
//         "children": [
//           {
//             "value": "西湖"
//           }
//         ]
//       }
//     ]
//   },
//   {
//     "value": "四川",
//     "children": [
//       {
//         "value": "成都",
//         "children": [
//           {
//             "value": "锦里"
//           }, {
//             "value": "方所"
//           }
//         ]
//       },
//       {
//         "value": "阿坝",
//         "children": [
//           {
//             "value": "九寨沟"
//           }
//         ]
//       }]
//   }
// ]