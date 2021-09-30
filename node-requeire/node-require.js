const a = require('./a')
const add = require('./b')
const c = require('./c')
const d = require('./d')

console.log(a)
console.log(add(1,2))
console.log(c)
console.log(d.num)
d.num = 8888
console.log(d)


xxxx = {
    "a.js": "hello world",
    "b.js": function add(){},
    "c.js": 2,
    "d.js": { num: 2 }
  }
  