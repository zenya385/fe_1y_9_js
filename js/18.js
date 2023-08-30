//* Завдання 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль
//  повідомлення в форматі[номер елемента]-[значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax']
//  з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

// ========================================code========================
// function logItems(array) {
//   for (let index = 0; index < array.length; index += 1) {
//     let count = index + 1;
//     const element = array[index];
//     console.log(`${count}: ${element}`);
//   }
// }
// console.log(logItems(['Mango', 'Poly', 'Ajax']));
// console.log('========================================');
// logItems(['Mango', 'Poly', 'Ajax', 'Pango', 'Kiwi']);
// console.log('========================================');
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// ====================================================================

//* Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord)
//  приймаючу рядок(в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

// ========================================code========================
// function calculateEngravingPrice(message, pricePerWord) {
//   let totalPrise = 0;
//   const arrWords = message.split(' ');
//   let lengthArr = arrWords.length;
//   totalPrise = lengthArr * pricePerWord;
//   return totalPrise;
// }

// calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10);
// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));
// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));
// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20));

// ====================================================================

//* Завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини)
// і повертає найдовше слово в цьому рядку.

// ========================================code========================
// function findLongestWord(string) {
//   let longestWord = '';
//   const arrWords = string.split(' ');

//   for (const word of arrWords) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'
// console.log(findLongestWord('May the force be with you')); // 'force'
// ====================================================================

//* Завдання 4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

// ========================================code========================
function formatString(string) {
  if (string.length >= 40) {
    return string.slice(0, 39) + '...';
  }
  return string;
}

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // повернеться оригінальний рядок

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // повернеться форматований рядок

// console.log(formatString('Curabitur ligula sapien.'));
// // повернеться оригінальний рядок

// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// // повернеться форматований рядок
// ====================================================================

//* Завдання 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale.
// Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false.Слова в рядку можуть бути в довільному регістрі.

// ========================================code========================
// const checkForSpam = function (message) {
//   const lowercasedMessage = message.toLowerCase();
//   return lowercasedMessage.includes('spam') || lowercasedMessage.includes('sale');
// };
// =================== тернарником =============

// const checkForSpam = function (message) {
//   const lowercasedMessage = message.toLowerCase();
//   return lowercasedMessage.includes('spam') || lowercasedMessage.includes('sale') ? true : false;
// };

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
// ====================================================================

//* Завдання 6
// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;
// ========================================code========================

// do {
//  input = Number(prompt('Введіть число:'));
//   if (input !== null) {
//     numbers.push(input);
//   }
// } while (input !== null);

// if (numbers.length > 0) {
//   for (const elArr of numbers) {
//     total += elArr;
//   }
// }
// console.log(`Загальна сума чисел дорівнює ${total}`);

// ===============================================

// do {
//   input = parseFloat(prompt('Введіть число:'));

//   // console.log(parseFloat('12'));

//   if (!isNaN(input)) {
//     numbers.push(input);
//   }
// } while (!isNaN(input));

// if (numbers.length) {
//   for (const elArr of numbers) {
//     total += elArr;
//   }
//   // total = numbers.reduce((acc, current) => acc + current, 0);
//   console.log(`Загальна сума чисел дорівнює ${total}`);
// } else {
//   console.log('Не введено жодного числа.');
// }

// ====================================================================

//* Завдання 7 — додаткове, виконувати не обов'язково
// Є масив logins з логінами користувачів. Напиши скрипт додавання логіна в масив logins. Логін, який додається повинен:

// проходити перевірку на довжину від 4 до 16-ти символів включно

// бути унікальним, тобто бути відсутнім в масиві logins
// Розбий завдання на підзадачі за допомогою функцій.
// Напиши функцію isLoginValid(login), в якій перевір кількість символів параметра login і поверни true або false в залежності від того, чи потрапляє довжина параметра в заданий діапазон від 4-х до 16-ти символів включно.
// Напиши функцію isLoginUnique(allLogins, login), яка приймає список всіх логінів і логін, який додається, як параметри і перевіряє наявність login в массиве allLogins, повертає true якщо такого логіна ще немає і false якщо логін вже використовується.
// Напиши функцію addLogin(allLogins, login) яка:

// Приймає новий логін і масив всіх логінів як параметри

// Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid

// Якщо логін не валідний, припинити виконання функції addLogin і повернути радок 'Помилка! Логін повинен бути від 4 до 16 символів'

// Якщо логін валідний, функція addLogin перевіряє унікальність логіна за допомогою функції isLoginUnique

// Якщо isLoginUnique поверне false, тоді addLogin Не додає логін в массив масив і повертає рядок 'Такий логін уже використовується!'

// Якщо isLoginUnique поверне true, addLogin додає новий логін в logins і повертає рядок 'Логін успішно доданий!'
// 🔔 Принцип єдиної відповідальності функції — кожна функція робить щось одне. Це дозволяє перевикористати код і змінювати логіку роботи функції тільки в одному місці, не зачіпаючи роботу програми в цілому.
// Предикатні функції повертають тільки true або false. Такі функції прийнято називати починаючи з is: isLoginUnique і isLoginValid в нашому випадку.

// isLoginUnique тільки перевіряє чи є такий логін в масиві і повертає true або false.

// isLoginValid тільки перевіряє чи валідний логін і повертає true або false.

// addLogin додають чи не додають логін в масив. При цьому для перевірок умови додавання використовує результати викликів інших функцій — isLoginUnique і isLoginValid.
