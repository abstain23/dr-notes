import React, { memo, useState } from 'react'

export default memo(function Index() {
  const [count, setCount] = useState(() => {
    console.log('init')
    return 1
  })
  return (
    <div>
      <h1>test useState</h1>
      <div>{count}</div>
      <button onClick={() => setCount(v => v + 1)}>+1</button>
    </div>
  )
})


