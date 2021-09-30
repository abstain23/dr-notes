import React, { memo, useCallback, useRef, useState } from 'react'

// function Child() {
//   console.log('render')
//   return <div>child</div>
// }

const Child = memo(function Child() {
  console.log('render')
  return <div>child</div>
})
// let a = new Set()

export default memo(function Index() {
  const {current: a}= useRef(0)
  // const [a] = useState(0)
  // a.add(ref)
  // const []
  const [count, setCount] = useState(0)

  const click = useCallback(() => {
    console.log('cccc')
  }, [])
  // const click = () => {
  //   console.log('xxxx')
  // }
  
  return (
    <div>
      <h1>test callback</h1>
      <div>{count}</div>
      <button onClick={() => {
        setCount(v => v + 1)
        // console.log(a.size)
      }}>+1</button>
      <Child click={click} a={a} />
    </div>
  )
})


