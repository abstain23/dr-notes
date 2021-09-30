const loaderUtils = require('loader-utils') 

module.exports = function(source) {
  console.log(source)
  console.log(this.rootContext)
  console.log('___options', this.query)
  const options = loaderUtils.getOptions(this)
  console.log(options)
  console.log(options.context)
  return source.replace('webpack', 'wwwwwwwwwwww')
}