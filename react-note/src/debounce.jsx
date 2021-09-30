import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

function useDebounce(fn, ms) {
  console.log('debounce')
  const ref = useRef({})
  // useEffect(() => {
  //   console.log(ref.current)
  //   ref.current.fn = fn
  // }, [fn])

  return useCallback((...args) => {
    if(ref.current.timer) {
      clearTimeout(ref.current.timer)
    }
    ref.current.timer = setTimeout(() => {
      fn(...args)
    }, ms)
  }, [ms, fn])


  // let timer;
  // return function(...args) {
  //   if (timer) {
  //     clearTimeout(timer)
  //   }
  //   timer = setTimeout(() => {
  //     fn(...args)
  //     timer = null;
  //   }, ms);
  // }
}

// const useDebounce = (fn, ms) => {
//   console.log('debounce')
//   return useCallback(debounce(fn, ms), [fn, ms])
// }

export default memo(function Debounce() {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const handleClick = useDebounce(() => setCounter(x => x + 1), 300)

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter2(v => v + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <button
        onClick={handleClick}
      >
        click
      </button>
      <div>{counter}</div>
      <div>{counter2}</div>
    </div>
  )
})
