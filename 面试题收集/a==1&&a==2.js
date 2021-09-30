// var a = 0;
let v = 0

Object.defineProperty(window, 'a', {
  get() {
    return ++v
  }
})

if(a===1 && a===2 &&  a===3) {
  console.log('deeproute')
}