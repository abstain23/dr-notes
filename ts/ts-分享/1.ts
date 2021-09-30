// interface Foo {
//   (a: number, b: number): number
//   dispalyName: string
//   paramsCount: number
// }

type Foo1 = ((a: number, b: number) => number)  
            & 
            {
              dispalyName: string
              paramsCount:number 
            }




const foo: Foo1 = (a, b) => {     return a + b }  

foo.dispalyName = 'foo'

foo.paramsCount = 2

type Foo2 = Foo1 extends 1 ? '1': '2'



function bar<T>(a: T): T {
  return a
}

const bar2 = <T>(a: T): T => a



export {}

interface Foo {
  (a: number, b: number): number
  displayName: string
}

type Foo12 = ((a: number, b: number) => number ) & {
  displayName: string
}

const FFFFF: Foo = (a, b) => a +b

FFFFF.displayName = ''

type AA = '1' | '2'

interface AA2 {
  a: number
}

type AA = '3'

interface AA3 extends AA2 {
  b: string
}

// const A:AA3 = {}


const Bar = <T>(a: T) => a

function Bar2<T>(a: T) {
  return a
}

interface Key2 {
  a: number
  b: string
  c: boolean
  d?: () => void
}

type ALlPartial = {
  [K in keyof Key2]?: Key2[K]
}

type AllRequired = {
  [K in keyof Key2]-?: Key2[K]
}

type MyParyial<T> = {
  [K in keyof T]?: T[K]
}

type test11 = MyParyial<Key2>

type MyRequired<T> = {
  [K in keyof T]-?: T[K]
}
type test2 = MyRequired<Key2>

type pickAB = {
  [K in ('a' | 'b')]: Key2[K]
}

type MyPick<T, U extends keyof T> = {
  [K in U]: T[K]
}
type test3 = MyPick<Key2, 'a' | 'b'>


type BBB = undefined | 2

type excludeD = exclude<keyof Key2, 'd'>

type OmitD = MyPick<Key2, excludeD>



type exclude<T, U> = T extends U ? never : T

// a| b |c | d  d  d extends d ? ne

type MyOmit<T, U extends keyof T> = MyPick<T, exclude<keyof T, U>>

type test4 = MyOmit<Key2, 'd'>

type CCC = Partial<Key2>

type FunctionType = (a: number, b: string, c:() => void, d: {
  name: string
  age: number
}) => number

// infer
type DDDDDD = ReturnType<FunctionType>
type FFFFFF = Parameters<FunctionType>