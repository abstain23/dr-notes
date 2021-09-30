/**
 * var bg1 = new BigInt('111231')
 * var bg2 = new BigInt('123499999922222212222)
 * console.log(bg1.add(bg2))
 */

function BigInt(value) {
    this.value = value
}

BigInt.prototype.add = function(bigInt) {
    const bgArr1 = this.value.split('')
    const bgArr2 = bigInt.value.split('')

    const resStack = []
    let count = 0
    while(bgArr1.length !== 0 || bgArr2.length !== 0) {
        const item1 = bgArr1.pop() || 0
        const item2 = bgArr2.pop() || 0
        
        const sum = parseInt(item1) + parseInt(item2) + count
        if(sum < 10) {
            resStack.unshift(sum)
            count = 0
        } else {
            resStack.unshift(sum - 10)
            count = 1
        }
    }
    if(count !== 0) {
        resStack.unshift('1')
    }
    return resStack.join('')
}

var bg1 = new BigInt('9999999999999999999999999999999999999')
var bg2 = new BigInt('99999')

console.log(bg1.add(bg2))