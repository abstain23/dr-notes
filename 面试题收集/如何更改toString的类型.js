var a = {
  a: 1
}

console.log(Object.prototype.toString.call(a))

a[Symbol.toStringTag] = 'ccc'

console.log(Object.prototype.toString.call(a))