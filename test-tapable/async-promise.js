const {AsyncSeriesHook} = require('tapable')

const hook = new AsyncSeriesHook(['name'])

hook.tapPromise('fisrt', name => {
  console.log('first', name)
  return Promise.resolve('first res')
})

hook.tapPromise('second', name => {
  console.log('second', name)
  return Promise.resolve('second res')
})

const promise = hook.promise('promise')

console.log(promise)
promise.then(v => {
  console.log('value', v)
}).catch(err => {
  console.log('err', err)
})
