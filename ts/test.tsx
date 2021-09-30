const foo = <T extends any>(arg: T) => arg


interface Obj {
  a: number
  b: string
}

type C = Pick<Obj, 'a'>

const obj = {
  a: 1,
  b: '2'
}


function pick<T extends object, U extends keyof T>(obj: T, keys: U[]): T[U][] {
  return keys.map((key) => obj[key]);
}

const ccc = pick(obj, ['a', 'b'])


interface Foo {
  [keys: string]: string;
}

type b3 = keyof Foo

declare function strOrnum<T extends boolean>(
  x: T
): T extends true ? string : number;

const sss = strOrnum(false)
const sss2 = strOrnum(true)


type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";


type T3 = TypeName<string[] | number[]>

const nnn = (a: string) => a

type ReturnType2<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

type nnn2 = ReturnType<typeof nnn>



const a111111: BBBBBB = (v) => v
a111111.age = 1

a111111(1)
a111111.age

// v: number a.age: number
type Aaaaa = (v: number) => number

interface BBBBBB {
  (v: number): number
  age: number
}