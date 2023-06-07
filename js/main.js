'use strict';

//* =======Математичні оператори====

const x = 15;
const y = 10;
const s = 3;

//3 Додавання
// console.log(x + y);

//3 Віднімання
// console.log(y - x);

//3 Множеня
// console.log(x * y);

//3 Ділення
// console.log(x / y);

//3 Залишок від Ділення
// console.log(y % s);

//* =======Оператори порівняння====
const a = 5;
const b = 7;
const c = 6;

// console.log('a>b', a > b);
// console.log('a<b', a < b);
// console.log('a <= c', a <= c);
// console.log('a >= c', a >= c);
// console.log('a >= c', a >= c);

//* Cувора рівність та рівність по типам

console.log('a == c:', a == c);
console.log('a != b:', a !== b);

console.log('a === c:', a === c);
console.log('a !== c:', a !== c);

console.log(5 === '5');
console.log(5 == '5');

//* числа

const value = '6';
const str = 'Hello!';
console.log('Number:>>', typeof Number(value));
console.log('Number:>>', value);
console.log('Number:>>', Number(str));

const valueA = '5';
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // "number"

const valueB = 'random string';
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // "number"
