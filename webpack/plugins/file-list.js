class  FileListPlugin {
    constructor(options) {
        this.filename = options && options.filename ? options.filename : 'fileList.md'
    }
    apply(compiler) {
        compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, cb) => {
            let len = Object.keys(compilation.assets).length
            let content = `# ${len} file${len > 1 ? 's' : ''} emitted webpack\n\n`
            for(let filename in compilation.assets) {
                content += `- ${filename}\n`
            }
            compilation.assets[this.filename] = {
                source: function() {
                    return content
                },
                size: function() {
                    return content.length
                }
            }
            cb()
        })
    }
}

module.exports = FileListPlugin