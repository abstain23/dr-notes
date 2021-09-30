// 空值合并运算符：只有左侧表达式结果为 null 或 undefined 时，才会返回右侧表达式的结果。通过这种方式可以明确地区分 undefined、null 与 false 的值
console.log(a === null || a === void 0 ? void 0 : a.a);
console.log(0 !== null && 0 !== void 0 ? 0 : 1);
console.log(0 || 1);
console.log(false || 1);
console.log(false !== null && false !== void 0 ? false : 1);