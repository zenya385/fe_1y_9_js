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

const string = 'qwerty';

// console.log('typeof str:>>', typeof string);

// console.log('a>b', a > b);
// console.log('a<b', a < b);
// console.log('a <= c', a <= c);
// console.log('a >= c', a >= c);
// console.log('a >= c', a >= c);

//* Cувора рівність та рівність по типам

// console.log('a == c:', a == c);
// console.log('a != b:', a !== b);

// console.log('a === c:', a === c);
// console.log('a !== c:', a !== c);

// console.log(5 === '5');
// console.log(5 == '5');

//* числа

const value = '6';
const str = 'Hello!';
// console.log('Number:>>', typeof Number(value));
// console.log('Number:>>', value);
// console.log('Number:>>', Number(str));

const valueA = '5';
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

const valueB = 'random string';
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

const num1 = '5px';
const num2 = 10;

// console.log(num1 === num2); // false
// console.log(num1 !== num2); // true

// console.log('typeof:>>', typeof num1);

// console.log(':>>', Number(num1)); //NaN (Not a Number).

//* ============ Number.parseInt()  та   Namber.parseFloat ================

// console.log(Number.parseInt(num1)); //5

// console.log(Number.parseInt('7.6px')); //7
// console.log(Number.parseInt('r7px')); //NaN
// console.log(Number.parseInt('8787px')); //8787
// console.log(Number.parseInt('7px777')); //7
// console.log(Number.parseInt('qwerty')); //NaN
// console.log(Number.parseInt(5.1537752e47)); //5

// console.log(Number.parseFloat('5px')); //5
// console.log(Number.parseFloat('7.6px')); //7.6
// console.log(Number.parseFloat('8787.589px')); //8787.589
// console.log(Number.parseFloat('qwert5.45px')); // NaN
// console.log(Number.parseFloat('qwerty')); // NaN

// const validNumber = Number('51'); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number('qweqwe'); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// console.log('0.1+0.2:>>', 0.1 + 0.2);

//* ====================== Math =========================
// Math.floor(num) - повертає найменше ціле число,
// менше, або яке дорівнює зазначеному числу
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає найбільше ціле число,
// більше, або яке дорівнює зазначеному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа,
// округленого до найближчого цілого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - піднесення до степеня
console.log(Math.pow(2, 4)); // 16

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
console.log(Math.random()); // випадкове число між 0 і 1
console.log(Math.random() * (10 - 1) + 1);


