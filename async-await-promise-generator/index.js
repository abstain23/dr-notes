function getApi(params) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`api result: ${params}`)
        }, 1000)
    })
}

// getApi('statrt').then(res => {
//     getApi(res).then(res => {
//         getApi(res).then(res => {
//             console.log('finish', res)
//         })
//     })
// })

function* gen(step0) {
    console.log(step0)
    let step1 = yield getApi('start')
    console.log('step1', step1)
    let step2 = yield getApi(step1)
    console.log('step2', step2)
    let step3 = yield getApi(step2)
    console.log('step3', step3)
    return 'all done'
}

function* gen2(step0) {
    console.log(step0)
    let step1 = yield 1
    console.log('step1', step1)
    let step2 = yield 2
    console.log('step2', step2)
    let step3 = yield 3
    console.log('step3', step3)
    return 'all done'
}

const it = gen2('start')
it.next()
it.next('dada')
it.next('dada2')
const xx = it.next('dada3')
console.log(xx)

function run(gennerator, v) {
    let {value, done} = gennerator.next(v)
    if(!done) {
        value.then(res => {
            run(gennerator, res)
        })
    } else {
        console.log(value)
        return 'dadad'
    }
}

run(gen('start'))
