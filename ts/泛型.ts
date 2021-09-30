type A<T = any> = {
  a: T
}

const a:A<number> = {
  a: 1
}
const createArr = <T>(length: number, val: T):Array<T> => {
  const res: T[] = []

  return res
}

console.log(a?.a) // 1
console.log(0??1) // 0
console.log(0 || 1) // 1
console.log(false || 1) // 1
console.log(false??1) // false

const arr: [2, 1] = [2, 1]

let arr2: number[] = []



interface Sum {
  (a: number, b: number): number
}

const aq:Sum = (a, b) => a+ b
aq(1, 2).toFixed
