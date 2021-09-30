
const fooT2 = <T extends any>(a: T): T => a

function bar<T>(a: T): T {
  return a
}

interface A {
  a: number
  b: string
  c: boolean
}

interface B {
  a: number
  b: string
}



type C = A extends B ? true : false

interface Key {
  a: number
  b: string
  c: boolean
  d?: () => void
}

type AllString = {
  [K in keyof Key]: string
}


type AllPartial = {
  [K in keyof Key]?: Key[K]
}

type AllRequired = {
  [K in keyof Key]-?: Key[K]
}

type dddd = Required<Key>

type myPick = {
  [K in ('a' | 'b')]: Key[K]
}

type exclude<T, U> = T extends U ? never : T

type excludeC = exclude<keyof Key, 'c'>

type omitC = {
  [K in excludeC]: Key[K]
}

export {}