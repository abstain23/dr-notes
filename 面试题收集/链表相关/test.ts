// function f(a: string | number, b: string | number) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a + ':' + b; // no error but b can be number!
//   } else {
//     return a + b; // error as b can be number | string
//   }
// }

// f(1, '2')
type Foo = {
	a: number;
	b?: string;
	c: boolean;
}

type SetOptional<T, U extends keyof T> = Omit<T, U> & Partial<Pick<T, U>>

type AA = SetOptional<Foo, 'a' | 'b'>

const a: AA = {
	c: false
}
// type C = Omit<Foo, 'a'>
// type C2 = Pick<Foo, 'a' | 'b'>
type SetRequired<T, U extends keyof T> = Omit<T, U> & Required<Pick<T, U>>