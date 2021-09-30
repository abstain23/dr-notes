function add(a ,b) {
    return new Promise(r => {
        r(Number(a) + Number(b))
    })
} //已经实现了

add(3, 5).then(res => {
    console.log(res) // 8
})


function sum(arr){
    let p = Promise.resolve(0)
    return arr.reduce((pre, next) => {
        return pre.then(res => add(res, next))
    }, p)
}

sum([1, 2, 3, '4']).then(res => {
    console.log(res) // 10
})