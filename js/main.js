'use strict';

// ============================ function declaration ===============================

// function name(params) {
//   // тіло вункції
// }
// ============================ function expression ================================

// const name = function (params) {
//   // тіло вункції
// };
// !=============================================================================================
// declaration();
// // expression();  Помика викли функції по її обявлення function expression:>>

// function declaration() {              //* Оголошення функції
//   console.log('function declaration:>>');
// }

// const expression = function () {      //* Функціональний вираз
//   console.log('function expression:>>');
// };

// const arowFunction = () => {};         //* Cтрілочна функція
// () => {};                             //* Анонімна стрілочна функція

// declaration();
// expression();
// arowFunction()
// ! ==========================================================================================

// let summ = 0;

// function addElemnt(a, b, c) {
//   console.log(`Результат функції ${a + b + c} `);
// }

// addElemnt(1, 2, 3);
// addElemnt(10, 20, 30);
// addElemnt(11, 22, 33);

//* Оператор return використовується для передачі значення з тіла функції у зовнішній код.
//* Коли інтерпретатор зустрічає return, він відразу ж виходить
//* з функції(припиняє її виконання), і повертає вказане значення у те місце коду, де була викликана функція.

// function multiply(x, y, z) {
//   console.log('Код до return виконується звичайним чином');

//   // Повертаємо результат виразу множення
//   return x * y * z;

//   console.log('Цей лог ніколи не виконається, він стоїть після return');
// }

// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

//  ================================================== Порядок виконання коду =======================================

// function multiply(x, y, z) {
//   console.log('x:>>', x);
//   console.log('y:>>', y);
//   console.log('z:>>', z);
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// console.log('Лог до виклику функції multiply');

// multiply(48, 18, 23); // Результат множення дорівнює 30

// console.log('Лог після виклику функції multiply');

// Послідовність логів в консолі
// "Лог до виклику функції multiply"
// "Результат множення дорівнює 30"
// "Лог після виклику функції multiply"

//  ================================================== Параметри за замовчуванням =======================================

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

//  ================================================== Псевдомасив arguments =======================================

// function multiply() {
//   let total = 1;
//   console.log('arguments:>>', arguments);
//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// // console.log(multiply(1, 2, 3, 4)); //  24
// // console.log(multiply(1, 2, 3, 4, 5)); //  120

// // function fn() {
// //   // Змінна args буде містити повноцінний масив
// //   const args = Array.from(arguments);
// // console.log('args:>>', args);
// // }

// function fn(...args) {
//   // Змінна args буде містити повноцінний масив
//   console.log('args:>>', args);
// }

// fn(1, 2, 3, 3, 45);

// =============================================== Стек викликів ====================================

const fnA = function () {
  console.log('Виконується функція A');
  fnB();
};

const fnB = function () {
  console.log('Виконується функція B');
  fnC();
};

const fnC = function () {
  console.log('Виконується функція C');
};

// ========================================================
console.log('Лог перед викликом функції A');
fnA();
console.log('Лог після виклику функції A');

// console.log('Лог перед викликом функції B');
// console.log('Лог після виклику функції B');

// console.log('Лог перед викликом функції C');
// console.log('Лог після виклику функції C');
