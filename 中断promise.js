
const request = new Promise(resolve => {
    setTimeout(() => {
        resolve('来自服务器的消息')
    }, Math.random()*3000)
})

const wrapper1 = (p, timeout = 2000) => {
    const p1 = new Promise((_, reject) => {
        setTimeout(() => {
            reject('请求超时')
        }, timeout)
    })
    return Promise.race([p, p1])
}

wrapper1(request).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})