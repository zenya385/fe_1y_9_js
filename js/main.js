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

// function declaration() {
//   console.log('function declaration:>>');
// }

// const expression = function () {
//   console.log('function expression:>>');
// };

const arowFunction = () => {};
() => {};

// declaration();
// expression();
// ! ==========================================================================================
// const a = 3;
// const b = 6;
// const c = 19;

// let summ = 0;

// function addElemnt(a, b, c) {
//   console.log(`Результат функції ${a + b + c} `);
// }

// addElemnt(1, 2, 3);
// addElemnt(10, 20, 30);
// addElemnt(11, 22, 33);

// Оператор return використовується для передачі значення з тіла функції у зовнішній код.
// Коли інтерпретатор зустрічає return, він відразу ж виходить
// з функції(припиняє її виконання), і повертає вказане значення у те місце коду, де була викликана функція.

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
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// console.log('Лог до виклику функції multiply');

// multiply(2, 3, 5); // Результат множення дорівнює 30

// console.log('Лог після виклику функції multiply');

// Послідовність логів в консолі
// "Лог до виклику функції multiply"
// "Результат множення дорівнює 30"
// "Лог після виклику функції multiply"

//  ================================================== Параметри за замовчуванням =======================================
