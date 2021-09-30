interface A {
  a: number
  b: string
}

type AA<T> = {
  [K in keyof T]: string
}

type C = AA<A>

type D = {
  a: number
  b: number
  c: {

  }
}

// https://mp.weixin.qq.com/s/-1I8MGP2Nj2YGulX04cTBg

// extends 表示 A的属性在D中要全部拥有
type ff = D extends A ? D : {}



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

// "string" | "function"
type T1 = TypeName<string | (() => void)>

// "string" | "object"
type T2 = TypeName<string | string[]>

// "object"
type T3 = TypeName<string[] | number[]>


type Naked<T> = T extends boolean ? "Y" : "N";
type Wrapped<T> = [T] extends [boolean] ? "Y" : "N";

type Distributed = Naked<number | boolean>;

type NotDistributed = Wrapped<number | boolean>

const foo = (): string => {
  return "linbudu";
};

// string
type FooReturnType = ReturnType<typeof foo>;

type ReturnType2<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any


export const isString = (arg: unknown): arg is string =>
  typeof arg === "string"

  function useIt(numOrStr: number | string) {
    if (isString(numOrStr)) {
      console.log(numOrStr.length);
    } else {
      console.log(numOrStr === 1)
    }
  }


  class A {
    public a1() {}
  
    public useA() {
      return "A";
    }
  }
  
  class B {
    public b() {}
  
    public useB() {
      return "B";
    }
  }

  const c = (v: A | B): v is A => v

  function testq11() {
    if(c) {
      console.log()
    }
  }
  
type OO = {
  a: number
  b: string
  c: boolean
}

type c = Pick<OO, 'a' | 'b'>
type d = Omit<OO, 'a'>
type f = Exclude< OO, {a: number; b: boolean}>

type T0 = Exclude<'a' | 'b' | 'c', 'b'> // 'a' | 'c'
type T11 = Exclude<string | number | boolean, boolean> // string | number

type TTTTT = (string | number | boolean) extends number ? 1 : 2

type Exclude2<T, U> = T extends U ? never: U 

type AB<T> = T extends 'x' ? 'a' : 'b';

type All = AB<'x' | 'y'>; // 非确定条件，可能是 'x' 或 'y'
// 得到 type All = 'a' | 'b';



type Omit2<K, T extends keyof any> = Pick<K, Exclude<keyof K, T>>

type Kkk = {
  a: string
  b: never
}

const kkkk:Kkk = {
  a: 'a'
}

type CCC = {
  a: number
  b: number
}

// returnTYpe pick partial omit exclude  keyof typeof in is  （infer）

type AAAAAA = Record<'x'|'y', number>

type ParamType<T> = T extends (...args: infer P) => any ? P : T

type Fun = (num: number, s: string) => void

type cccccc = ParamType<Fun>

interface User {
  name: string;
  age: number;
}


const fcc:cccccc = 1

export {}