function get(obj, path, defaultValue = undefined) {
  if(obj === null || typeof obj !== 'object') {
    throw new Error(obj + ' is not a object')
  }
  const keys = path.split('.')
  let res = obj
  const reg = /(\w?)(?=\])/g
  const reg2 = /\w+/g
  for(let key of keys) {
    if(reg.test(key)) {
      let temp = key.match(reg2)
      if(temp) {
        temp.forEach(item => {
          res = res[item]
        })
      }
    } else {
      res = res[key]
    }
  }
  return res || defaultValue
}

// obj => {a: b: c: [1, 2]}  path: 'a.b.c[0]'

const obj = {
  a: {
    b: {
      c: [1, {
        d: 555
      }]
    }
  }
}


const val = get(obj, '[a][b][c][1].d', 'aaaaaaa')

console.log(val)


const a = async () => {
  return Promise.reject('dadasdasddsa')
}

const c = async () => {
  try {
    const res = await a()
    console.log('res', res)
  } catch (error) {
    console.log('error', error)
  }
}
c()