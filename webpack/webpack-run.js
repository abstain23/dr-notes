const webpack = require('webpack')

const compiler = webpack({
  mode: 'development'
})

Object.keys(compiler.hooks).forEach(hookName => {
  if(compiler.hooks[hookName].tap) {
    compiler.hooks[hookName].tap('ansString', () => {
      console.log(`run => ${hookName}`)
    })
  }
})

compiler.run()