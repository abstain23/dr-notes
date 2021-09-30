const {SyncHook} = require('tapable')

const hook = new SyncHook(['arg1', 'arg2'])

hook.tap('syncPlugin1', (...args) => {
  console.log(...args)
})

hook.call(1, 2, 3)