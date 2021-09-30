const {
  SyncHook,
  SyncBailHook,
  SyncLoopHook,
  SyncWaterfallHook
} = require('tapable')

// 初始化
const syncHook = new SyncHook(['name', 'age'])

/* 注册事件, 第一个参数可以是事件的名字 也可以是配置对象
   如果是配置对象的话，stage表示添加到回调队列中的顺序，默认为0， 比如设置stage为负数的会提前执行
   before表示在哪个事件之前执行，stage不要与before混用，容易混乱
   */
syncHook.tap('plugin1', (name, age) => {
  console.log('plugin1', name, age)
})

syncHook.tap('plugin2', (name, age) => {
  console.log('plugin2', name, age)
})

syncHook.tap({
  name: 'plugin3',
  stage: -1
}, (name, age) => {
  console.log('plugin3', name, age)
})

syncHook.tap({
  name: 'plugin4',
  before: 'plugin3'
}, (name, age) => {
  console.log('plugin4', name, age)
})

// 触发事件
syncHook.call('cc', 18)