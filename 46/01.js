// 查找数组元素位置

// 找出元素item在给定数组arr中的位置

// 如果元素存在就返回元素所在的位置，不存在就返回-1

// [1,2,3,4], 3  => 2


function indexOf(arr, item) {
    if (!arr || !Array.isArray(arr)) return
    if (Array.prototype.indexOf) {
        return arr.indexOf(item)
    } else {
        for (let i = 0, len = arr.length; i < len; i++) {
            if (item === arr[i]) return i
        }
        return -1
    }
}


// append 不要修改原数组 结果返回新的数组 [1,2], 3 => [1,2,3]

function append(arr, item) {
    return [...arr, item]
}

function remove(arr, item) {
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] === item) arr.splice(i, 1)
    }
    return arr
}

function add(...args) {
    let len = 0;
    let res = 0
    args.forEach(arg => {
        const temp = arg.toString().split('.')[1] ? arg.toString().split('.')[1].length : 0
        res += arg
        if (temp > len) len = temp
    })
    return res.toFixed(len)
}

console.log(add(0.1, 0.2, 0.01, 0.003))

function multi(...args) {
    let len = 0;
    let res = 1
    args.forEach(arg => {
        const temp = arg.toString().split('.')[1] ? arg.toString().split('.')[1].length : 0
        res *= arg
        len += temp
    })
    return res.toFixed(len)
}

console.log(multi(0.12, 0.21, 0.3))

function multiply() {
    let args = Array.prototype.slice.call(arguments, 0)
    args = args.map(item => {
        let str = item + ''
        let right = str.split('.')[1]
        let num = item * Math.pow(10, right.length)
        return {
            num,
            pow: right.length
        }
    })
    let res = 1,
        pow = 0
    args.forEach(v => {
        res *= v.num
        pow += v.pow
    })
    res /= Math.pow(10, pow)
    return res
}

console.log(multiply(0.12, 0.21, 0.3))