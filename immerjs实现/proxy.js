var obj = {
  key: 'value'
}
var handler = {
  get: function (target, key, receiver) {
    console.log(`proxy key = ${key}`)
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, value, receiver) {
    console.log(`proxy key = ${key}, value = ${value}`)
    return Reflect.set(target, key, value, receiver)
  }
  // , apply
  // , construct
  // , defineProperty
  // , deleteProperty
  // , enumerate
  // , getOwnPropertyDescriptor
  // , getPrototypeOf
  // , has
  // , isExtensible
  // , ownKeys
  // , preventExtensions
  // , setPrototypeOf
}
var proxy = new Proxy(obj, handler)

console.log(proxy)
proxy.a = 1
proxy['b'] = 2
// console.log(proxy)

proxy.b++

console.log(
  `proxy.key = ${proxy.key}, proxy.a = ${proxy.a}, proxy.b = ${proxy.b}`
)
console.log(`obj.key = ${obj.key}, obj.a = ${obj.a}, obj.b = ${obj.b}`)

obj.x = 2
console.log(`obj.x = ${obj.x}, proxy.x = ${proxy.x}`)
console.log('obj', obj)
console.log('proxy', proxy)
console.log(obj === proxy)
