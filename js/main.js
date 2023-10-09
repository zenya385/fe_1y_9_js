//* 1. Імперативний і декларативний код.
//* 2. Чисті функції.
//* 3. Перебираючі методи масиву. forEach(), map(), filter(), find(), every(), some().

//4 ====================== Імперативний код ==============================
// Імперативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }
// console.log(filteredNumbers); // [4, 5]
//4 ====================== Декларативний код ==============================
// Декларативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]

//4 ======== Функція з побічними ефектами (грязні функції) ====================
//3 функція, яка в процесі виконання може модифікувати або використовувати значення глобальних змінних, змінювати посилальні аргументи, виконувати операції введення-виведення і т. п.

// const dirtyMultiplay = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };
// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiplay(numbers, 2);
// console.log('numbers:>>', numbers);

//4 ====================== Чисті функції ==============================
// const pureMultiplay = (array, value) => {
//   const result = [];
//   for (let i = 0; i < array.length; i += 1) {
//     result.push(array[i] * value);
//   }
//   return result;
// };
// console.log('result:>>', result);
// const resaltFunc = pureMultiplay(numbers, 2);

// console.log('result:>>', resaltFunc);
// console.log('numbers:>>', numbers);

//! ====================== Перебираючі методи масиву ==============================
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];
//4 ====================== Метод forEach ==============================
//3 використовується для заміни циклів for і for...of в роботі з колекцією даних.

//3 -Поелементо перебирає масив.
//3 -Викликає колбек-функцію для кожного елемента масиву.
//3 -Нічого не повертає.

//2 массив.forEach(function callback(element, index, array)) {
//2   // Тіло колбек-функції
//2 });

//! Єдиним випадком, коли варто використовувати цикли for або for...of для перебирання масиву, - це задачі з перериванням виконання циклу. Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// products.forEach(product => console.log('product:>>', product.price));

//4 ====================== Метод map()  ==============================
//3 Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує у новий масив, який і буде результатом виконання методу.

//2 массив.map((element, index, array) => {
//2   // Тіло колбек-функції
//2 });

//3 -Поелементо перебирає оригінальний масив.
//3 -Не змінює оригінальний масив.
//3 -Результат роботи колбек-функції записується у новий масив.
//3 -Повертає новий масив однакової довжини.

const upperNameofOobj = products.map(product => {
  product.name.toUpperCase();
  return;
});
console.log('upperNameofOobj:>>', upperNameofOobj);
console.log('products:>>', products);
