var obj = {
    a: 'hello'
}

console.log(Object.prototype.toString.call(obj))


Object.defineProperty(obj, Symbol.toStringTag, {
    get() {
        return 'aaa'
    }
})

console.log(Object.prototype.toString.call(obj))


// console.log(1 instanceof obj)
Object.defineProperty(obj, Symbol.hasInstance, {
    // value: () => true
    get() {
        return () => true
    }
})

console.log(1 instanceof obj)


class Person {
    constructor() {
        this.a = 1
    }
}
// var p = new Person()

// Person.prototype.
Object.prototype.constructor = 'aaaa'

console.log(obj instanceof Object)
console.log(obj instanceof Person.prototype)
// console.log(p instanceof Person)