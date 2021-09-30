// 泛型
function foo(a: unknown): unknown {
  return a
}

const a = foo(1);

(a as number).toFixed(2)


function fooT<T>(a: T):T {
  return a
}

fooT<string>('1111')

// 箭头函数泛型

const fooT2 = <T>(a: T): T => a

// keyof

interface Key {
  a: number
  b?: string
}

type Kk = keyof Key

let k: Kk = 'a' 

k = 'b'

type Kks<T> = {
  [key in keyof T]: string
}

type AllString = Kks<Key>


type Pr = Partial<Key>


interface A {
  a: number
  b: string
  c: boolean
}

interface B {
  a: number
  b: string
}

// const foo1 = (a, b) => {
//   return a + b
// }

// foo1.dispalyName
// foo1.paramsCount


type C = A extends B ? 1 : 2

type D = Pick<A, 'c'>
type F = Omit<A, 'c'>

export {}


