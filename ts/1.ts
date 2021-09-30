function useCommon(fn, time) {
  const fnRef = useRef<() => void>()

  fnRef.current = fn

  useEffect(() => {
    const timer = window.setInterval(() => {
      fnRef.current?.()
    }, time)

    const fcc= () => {

    }

    document.addEventListener('visibilitychange',fcc)

    return () => {
      clearInterval(timer)
      document.removeEventListener('visibilitychange', fcc)
    }
  }, [])
}

interface Key {
  a: number
  b: string
  c: boolean
  d?: () => void
  
}


type Kk = keyof Key 

const key:Kk = 'a'


type cc = ('1' | '2' | '3') extends ('1' | '2' | '3' | '4') ? 'true' : 'false'

type dd = ('1' | '2' | '3') extends '1' ? 'aaaaa' : 'bbb'

function a1<T extends cc>(a: T): T {
  return a
}

a1('true')

type a = {
  a: string
  b: number
} | {
  a: number
}


type b = {
  a: string
}

type c = Exclude<'a' | 'b' | 'c', 'a'>
type d = Extract<a, b>

type f = Pick2<{a: string; b: number; c: boolean}, 'a' | 'c'>

type dd2 = Omit2<b, 'a'>

type Pick2<T, K extends keyof T> = {
  [P in K]: T[P]
} 

type Omit2<T, U extends keyof T> = Pick2<T, Exclude<keyof T, U>>

type test1 = 'a' extends 'c' ? 'c': 'd'
type test2 = 'b' extends 'c' ? 'c': 'd'
type test3 = 'c' extends 'c' ? 'c': 'd'

type test = test1 | test2 | test3





type T1 = 'x' | 'y'

type AB<T> = T extends 'x' ? 'a' : 'b';

type AB1 = T1 extends 'x' ? 'a' : 'b'; // 为什么这样写类型推断为 'b'

type AB2 = AB<T1> // 而这样写就是推断为 'a' | 'b'

// type AB3 =  ('y' extends 'x' ? 'a' : 'b') | ('x' extends 'x' ? 'a' : 'b') 

// type AB4 =  ('x' extends 'x' ? 'a' : 'b') | ('y' extends 'x' ? 'a' : 'b') 