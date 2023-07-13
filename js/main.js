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

// type = age >= 18 ? 'adult' : 'child';

// console.log('type:>>', type);

// ============================== switch case ==================================
// new Date().getDay() - Метод getDay()повертає день тижня як число від 0 до 6.
//          Sunday Monday Tuesday Wednesday Thursday Friday Saturday

// switch (значення) {
//   case x:
//     // тіло інструкції
//     break;
//   case y:
//     // тіло інструкції
//     break;
//   default:
//   // тіло інструкції
// }

// switch (значення) {
//   case значення - 1:
//     інструкції;
//     break;

//   case значення - 2:
//     інструкції;
//     break;

//   default:
//     інструкції;
// }

// let cost = null;

// const subscription = 'premium2';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

// console.log(cost);

let day = '';

switch (1) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';

    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;

  default:
    console.log("it's not a day of the week");
    break;
}

// console.log('day:>>', day);

// let text = '';

// switch (new Date().getDay()) {
//   case 4:
//   case 5:
//     text = 'Soon it is Weekend';
//     break;

//   case 0:
//   case 6:
//     text = 'It is Weekend';
//     break;

//   default:
//     console.log('Looking forward to the Weekend');
//     break;
// }

// const animal = 'Giraffe';
// let text;

switch ('Giraffe') {
  case 'Cow':
    text = 'це тварина';
    break;
  case 'Giraffe':
    text = 'це дика тварина';
    break;
  case 'Dog':
    text = 'це домашня тварина';
    break;
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal is extinct.');
}

console.log('text:>>', text);

console.log('varible:>>', varible);

let varible = 'qwe';

console.log('varible:>>', varible);

if (true) {
  const value = 5;
  console.log('Block scope: ', value); // 5
}

console.log('Global scope: ', value); // 5
