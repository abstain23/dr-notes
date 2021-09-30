// new Promise((resolve, reject) => {
//     setTimeout(function(){
//         resolve('seccess');
//     }, 2000);
// }).then((data) => {
//     console.log(data);   //seccess
// });

let asyncfun = (a,b) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

let g = function * () {
    let res = yield asyncfun(2,2)
    return res
}

// let it = g()

// let p = it.next().value

// p.then(res => {
//     console.log(it.next(res))
// })

function co(it) {
    return new Promise(res => {
        let next = (data) => {
            let {value, done} = it.next(data)
            if(done) {
                res(value)
            } else {
                value.then(res => {
                    next(res)
                })
            }
        }
        next()
    })
}

co(g()).then(res => {
    console.log('res', res)
})