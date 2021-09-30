const a = require('./a')

console.log(a)
a.a = 333
const b = require('./a')

setTimeout(() => {
    console.log(b.a)
}, 3000);

console.log(a === b)