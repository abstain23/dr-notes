// const data = [0, 1, 2, 3, 4]

// Object.keys(data).forEach(key => {
//   let v = data[key]
//   Object.defineProperty(data, key, {
//     get() {
//       console.log('--get--', key)
//       return v
//     },
//     set(newVal) {
//       console.log('--set--', key)
//       v = newVal
//     }
//   })
// })

// // console.log(data[0])
// // console.log(data[2])

// // data[1] = 11111
// // console.log(data[1])
// // console.log(data.pop())
// // console.log(data.splice(1))
// data[4] = 4444
// // console.log(data.pop())
// data[5] = 666
// console.log(data[5])
// console.log(data)
// data[5] = 'cccc'

// const obj = {}
// let initValue = 1

// Object.defineProperty(obj, 'name', {
//   set: function (value) {
//     console.log('set方法被执行了')
//     initValue = value
//   },
//   get: function () {
//     return initValue
//   }
// })
// console.log(obj.name) // 1

// obj.name = [] // 会执行set方法，会打印信息
// obj.name = 000

// // 给 obj 中的name属性 设置为 数组 [1, 2, 3], 会执行set方法，会打印信息
// obj.name = [1, 2, 3]

// // 然后对 obj.name 中的某一项进行改变值，不会执行set方法，不会打印信息
// obj.name[0] = 11

// // 然后我们打印下 obj.name 的值
// console.log(obj.name)

// // 然后我们使用数组中push方法对 obj.name数组添加属性 不会执行set方法，不会打印信息
// obj.name.push(4)

// //使用数组中unshift方法对 obj.name数组添加属性 不会执行set方法，不会打印信息
// obj.name.unshift(5)

// console.log(obj.name, '删除前') //删除前
// obj.name.pop() //删除obj.name数组最后一个元素
// console.log(obj.name, '删除后') //删除后，最后一个元素被删除了，但是set方法并没有执行，

// obj.name.length = 5 // 也不会执行set方法
// console.log(obj.name.length, obj.name[3])

// class Observer {
//   constructor(data) {
//     // 遍历参数data的属性,给添加到this上
//     for (let key of Object.keys(data)) {
//       if (typeof data[key] === 'object') {
//         data[key] = new Observer(data[key])
//       }
//       Object.defineProperty(this, key, {
//         enumerable: true,
//         configurable: true,
//         get() {
//           console.log('你访问了' + key)
//           return data[key] // 中括号法可以用变量作为属性名,而点方法不可以;
//         },
//         set(newVal) {
//           console.log('你设置了' + key)
//           console.log('新的' + key + '=' + newVal)
//           if (newVal === data[key]) {
//             return
//           }
//           data[key] = newVal
//         }
//       })
//     }
//   }
// }

// const obj = {
//   name: 'app',
//   age: '18',
//   a: {
//     b: 1,
//     c: 2
//   },
//   arr: [0, 1, 2]
// }
// const app = new Observer(obj)
// console.log(app.arr)
// console.log(app.arr.push)

// app.age = 20
// console.log(app.age)
// app.newPropKey = '新属性'
// console.log(app.newPropKey)

const obj = {
  name: 'app',
  age: '18',
  a: {
    b: 1,
    c: 2
  },
  arr: [1, 2, 3]
}
const p = new Proxy(obj, {
  get(target, propKey, receiver) {
    console.log('你访问了' + propKey)
    return Reflect.get(target, propKey, receiver)
  },
  set(target, propKey, value, receiver) {
    console.log('你设置了' + propKey)
    console.log('新的' + propKey + '=' + value)
    Reflect.set(target, propKey, value, receiver)
  }
})
// p.age = '20'
// console.log(p.age)
// p.newPropKey = '新属性'
// console.log(p.newPropKey)
// p.arr.push(1)
// console.log(p.a.c)
p.c = {}
console.log(p.c)
