### typeof

```js
console.log(typeof null)
console.log(typeof [])
console.log(typeof new Function())
console.log(typeof new Date())
console.log(typeof {})
// typeof有个明显的bug就是typeof null为object;
// typeof无法区分各种内置的对象，如Array, Date等。

```

#### 原理

- JS是动态类型的变量，每个变量在存储时除了存储变量值外，还需要存储变量的类型。JS里使用32位（bit）存储变量信息。低位的1~3个bit存储变量类型信息，叫做类型标签(type tag)

```js

.... XXXX X000 // object
.... XXXX XXX1 // int
.... XXXX X010 // double
.... XXXX X100 // string
.... XXXX X110 // boolean

```

#### 如何识别Function

- 函数并没有单独的type tag，因为函数也是对象。typeof内部判断如果一个对象实现了[[call]]内部方法则认为是函数

#### 如何识别undefined

- undefined变量存储的是个特殊值JSVAL_VOID（0-2^30），typeof内部判断如果一个变量存储的是这个特殊值，则认为是undefined

#### 如何识别null

- null变量存储的也是个特殊值JSVAL_NULL，并且恰巧取值是空指针机器码(0)，正好低位bit的值跟对象的type tag是一样的，这也导致著名的bug: `typeof null === 'object'`


### Object.prototype.toString

#### 原理

- 内部属性 [[Class]]
    - 每个对象都有个内部属性[[Class]]，内置对象的[[Class]]的值都是不同的（"Arguments", "Array", "Boolean", "Date", "Error", "Function", "JSON", "Math", "Number", "Object", "RegExp", "String"），并且目前[[Class]]属性值只能通过Object.prototype.toString访问。

- Symbol.toStringTag属性
    - 其实Object.prototype.toString内部先访问对象的Symbol.toStringTag属性值拼接返回值的。

```js

var obj = {
    a: 'hello'
}

console.log(Object.prototype.toString.call(obj))


Object.defineProperty(obj, Symbol.toStringTag, {
    get() {
        return 'aaaaaa'
    }
})

console.log(Object.prototype.toString.call(obj))


如果哪个货偷偷修改了内置对象的Symbol.toStringTag属性值，那Object.prototype.toString也就不能正常工作了

```


### instanceof

- instanceof 操作符判断构造函数constructorFunc的prototype属性是否在对象object的原型链上。

```js

Object instanceof Function // true

'' instanceof String // false

String('') instanceof String // false

new String('') instanceof String // true

```

#### 原理

- Symbol.hasInstance函数