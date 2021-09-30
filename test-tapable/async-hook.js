const {AsyncSeriesHook} = require('tapable')

const asyncHook = new AsyncSeriesHook(['name', 'age'])

/**
 * callAsync 与之前的同步call不同，在传入了与实例化相同长度的参数个数后，还需要在最后传入一个回调函数cb
 * 并且注册事件中的cb必须得执行，不然后续注册的回调事件和传入的cb都不会在执行
 * 当cb执行时，传入一个不为false的时候，下面注册的回调事件不会再执行，而是直接执行再触发时传入的回调
 * 触发时传入的cb是错误优先的回调
 */

 // 注册
asyncHook.tapAsync('first', (name, age, cb) => {
  console.log('first', name, age, cb)
  cb()
})

asyncHook.tapAsync('secend', (name, age, cb) => {
  console.log('secend', name, age, cb)
  cb('1') // 0 false undefined null
})

asyncHook.tapAsync('third', (name, age, cb) => {
  console.log('third', name, age, cb)
  cb()
})

// 触发
asyncHook.callAsync({name: 'zhangsan'}, {age: 18}, (err) => {
  console.log('zhangsan', err)
})