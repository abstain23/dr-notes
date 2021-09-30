import React, { memo, useEffect, useState } from 'react'

export default memo(function Index() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('effect')
    let a = 1
    while(a < 5000) {
      console.log('aaa')
      a ++
    }
    // setCount(v => v  +1)
  })
  console.log('render')

  // useLayoutEffect(() => {
  //   console.log('layout effect')
  //   let a = 1
  //   while(a < 10000) {
  //     console.log('aaa')
  //     a ++
  //   }
  // })
  return (
    <div>
      <h1>test useEffect</h1>
      <div>{count}</div>
      <button onClick={() => setCount(v => v + 1)}>+1</button>
      13123123213231221
    </div>
  )
})


// export default class Index extends React.Component {
//   state = {
//     count: 0
//   }
//   componentDidMount() {
//     console.log('did mount')
//     let a = 1
//     while(a < 5000) {
//       console.log('aaa')
//       a ++
//     }
    
//   }
//   componentDidUpdate() {
//     console.log('did update')
//     let a = 1
//     while(a < 5000) {
//       console.log('aaa')
//       a ++
//     }
//   }
//   render() {
//     return (
//       <div>
//         <div>13123123213231221</div>
//       <div>{this.state.count}</div>
//       <button onClick={() => this.setState({
//         count: this.state.count + 1
//       })}> + 1</button>
//       </div>
//     )
//   }
// }