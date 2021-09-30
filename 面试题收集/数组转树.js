
 let arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 5, name: '部门5', pid: 4},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
]

const res = [
  {
      "id": 1,
      "name": "部门1",
      "pid": 0,
      "children": [
          {
              "id": 2,
              "name": "部门2",
              "pid": 1,
              "children": []
          },
          {
              "id": 3,
              "name": "部门3",
              "pid": 1,
              "children": [
                  // 结果 ,,,
              ]
          }
      ]
  }
]

function solution1(arr,pid, res = [] ) {
  for(let item of arr) {
    if(item.pid === pid) {
      let newItem = {...item, children: []}
      res.push(newItem)
      solution1(arr, item.id, newItem.children)
    }
  }
}


function soultion2(arr) {
  
    const result = [];   // 存放结果集
    const itemMap = {};  // 
      
    // 先转成map存储
    for (const item of arr) {
      itemMap[item.id] = {...item, children: []}
    }
    
    console.log(itemMap)
    for (const item of arr) {
      const id = item.id;
      const pid = item.pid;
      const treeItem =  itemMap[id];
      if (pid === 0) {
        result.push(treeItem);
      } else {
        itemMap[pid].children.push(treeItem)
      }
  
    }
    console.log(result)
    return result;
  

}

function solution3(arr) {
  const res = [], arrMap = {}

  for(let item of arr) {
    const id = item.id
    const pid = item.pid
    if(!arrMap[id]) {
      arrMap[id] = {
        ...item,
        children: []
      }
    }else {
      arrMap[id] = {
        ...item,
        children: arrMap[id]['children']
      }
    }

    let treeItem = arrMap[id]
    if(pid === 0) {
      res.push(treeItem)
    } else {
      if(!arrMap[pid]) {
        arrMap[pid] = {
          children: []
        }
      }
      arrMap[pid]['children'].push(treeItem)
    }

  }

  return res
}



