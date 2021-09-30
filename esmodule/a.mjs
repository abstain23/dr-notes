// a.mjs
import {bar} from './b.mjs';
console.log('a.mjs');
console.log(bar());
const foo = function foo() { return 'foo' }
export {foo};

