const arr = [1, 2, 3]

// function cc(arr) {
//     for (let index = 0; index < arr.length; index++) {
//         setTimeout(() => {
//             console.log(arr[index])
//         }, (index + 1) * 1000)
//     }
// }
// cc(arr)

function cc(arr) {
    arr.reduce((p, x) => {
        return p.then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(x)
                    resolve()
                }, 1000)
            })
        })
    }, Promise.resolve())
}
cc(arr)


function red() {
    console.log('red')
}

function green() {
    console.log('green')
}

function yellow() {
    console.log('yellow')
}

function delay(cb, ms) {
    return new Promise((r) => {
        setTimeout(() => {
            r(cb())
        }, ms)
    })
}

async function step() {
    await delay(red, 3000)
    await delay(yellow, 2000)
    await delay(green, 1000)
    step()
}
step()

