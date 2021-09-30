var o = {
  valueOf() {
    console.log('v')
    return 1
  },
  toString() {
    console.log('t')
    return 2
  }
}

o[Symbol.toPrimitive] = () => {
  console.log('tp')
  return 3
}

console.log(o + 1)
console.log(o + '1')
console.log(String(o))
// console.log(o.toString())