// const array = []; // пустий масив

// const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const arrStr = ['Jon', 'Vova', 'Iruna', undefined, undefined];

// console.log('name:>>', arrStr[2]);
// console.log('number:>>', arrayNum[6]);
// console.log('number:>>', arrayNum.length);

// =======================

// const clients = ['Jon', 'Vova', 'Iruna', 'Vitaliy', 'Sergio', 'giygi'];
// const numbers = [];

// console.log('clients:>>', clients.length);
// clients.length = 7;s
// console.log('clients:>>', clients.length);
// console.log('clients:>>', clients);
// console.log('clients:>>', clients[5]);
// clients.length = 2;
// console.log('clients:>>', clients);

// for (let i = 0; i < clients.length; i += 1) {
//   const element = clients[i];
//   console.log('>>', element);
// }

// for (let i = 0; i < 10; i += 1) {
//   numbers.push(`number-${i}`);
// }
// console.log('numbers:>>', numbers);

// for (const client of clients) {
//   console.log(client);
// }

// for (let index = 0; index < clients.length; index += 1) {
//   const element = clients[index];
//   console.log(':>>', element);
// }

// const arrNames = ['Jon', 'Vova', 'Iruna', 'Vitaliy', 'Sergio', 'Ighor'];

// console.log('name3:>>', arrNames[2]);
// // const lastEl = arrNames[5];
// const lastEl = arrNames[arrNames.length - 1];

// for (let i = 0; i < arrNames.length; i += 1) {
//   const element = arrNames[i];
//   const elemNum = i + 1;
//   // const lastEl1 = arrNames[arrNames.length - 1];
//   console.log(`${elemNum}. ${element}`);
// }
// console.log(lastEl);

// for (const name of arrNames) {
//   console.log('name:>>', name);
// }

// const string = 'Hello world!';

// for (const character of string) {
//   console.log('character :>>', character);
// }
// ==================================================for ================================

// const arrNames = ['Jon', 'Vova', 'Iruna', 'Vitaliy', 'Sergio', 'Ighor'];
// const client = 'Sergio';
// let message = '';
// for (const name of arrNames) {
//   if (name === client) {
//     message = `Клієнт з  ім'ям ${client} є в базі даних!`;
//     break;
//   }
//   message = `Клієнта з ім'ям ${client} в базі даних не існує!`;
//   // console.log('name:>>', name);
// }
// console.log('message:>>', message);

// ==================================================for of================================
// for (const clientName of arrNames) {
//   if (clientName === client) {
//     message = `Клієнт з  ім'ям ${client} є в базі даних!`;
//     break;
//   }
// }
// console.log('message:>>', message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34, 23];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   const element = numbers[i];
//   console.log('element:>>', element);
//   if (element < threshold) {
//     continue;
//   }
//   console.log(`Число більше за ${threshold}: ${element}`);
// }

// ================= підрахувати суму всіх чисел у масиві ==============================

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// let sum = 0;

// for (let index = 0; index < cart.length; index++) {
//   const element = cart[index];
//   // console.log('element:>>', element);
//   sum += element;
// }
// console.log('sum:>>', sum);

// // for (const el of cart) {
// //   // console.log('el:>>', el);
// //   sum += el;
// // }

// console.log('sum:>>', sum);

// ================= підрахувати суму всіх парних  чисел у масиві ==============================

// 1. Перебираємо масив
// 2 Відсортовуємо парні числа
// 3 Додати парні числа

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     // console.log('number:>>', number);
//     total += number;
//     console.log('total:>>', total);
//   }
// }

// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   if (number % 2 === 0) {
//     total += number;
//   }
// }
// console.log('total:>>', total);

/* ==========================================================================================================
 * Напиши скрипт пошуку логіна
 * - Якщо немає логіну, вивести повідомлення 'Користувач [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 *
 * - Спочатку через for
 * - Потім через for...of
 * - Логіка break
 * - Метод includes() з тернарним оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4nq';
// let message = `Користувача з іменем ${loginToFind} не знайдено.`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   // console.log(login);
//   if (login === loginToFind) {
//     message = `Користувач ${loginToFind} знайдено.`;
//  break;
//   }
// }
// console.log(message);

// ================================== for of================
// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Користувач ${loginToFind} знайдено.`;
//     break;
//   }
// }
// console.log(message);

// ============================ тернарний оператор ==============
// (умова)?true:false

// const message = logins.includes(loginToFind)
//   ? `Користувач ${loginToFind} знайдено.`
//   : `Користувача з іменем ${loginToFind} не знайдено.`;
// console.log(message);

// =================================================================================

// Написати скрипт пошуку найбільшого числа у масиві

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let maxNumber = numbers[0];

// for (const number of numbers) {
//   if (number > maxNumber) {
//     maxNumber = num;
//     console.log('maxNumber:>>', maxNumber);
//   }
// }

// console.log(Math.max(1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14, 100));

// console.log(Math.max(...numbers));
