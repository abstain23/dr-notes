var a = 'a'
var c = undefined

function test(v) {
    debugger
    console.time('test')
    for(let i = 0; i < 3000; i++) {
        try {
            v.replace(/c/g, '000')
        } catch (error) {
            
        }
    }
    console.timeEnd('test')
}

test(a)
test(c)