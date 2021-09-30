function typeOf(val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase()
}


// 继承
function cc(o) {
  function F() { }
  F.prototype = o.prototype
  return new F()
}

function cc2(child, parent) {
  const prototype = cc(parent)
  child.prototype = prototype
  child.prototype.constructor = child
}

function cc3(child, parent) {
  child.prototype = Object.create(parent.prototype)
  child.prototype.constructor = child
}


// 发布订阅
class EventBus {
  constructor() {
    this.events = {}
  }

  on(eventName, cb) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    cb = typeof cb === 'function' ? cb : () => { }
    this.events[eventName].push(cb)
  }

  emit(eventName, ...args) {
    this.events[eventName] && this.events[eventName].forEach(cb => {
      cb.call(this, ...args)
    })
  }

  off(eventName, cb) {
    if (!cb) {
      this.events[eventName] = []
      return
    }
    let index = this.events[eventName] && this.events[eventName].findIndex(item => cb === item)
    if (index !== -1) {
      this.events[eventName].splice(index, 1)
    }
  }

  once(eventName, cb) {
    const fun = (...args) => {
      cb.apply(this, args)
      this.off(eventName, fun)
    }
    this.on(eventName, fun)
  }
}

const ev = new EventBus()
ev.on('cc', () => {
  console.log(1)
  ev.on('cc', () => {
    console.log(2)
  })
})

ev.emit('cc')
ev.emit('cc')
ev.emit('cc')


// 渲染字符串模板
function render(template, data) {
  const reg = /\{\{(\w+)\}\}/
  while (reg.test(template)) {
    const key = reg.exec(template)[1]
    template = template.replace(reg, data[key])
  }
  return template
}

const template = '我叫{{name}}，今年{{age}}'
const data = {
  name: 'ccc',
  age: 18
}
console.log(render(template, data))


// 防抖
function debounce(func, wait, immediate) {

  var timeout, result;

  var debounced = function () {
    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      if (callNow) result = func.apply(context, args)
    }
    else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait);
    }
    return result;
  };

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}

const fn = () => 'fn'

console.log(debounce(fn, 1000, false)())



Array.prototype.reduce2 = function(fn, initialValue) {
  const arr = Object(this)
  if(arr.length === 0 && !initialValue) {
    throw new TypeError('Reduce of empty array with no initial value')
  }
  let len = arr.length >>> 0
  let res = initialValue || arr[0]
  let startIndex = initialValue ? 0 : 1
  for(let i = startIndex; i < len; i++) {
     res = fn(res, arr[i], i, arr)
  }
  return  res
}


const a = [1,2]
console.log(a.reduce((a, b) => {
  console.log('aaaaaa')
  return a + 44444
}))

console.log([111111].reduce(() => {
  return 111
}, 1))