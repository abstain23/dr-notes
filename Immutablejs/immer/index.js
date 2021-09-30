const {produce} = require('immer')

let currentState = {
  p: {
    x: [2],
  },
  a: []
}


// let o1 = produce(currentState, draft => {
//   draft.p.x = 1
// })

// console.log(currentState)

// console.log(o1)

// console.log(fn(currentState));
// console.log(currentState)
// function fn(o) {
//   return produce(o, draft => {
//     draft.p1 = 1;
//   })
// };

let nextState = produce(currentState, (draft) => {

})

console.log(currentState === nextState)

nextState = produce(currentState, (draft) => {
  draft.a.push(2);
  // return {a: 1}
})

console.log(nextState)

console.log(currentState === nextState)
console.log(currentState.p === nextState.p)

nextState.p.x = 2
console.log(nextState.p.x)
nextState.p.x.push(5)
console.log(nextState.p.x)