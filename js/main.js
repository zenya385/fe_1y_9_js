'use strict';

// const num1 = 23;
// const num2 = 15;
// const num3 = 448;

// function fn(a, b, c) {
//   return a + b + c;
// }

// console.log('fn(num1, num2, num3);:>>', fn(num1, num2, num3));
//* ==============================================================================

// function repeatLog(n) {
//   for (let i = 1; i < n; i += 1) {
//     console.log(i);
//   }
// }
// repeatLog(5);

// callback-функція
function printValue(value) {
  console.log(value);
}

// callback-функція
function prettyPrint(value) {
  console.log('Logging value: ', value);
}

function numPrint(value) {
  console.log('Print num:=>', value);
}

// функція вищого порядку
function repeat(n, action) {
  for (let i = 1; i <= n; i += 1) {
    action(i);
  }
}

// Передаємо printValue як callback-функцію
// repeat(5, printValue);
// 1
// 2
// 3
// 4
// 5

// Передаємо prettyPrint як callback-функцію
// repeat(5, prettyPrint);
// repeat(2, numPrint);
// repeat(10, logoPrint);
// repeat(10, imgPrint);
// Logging value: 1
// Logging value: 2
// Logging value: 3

// ================================================================
// Оголошення функції (function declaration)
function multiply(x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
}

// Функціональний вираз (function expression)
const multiplyExp = function (x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
};

// Стрілкова функція
const arrowFn = (x, y, z) => {
  console.log(`Результат множення дорівнює ${x * y * z}`);
};

multiply(1, 2, 3);
multiplyExp(9, 5, 6);
arrowFn(21, 12, 33);
