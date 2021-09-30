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
    if(!cb) {
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

ev.on('test1', (...args) => {
  console.log('test1', ...args)
})
ev.on('test1', () => {
  console.log('test1 2')
})

ev.on('test1', () => {
  console.log('test1 3')
})

ev.once('test2', () => {
  console.log('test2')
})

ev.emit('test1', 'abc')

ev.emit('test1', 'abc')

ev.emit('test2')
ev.emit('test2')

ev.off('test1')
ev.emit('test1', 'abc')