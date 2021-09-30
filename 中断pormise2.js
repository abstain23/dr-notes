const request = new Promise(resolve => {
    setTimeout(() => {
        resolve('来自服务器的消息')
    }, Math.random() * 3000)
})

const wrapper2 = (p) => {
    let abort
    const p1 = new Promise((_, reject) => {
        abort = reject
    })
    const ps = Promise.race([p, p1])
    ps.abort = abort
    return ps
}
const races = wrapper2(request)
setTimeout(() => {
    races.abort('手动中断')
}, 3000)
races.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})

var pp = new Promise(r => {
    setTimeout(() => {
        r(1, console.log(1))
    }, 1000)
})


/**
 * async1 start
 * asyn2
 * start
 * asyn1 end
 * timer2
 * timer3
 * timer1
 * 
 * 
 * 
 * test start ...
 * 执行 testsomething
 * promise start
 * test end ...
 * test something
 * 执行testAsync
 * promise
 * hello async
 * test smoething hello async
 * 
 * 
 * script start
 * async1
 * promise1
 * script end
 * 1
 * timer2
 * timer1
 */

const async1 = async () => {
    console.log('async1');
    setTimeout(() => {
        console.log('timer1')
    }, 2000)
    await new Promise(resolve => {
        console.log('promise1')
        resolve(5)
    })
    console.log('async1 end')
    return 'async1 success'
}
console.log('script start');
async1().then(res => console.log(res));
console.log('script end');
Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .catch(4)
    .then(res => console.log(res))
setTimeout(() => {
    console.log('timer2')
}, 1000)

function curryFn(fn, args = []) {
    let len = fn.length

    return (...arg2s) => {

        if(arg2s.length + args.length < len) {
            return curryFn(fn, args.concat(arg2s))
        }
        return fn.apply(this, args.concat(arg2s))
    }
}

    
