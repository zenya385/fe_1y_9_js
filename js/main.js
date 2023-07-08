'use strict';

// const num = 15;
// const res = num < 10 && num > 20; //false
// console.log('res:>>', res);

// true && true;
// console.log('15===15 && 15!==15:>>', 15 === 15 && 15 !== 15);
// console.log('15==="15" || 15!==15:>>', 15 === '15' || 15 === 15);
// console.log('true && true:>>', true && true);

// console.log('6 && 0:>>', 6 && 0); // 0
// console.log('0 && 6:>>', 0 && 6); // 0
// console.log('0 && null:>>', 0 && null); // 0
// console.log('null && :>>0', null && 0); // null

// console.log('6 || 0:>>', 6 || 0); // 6
// console.log('0 || 6:>>', 0 || 6); // 6
// console.log('0 || null:>>', 0 || null); // null
// console.log('null || 0:>>', null || 0); // 0

//! 0, null, NaN, undefined, '', false - Ці значення прирівнюються до false, всі інші до true;

//* "Купити квиток І відпочити" — якщо лівий операнд "Купити квиток" виявиться false,
//*  то обчислювати другий немає сенсу.

true && false;
true && true;
false && true;

// console.log(
//   'true && false && true && true && true && true;:>>',
//   true && true && true && null && true && ' '
// );

false || true;
true || true;
false || false;
true || false;

// console.log(
//   'false || 1 || 3 || 0 || null || true || false;:>>',
//   false || 1 || 3 || 0 || null || true || false
// );

//* "Купити квиток І відпочити" — якщо лівий операнд "Купити квиток" виявиться false, то обчислювати другий немає сенсу.
//* false && (цей операнд не обчислюється)
//* "Відпочити АБО зберегти гроші" — якщо лівий операнд "Відпочити" виявиться true, то обчислювати другий немає сенсу.
//* true || (цей операнд не обчислюється)

// ========================= if(){} ===============================

// if (умова) {
// тіло if
// }

// let cost = 0;
// // const subscription = 'pro';
// const subscription = 'free';

// if (subscription === 'pro') {
//   cost = 100;
// }

// console.log(cost); // 0
// ===================
// const age = 18;

// if (age >= 18) {
// console.log('adult:>>', 'adult');
// }

// ========================= if(){}else{} ===============================

// if (умова) {
//   тіло if
// } else {
//   тіло else
// }

// let cost;
// const subscription = 'free';

// if (subscription === 'pro') {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0

// ========================= if(){}else if (){}else if (){}elseif{} ===============================

// if () {
//     тіло if
//    } else if (){
//      тіло else if
//    }else if (){
//      тіло else if
//    }else  {
//      тіло else
//    }

// let cost = '';
// const subscription = 'AEtdgaz';

// if (subscription === 'free') {
//   cost = 0;
// } else if (subscription === 'pro') {
//   cost = 100;
// } else if (subscription === 'premium') {
//   cost = 500;
// } else {
//   console.log('Invalid subscription type');
// }

// console.log(cost);

// ========================= Тернарний оператор ===============================

// {умова} ? {вираз якщо умова правдива} : {вираз якщо умова не правдива}

// let type = '';
// const age = 13;
// if (age >= 18) {
//   type = 'adult';
// } else if (age <= 12) {
//   type = 'baby';
// } else if (age >= 13 <= 14) {
//   type = 'teens';
// } else if (age >= 15 && age <= 17) {
//   type = 'child';
// }

// console.log(type);

// adult > 18;
// child  15-17
// teens 13-14
// baby > 12

// {умова} ? {вираз якщо умова правдива} : {вираз якщо умова не правдива}

let type;
const age = 15;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// console.log(type); // "adult"

type = age >= 18 ? 'adult' : 'child';

console.log('type:>>', type);
