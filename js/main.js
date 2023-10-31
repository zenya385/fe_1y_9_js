// import users from './users.js';
import cars from './cars.js';

// console.log('cars:>>', cars);
// console.log('users:>>', users);

//* 1. Імперативний і декларативний код.
//* 2. Чисті функції.
//* 3. Перебираючі методи масиву. forEach(), map(), filter(), find(), every(), some().

//4 ====================== Імперативний код ==============================
// // Імперативний підхід
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

// console.log('numbers.map', numbers.map(number => number * 2))
// console.log('numbers', numbers)
// products.map((product)=>{console.log('product.name', product.name.toUpperCase())})


//2 массив.map((element, index, array) => {
//2   // Тіло колбек-функції
//2 });

//3* -Поелементо перебирає оригінальний масив.
//3* -Не змінює оригінальний масив.
//3* -Результат роботи колбек-функції записується у новий масив.
//3* -Повертає новий масив однакової довжини.

// const upperNameofOobj = products.map(product => {
//   const upper = product.name.toUpperCase();
//   return upper;
// });
// console.log('upperNameofOobj:>>', upperNameofOobj);
// console.log('products:>>', products);

//4 ====================== Метод filter()  ==============================
//3  Метод filter(callback) використовується для єдиної операції - фільтрації масиву, тобто, коли необхідно вибрати більше одного елемента з колекції за певним критерієм.

//2   масив.filter((element, index, array) => {
//2     // Тіло колбек-функції
//2    });

//3 -Не змінює оригінальний масив.
//3 -Поелементо перебирає оригінальний масив.
//3 -Повертає новий масив.
//3 -Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
//3 -Якщо колбек повернув true, елемент додається у масив, що повертається.
//3 -Якщо колбек повернув false, елемент не додається у масив, що повертається.
//3 -Якщо жоден елемент не задовольнив умову, повертає порожній масив.

// const priceMax = products.filter(product => {
//   if (product.price > 1200) {
//     return product;
//   }
// });

// const namePerPriceMax = priceMax.map(product => {
//   return product.name;
// });

//* аналог
// const namePerPriceMax = products.filter(product => product.price > 1200).map(product => product.name);


// console.log('priceMax:>>', priceMax);
// console.log('namePerPriceMax:>>', namePerPriceMax);

//4 ====================== Метод find() ==============================
//3 Якщо метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову, то метод find(callback) дозволяє знайти і повернути перший відповідний елемент, після чого перебирання масиву припиняється. Тобто він шукає до першого збігу.

// масив.find((element, index, array) => {
//   Тіло колбек-функції
// });

//3 -Не змінює оригінальний масив.
//3 -Поелементо перебирає оригінальний масив.
//3 -Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
//3 -Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.

// const priceMax = products.find(product => {
//   if (product.price > 1200) {
//     return product;
//   }
// });

// const priceMax = products.find(product => product.price > 1200);

// console.log('priceMax:>>', priceMax);

//4 ====================== Метод every() ==============================

//3 Перевіряє, чи проходять всі елементи масиву тест колбек-функції. Повертає true або false.

// масив.every((element, index, array) => {
//   // Тіло колбек-функції
// });

//3 -Не змінює оригінальний масив.
//3 -Поелементо перебирає оригінальний масив.
//3 -Повертає true, якщо всі 3е-лементи масиву задовольняють умову.
//3 -Повертає false, якщо хоча б один елемент масиву не задовольняє умову.
//3 -Перебирання масиву припиняється, якщо колбек повертає false.

// const usersId = users.every(user => user.id);

// console.log('usersId:>>', usersId);

//4 ====================== Метод some() ==============================
// Перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.

// масив.some((element, index, array) => {
//   // Тіло колбек-функції
// });

//3 -Не змінює оригінальний масив.3
//3 -Поелементо перебирає оригінальний масив.
//3 -Повертає true, якщо хоча б один елемент масиву задовольняє умову.
//3 -Повертає false, якщо жоден елемент масиву не задовольняє умову.
//3 -Перебирання масиву припиняється, якщо колбек повертає true.

//4 ====================== Метод reduce() ==============================
// Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату, як акумулятор. Трохи складніший за інші методи для засвоєння, але результат вартий того.

// масив.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);

// arr.reduce(() => {}, initialValue);

//3 - Не змінює оригінальний масив.
//3 - Поелементо перебирає оригінальний масив.
//3 - Повертає все, що завгодно.
//3 - Робить все, що завгодно.

// підрахунок зарплати

const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//   console.log('acc:>>', acc);
//   console.log('number:>>', number);
//   return acc + number;
// }, 0);

// 3   аналог
// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log('total:>>', total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

// Підрахуємо загальну кількість зарплат

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const allSalary = Object.values(salary);
// console.log('totalSalary:>>', allSalary);
// const totalSalary = allSalary.reduce((total, salary) => {
//   return total + salary;
// }, 0);

// const totalSalary = Object.values(salary).reduce((total, salary) => {
//   return total + salary;
// }, 0);

// console.log('totalSalary:>>', totalSalary);

// ================ рахуємо загальний час ігри ================

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// const totalTime = players.reduce((acc, player) => {
  // return acc + player.timePlayed;
// }, 0);

// const totalTime = players.reduce((acc, player) => acc + player.timePlayed, 0);

// console.log('totalTime:>>', totalTime);

//============== збираємо всі теги у масив ======================

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTegs = tweets.reduce((acc, tweet) => {
  // acc.push(tweet.tags);
  // return acc;
  return [...acc, ...tweet.tags];
}, []);

// аналог
// const allTegs = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

console.log('allTegs:>>', allTegs);

//4 ====================== Метод sort() ==============================
// Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.

//3 - Сортує і змінює вихідний масив.
//3 - Повертає змінений масив, тобто посилання на відсортований вихідний.
//3 - За замовчуванням сортує за зростанням.
//3 - Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.
// Такий масив чисел буде відсортований за зростанням.

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// const students = ['Віка', 'Андрій', 'андрій', 'Олег', 'Юля', 'Борис', 'Катя'];
// students.sort();
// console.log(students); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля', 'андрій', ]

// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Свій порядок сортування чисел
// Для зазначення свого порядку сортування методу sort(compareFunction) потрібно передати колбек-функцію з двома параметрами. Це функція порівняння (compare function), порядок сортування залежить від її результату. Метод sort() буде викликати її для двох довільних елементів.

// массив.sort((a, b) => {
//   // Тіло колбек-функції
// });

// a - перший елемент для порівняння.
// b - другий елемент для порівняння.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => b - a);
// console.log(ascendingScores); // [92, 74, 61, 56, 35, 19]

// const students = ['Віка', 'Андрій', 'aндрій', 'Олег', 'Юля', 'Борис', 'Катя'];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

//============================== Сортування об'єктів==========

const students = [
  { name: 'Манго', score: 83 },
  { name: 'Полі', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Ківі', score: 94 },
];

// const inAscendingScoreOrder = [...students].sort(
//   (firstSt, secondSt) => firstSt.score - secondSt.score
// );

// console.log('inAscendingScoreOrder:>>', inAscendingScoreOrder);

// const inDescendingScoreOrder = [...students].sort(
//   (firstSt, secondSt) => secondSt.score - firstSt.score
// );

// console.log('inDescendingScoreOrder:>>', inDescendingScoreOrder);

// const inAlphabeticalOrder = [...students].sort((firstStName, secondStName) =>
//   firstStName.name.localeCompare(secondStName.name)
// );
// console.log('inAlphabeticalOrder:>>', inAlphabeticalOrder);

// const inReverseOrder = [...students].sort((firstStName, secondStName) =>
//   secondStName.name.localeCompare(firstStName.name)
// );
// console.log('inReverseOrder:>>', inReverseOrder);


setTimeout(()=>document.body.style.background="red", 3000)

setTimeout(()=>document.body.style.background="green", 6000)