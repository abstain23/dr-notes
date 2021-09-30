const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')


function stepOne(filename) {
  const content = fs.readFileSync(filename, 'utf-8')
  // console.log(content)
  const ast = parser.parse(content, {
    sourceType: 'module'
  })
  // console.log(ast)
  const dependencies = {}
  // console.log(path.dirname(filename))
  traverse(ast, {
    ImportDeclaration({node}){
      const dirname = path.dirname(filename)
      const newFile = './' + path.join(dirname, node.source.value)
      dependencies[node.source.value] = newFile
    }
  })
  // console.log(dependencies)
  const {code} = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  })
  // console.log(filename, dependencies, code)
  return {
    filename,
    dependencies,
    code
  }
}

function stepTwo(entry) {
  const entryModule = stepOne(entry)
  console.log(entryModule)
  const graphArray = [entryModule]
  for(let i = 0; i < graphArray.length; i++) {
    const item = graphArray[i]
    const {dependencies} = item
    for(let j in dependencies) {
      graphArray.push(stepOne(dependencies[j]))
    }
  }
  // console.log(graphArray)
  const graph = {}
  graphArray.forEach(item => {
    graph[item.filename] = {
      dependencies: item.dependencies,
      code: item.code
    }
  })
  // console.log(graph)
  return graph
}

// function step3(entry) {
//   const graph = JSON.stringify(stepTwo(entry))
//   return `
//     (function(graph) {
//       function require(module) {
//         function localRequire(relativePath) {
//           return require(graph[module].dependencies[relativePath])
//         }
//         var exports = {}
//         (function(require, exports, code) {
//           eval(code);
//       })(localRequire, exports, graph[module].code)
//       return expost
//       }
//     })()
//   `
// }

function a(graph) {
  //require函数的本质是执行一个模块的代码，然后将相应变量挂载到exports对象上
  function require3(module) {
    console.log('require')
      //localRequire的本质是拿到依赖包的exports变量
      function localRequire(relativePath) {
          return require(graph[module].dependencies[relativePath]);
      }
      var exports = {};
      (function(require, exports, code) {
          eval(code);
      })(localRequire, exports, graph[module].code);
      return exports;//函数返回指向局部变量，形成闭包，exports变量在函数执行后不会被摧毁
  }
  require('${entry}')
}

//下面是生成代码字符串的操作，仔细看，不要眨眼睛哦！
function step3(entry){
  //要先把对象转换为字符串，不然在下面的模板字符串中会默认调取对象的toString方法，参数变成[Object object],显然不行
  const graph = JSON.stringify(stepTwo(entry))
  return `
      (function(graph) {
          //require函数的本质是执行一个模块的代码，然后将相应变量挂载到exports对象上
          function require(module) {
            console.log('require')
              //localRequire的本质是拿到依赖包的exports变量
              function localRequire(relativePath) {
                  return require(graph[module].dependencies[relativePath]);
              }
              var exports = {};
              (function(require, exports, code) {
                  eval(code);
              })(localRequire, exports, graph[module].code);
              return exports;//函数返回指向局部变量，形成闭包，exports变量在函数执行后不会被摧毁
          }
          require('${entry}')
      })(${graph})`
}

eval(step3('./index.js'))
console.log(step3('./index.js'))