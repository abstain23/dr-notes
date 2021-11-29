function flatten(obj, path = '', res = {}) {
  if (!isObj(obj)) return obj
  let isArr = Array.isArray(obj)
  Object.keys(obj).forEach(key => {
    const value = obj[key]
    let newKey = path ? path + '.' + key : key
    if (isArr) {
      newKey = path ? `${path}[${key}]` : `[${key}]`
    }
    if (isObj(value)) {
      // console.log(key, value)
      if (typeof value === 'function') {
        res[newKey] = value
      }
      return flatten(value, newKey, res)
    } else {
      res[newKey] = value
    }
  })
  return res
}

function flatten2(obj, res = {}) {
  const toString = Object.prototype.toString.call
  const type = toString(obj).slice(8, -1)
  if (type === 'Object') {
    for (k in obj) {
      flatten2(obj[key], res)
    }
  } else if (type === 'Array') {
    flatten2(obj[key], res)
  } else {
    res[key]
  }
  return res
}

function isObj(obj) {
  return Object(obj) === obj
}

console.log(
  flatten({
    d: () => {},
    a: new Date()
  })
)

console.log(Object(() => {}) === (() => {}))

const res = {
  a: 1,
  'b.a': 2,
  'b.b[0]': 1,
  'b.b[1]': 2,
  'b.b[2].c': 3,
  'b.b[2].d': 4,
  c: 4
}
