async function foo() {
    console.log(1)
    Promise.reject(2)
}

foo().catch(console.log)

console.log(3)


async function foo() {
    console.log(await Promise.resolve('foo'))
}

async function baar() {
    console.log(await 'baar')
}

async function baz() {
    console.log('baz')
}

foo()
baar()
baz()


async function foo() {
    console.log(2)
    console.log(await Promise.resolve(8))
    console.log(9)
}

async function bar() {
    console.log(4)
    console.log(await 6)
    console.log(7)
}

console.log(1)
foo()
console.log(3)
bar()
console.log(5)

new Promise(resolve => {
    resolve()
}).then(() => {
    console.log(1)
}).then(() => {
    console.log(2)
}).then(() => {
    console.log(3)
})

new Promise(resolve => {
    resolve()
}).then(() => {
    console.log(4)
}).then(() => {
    console.log(5)
}).then(() => {
    console.log(6)
})