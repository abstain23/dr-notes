const { throws } = require('assert')
const {SyncHook, AsyncSeriesHook} = require('tapable')

class Car {
  constructor() {
    this.hooks = {
      // new 一个加速钩子
      accelerate: new SyncHook(['newspeed']),
      // new 一个刹车钩子
      brake: new SyncHook(),
      // new 一个异步计算车程的钩子
      calculateRoutes: new AsyncSeriesHook(["source", "target", "routesList", 'callback'])
    }
  }
}

const car = new Car()

car.hooks.brake.tap('cc1', () => console.log('cc1'))

car.hooks.accelerate.tap('cc2', (cc2) => console.log(cc2))

car.hooks.calculateRoutes.tapPromise('cc3', (source, target, routesList, cb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('cc3, promise', source, target, routesList)
      cb()
    }, 1000)
  })
})

car.hooks.brake.call()
car.hooks.accelerate.call('cc2')
console.time('cost')
car.hooks.calculateRoutes.promise('cc3', 'hook', 'demo', () => {
  console.log('cb 函数执行')
}).then(() => {
  console.timeEnd('cost')
}).catch(err => {
  console.log(err)
  console.timeEnd('cost')
})