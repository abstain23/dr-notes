const pLimit = limit => {
  if (!((Number.isInteger(limit) || limit === Infinity) && limit > 0)) {
    throw new TypeError('Expected `limit` to be a number from 1 and up')
  }

  const queue = []
  let activeCount = 0

  function next() {
    activeCount--
    if (queue.length > 0) {
      queue.shift()()
    }
  }

  async function run(fn, resolve, ...args) {
    activeCount++
    const res = (async () => fn(...args))()
    resolve(res)
    try {
      await res
    } catch (error) {}
    next()
  }

  function enQueue(fn, resolve, ...args) {
    queue.push(run.bind(null, fn, resolve, ...args))
    ;(async () => {
      await Promise.resolve()
      if (activeCount < limit && queue.length > 0) {
        queue.shift()()
      }
    })()
  }

  return function generator(fn, ...args) {
    return new Promise(resolve => {
      enQueue(fn, resolve, ...args)
    })
  }
}

const limit = pLimit(3)

function asyncFun(value, delay) {
  return new Promise(resolve => {
    console.log('start ' + value)
    setTimeout(() => resolve(value), delay)
  })
}

;(async function () {
  const arr = [
    limit(() => asyncFun('aaa', 2000)),
    limit(() => asyncFun('bbb', 3000)),
    limit(() => asyncFun('ccc', 1000)),
    limit(() => asyncFun('ccc', 1000)),
    limit(() => asyncFun('ccc', 1000))
  ]
  console.time()
  const result = await Promise.all(arr)
  console.timeEnd()
  console.log(result)
})()
