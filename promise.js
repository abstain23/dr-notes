const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const resolvePromise = (promise2, x, resolve, reject) => {
    if (promise2 === x) {
        console.log('===')
        throw TypeError('Chaining cycle detected for promise')
    }
    if( x && typeof x === 'object' || typeof x === 'function') {
        let called 
        try {
            let then = x.then
            if(typeof then === 'function') {
                then.call(x, function(y){
                    if(called) return
                    called = true
                    resolvePromise(promise2,y,resolve,reject)
                }, function(e) {
                    if(called) return 
                    called = true
                    reject(e)
                })
            } else {
                resolve(x)
            }
        } catch (e) {
            if(called) return
            called = true
            reject(e)
        }
    } else {
        resolve(x)
    }
}

class Promise {
    constructor(fn) {
        this.state = PENDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledCbs = []
        this.onRejectedCbs = []
        const resolve = (value) => {
            if(this.state === PENDING) {
                this.value = value
                this.state = FULFILLED
                this.onFulfilledCbs.forEach(cb => cb())
            }
        }

        const reject = (reason) => {
            if(this.state === PENDING) {
                this.reason = reason
                this.state = reject
                this.onRejectedCbs.forEach(cb => cb())
            }
        }

        try {
            fn(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}
        let promise2 = new Promise((resolve, reject) => {
            if(this.state === FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {  
                        console.log(e)
                        reject(e)
                    }
                })
            }else if(this.state === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        console.log(e)
                        reject(e)
                    }
                })
            } else {
                console.log(PENDING)
                this.onFulfilledCbs.push(() => {
                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        console.log(e)
                        reject(e)
                    }
                })
                this.onRejectedCbs.push(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        console.log(e)
                        reject(e)
                    }
                })
            }
        })
        return promise2
   }
}


let p = new Promise(resolve => {
    setTimeout(() => {
        console.log(1)
        resolve(3333)
    }, 1000)
})

let p2 = p.then(res => {
    console.log(res)
    return p2
})



/// 20210423
class MyPromise {
    constructor(fn) {
        fn()
    }
}