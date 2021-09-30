const path = require('path')
const fs = require('fs')

function MyModule(id = '') {
    this.id = id
    this.path = path.dirname(id)
    this.exports = {}
    this.filename = null
    this.loaded = false
}

MyModule.prototype.require = function (id) {
    return MyModule._load(id)
}

MyModule._cache = Object.create(null)

MyModule._load = function (id) {
    const filename = MyModule._resolveFilename(id)

    const cacheModule = MyModule._cache[filename]
    if (cacheModule !== undefined) {
        return cacheModule.exports
    }

    const module = new MyModule(filename)

    // load之前就将这个模块缓存下来，这样如果有循环引用就会拿到这个缓存，但是这个缓存里面的exports可能还没有或者不完整
    MyModule._cache[filename] = module;

    module.load(filename)
    return module.exports
}

MyModule._resolveFilename = function (id) {
    const filename = path.resolve(id)
    const extname = path.extname(id)
    if (!extname) {
        const exts = Object.keys(MyModule._extensions)
        for (let i = 0; i < exts.length; i++) {
            const currentPath = `${filename}${exts[i]}`
            if (fs.existsSync(currentPath)) {
                return currentPath
            }
        }
    }
    return filename
}


MyModule.prototype.load = function (filename) {
    const extname = path.extname(filename)
    MyModule._extensions[extname](this, filename)
    this.loaded = true
}

MyModule._extensions['.js'] = function (module, filename) {
    const content = fs.readFileSync(filename, 'utf-8')
    module._compile(content, filename)
}

MyModule._extensions['.json'] = function (module, filename) {
    const content = fs.readFileSync(filename, 'utf8');
    module.exports = JSONParse(content);
}


MyModule.wrapper = [
    '(function (exports, require, module, __filename, __dirname) { ',
    '\n});'
]

MyModule.wrap = function (script) {
    return MyModule.wrapper[0] + script + MyModule.wrapper[1]
}

MyModule.prototype._compile = function (content, filename) {
    const wrapper = MyModule.wrap(content)

    // vm是nodejs的虚拟机沙盒模块，runInThisContext方法可以接受一个字符串并将它转化为一个函数
    // 返回值就是转化后的函数，所以compiledWrapper是一个函数
    const compileWrapper = vm.runInThisContext(wrapper, {
        filename,
        lineOffset: 0,
        displayErrors: true,
    });

    const dirname = path.dirname(filename)
    compiledWrapper.call(this.exports, this.exports, this.require, this,
        filename, dirname)
}