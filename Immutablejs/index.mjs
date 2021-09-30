// import {Map} from 'immutable'

// const obj1 = Map({name: 'zhangsan', age: 18})
// const obj2 = obj1

// obj2.set({name: 'lisi'})
// // obj2.clear()
// obj2.set('name', 'cccc')

// console.log(obj1.get('name'))
// console.log(obj2.get('age'))


import { Map} from 'immutable';
let a = Map({
  select: 'users',
  filter: Map({ name: 'Cam' })
})
let b = a.set('select', 'people');

console.log(b.get('select'))
console.log(a.get('select'))

console.log(a === b) // false
a.get('filter') === b.get('filter')