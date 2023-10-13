// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

function logItems(items) {
  console.log(items);
  items.forEach((element, i) => {
    console.log(`${i + 1} - ${element}`);
  });
}
logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ТЗ
// Напиши функції які за допомогою перебираючих методів масиву (ніяких for, splice і т. д.) виконують наступні операції над масивом об'єктів користувачів з файлу users.js.

// Завдання 1
// Отримати масив імен всіх користувачів (поле name).

const getUserNames = users => {
  // твій код
};

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Завдання 2
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  // твій код
};

// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// Завдання 3
// Отримати масив імен користувачів за статтю (поле gender).

const getUsersWithGender = (users, gender) => {
  // твій код
};

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Завдання 4
// Отримати масив тільки неактивних користувачів (поле isActive).

const getInactiveUsers = users => {
  // твій код
};

// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

// Завдання 5
// Отримати користувача (не масив) по email (поле email, він унікальний).

const getUserWithEmail = (users, email) => {
  // твій код
};

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}

// Завдання 6
// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).

const getUsersWithAge = (users, min, max) => {
  // твій код
};

// console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
