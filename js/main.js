'use strict';

//6 {} літерал об'єкта
//6 Властивості об'єкта (описується парами ключ: значення )
// const object = {
//   autor: 'John Dou',
// };

// const obj={}
// const arr = ['qwer', 'wqert', 'qwer'];

//* ==========Звернення до властивостей через крапку==================
//3 синтаксис   об'єкт.ім'я_властивості

// const book = {
//   author: 'Bernard Cornwell',
//   title: 'The Last Kingdom',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log('arr:>>', arr);
// console.log('book.genres[0]:>>', book.genres[0]);
// const bookTitle = book.title;

// console.log('bookTitle:>>', bookTitle);
// console.log('bookAuthor:>>', book.author);

//* ============Звернення до вкладених властивостей ==================
//3 синтаксис   об'єкт.ім'я_властивості.ім'я_властивості

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   hobbies: ['swiming', 'music', 'sci-fi'],
// };

// const userCity = user.location.city;

// console.log('userCountry:>>', user.location.country);
// console.log('userCity:>>', userCity);
// console.log('userTag:>>', user.tag);

// console.log('userHodies:>>', user.hobbies[1]);

//* ========= Звернення до властивостей через квадратні дужки =============
//3 синтаксис    об'єкт["ім'я властивості"]

// console.log('bookTitle:>>', book['title']);
// console.log('bookAuthor:>>', book['author']);

//* =======Зміна значення властивості==================

// console.log('book:>>', book);

// book.title = 'qwertyu';
// book.genres.push('fantastic');
// book.genres.pop('fantastic');
// book.page = 100;

// console.table('book:>>', book);
// console.log('bookTitle:>>', book.title);
// console.log('book:>>', book);

//* ===== Видалення значення властивості ==================
//3 Видалити властивість об'єкта можна за допомогою оператора delete. Видалення властивостей — операція вкрай рідкісна, найчастіше властивості тільки додаються або змінюються.

// delete book.title;
// delete book['page'];

// console.log('book:>>', book);

//5 План заняття ✅  ❌
//5 - Відсутні властивості ✅
//5 - Короткі властивості ✅
//5 - Обчислювальні властивості ✅
//5 - Методи об'єкта ✅
//5 - Доступ до властивостей об'єкта в методах ✅

// const obj = {
//   title: 'qwer',
//   age: 6,
// };

// console.log(obj.name);
// console.log(obj);

//* ============== Короткі властивості ========================
//* Іноді, під час створення об'єкта значення властивості необхідно взяти зі змінної або параметра функції з таким самим ім'ям, що і у властивості.
//* Синтаксис у наступному прикладі занадто громіздкий, тому що доводиться дублювати ім'я властивості та ім'я змінної, в якій зберігається потрібне значення.

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

//* Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної у якості імені властивості, а її значення - у якості значення властивості.

// const name  'Генрі Сибола';
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

//* Тобто, оголошуючи об'єкт, достатньо вказати тільки ім'я властивості, а значення буде взяте зі змінної з аналогічним ім'ям.

//* ======================= Обчислювальні властивості ============

//*Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не знаємо, тому що воно зберігається у якості значення змінної або у якості результату виконання функції.
//*Раніше для цього необхідно було спочатку створити об'єкт, а потім додавати властивості через квадратні дужки, що не зовсім зручно.

// const propName = 'name';

// const user = {
//   age: 25,
// };

// user[propName] = 'Генрі Сибола';
// console.log(user.propName); // 'Генрі Сибола'

//* Синтаксис обчислювальних властивостей (computed properties) допомагає уникнути зайвого коду і, в деяких випадках,
//* спростити його.Значенням обчислювальної властивості може бути будь - який валідний вираз.

//3    <input name='color' value='tomato'>

// const inputName = 'color';
// const inputValue = 'tomato';

// colorPickerData[inputName] = inputValue;
// const colorPickerData = {
// };

// console.log(colorPickerData.color); // 'tomato'

// const propName = 'name';
// const author = 'Генрі Сибола';

// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: author,
// };

// console.log(user.name); // 'Генрі Сибола'
// console.log(user[propName]);
// console.log(user['propName']);

// ===================================================

// const key = 'person';
// const object = {};
// object[key] = 'Mango';
// console.log(object); // {person: 'Mango'}

//* ========================Методи об'єкта ==================

//* Досі ми розглядали об'єкти тільки як сховища взаємопов'язаних даних, наприклад, інформація про книгу тощо. Об'єкти-сховища, зазвичай, знаходяться в масиві таких самих об'єктів, який є колекцією однотипних елементів.
//*Об'єкти можуть зберігати не тільки дані, але і функції для роботи з цими даними - методи. Якщо значення властивості - це функція, така властивість називається методом об'єкта.

// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ['The Last Kingdom', 'Dream Guardian'],
//   // Це метод об'єкта
//   getBooks() {
//     console.log('Цей метод буде повертати всі книги - властивість books');
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log('Цей метод буде додавати нову книгу у властивість books');
//     bookShelf.books.push(bookName);
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook('Нова книга');

// console.log('bookShelf:>>', bookShelf);

//* Такі об'єкти можна назвати «моделями». Вони пов'язують дані і методи для роботи з цими даними. Наприклад, можна було оголосити змінну books і дві функції getBooks() і addBook(bookName), але тоді це були б три незалежні сутності без явного синтаксичного, і зі слабким логічним зв'язком.

// ❌ Слабкопозв'язані, незалежні сутності
// const bookShelf = {
//   books: [],
//   getBooks() {},
//   addBook(param) {},
// };
// bookShelf.addBook();
//* =======================Доступ до властивостей об'єкта в методах (Доступ до об'єкта через this)==================

//* Методи використовуються для роботи з властивостями об'єкта, їх зміни. Для доступу до об'єкта в методі використовується не ім'я змінної, наприклад bookShelf, а ключове слово this - контекст. Значенням this буде об'єкт перед «крапкою», тобто об'єкт, який викликав цей метод, у нашому випадку - це посилання на об'єкт bookShelf.

// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     console.log(this);
//   },
// };

// //3 Перед крапкою знаходиться об'єкт bookShelf,
// //3 тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

//* Для того, щоб отримати доступ до властивостей об'єкта в методах, ми звертаємось до нього через this і далі, стандартно - «через крапку» до властивостей.

// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); //3 ["The Last Kingdom"]
// console.log(bookShelf.books); //3 ["The Last Kingdom"]
// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks()); //3 ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook('The Mist');
// console.log(bookShelf.getBooks()); //3 ['The Last Kingdom', 'Dream Guardian']

//* Логічно замислитися - чому б не використовувати ім'я об'єкта у зверненні до властивостей, адже ми явно не збираємося його змінювати. Справа в тому, що ім'я об'єкта - річ ненадійна, методи одного об'єкта можна копіювати в інший (з іншим ім'ям), а в майбутньому дізнаємось, що часто під час створення об'єкта, ми наперед зовсім не знаємо імені. Використання this гарантує, що метод працює саме з тим об'єктом, який його викликав.

//! ЦІКАВО
// Ми детально розберемо ключове слово this і всі його підводні камені на наступних заняттях, а зараз достатньо просто використовувати this, звертаючись до властивості об'єкта в його методах.

/* ===================================ДЗ-1===========================

// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.

// document.querySelector('');

// const bankAccount = {
//   ownerName: 'human',
//   accountNumber: 0,
//   balance: 1000,
//   deposit(amount) {
//     this.balance += amount;

//     return alert(`Депозит поповнено на ${amount}`);
//   },
//   withdraw(amount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//       return alert(`З вашого рахунку знято ${amount}`);
//     }
//     alert(`Недостатьньо коштів`);
//   },
//   showBalance() {
//     alert(`На вашому рахунку :>> ${this.balance}`);
//   },
// };

// bankAccount.showBalance();
// bankAccount.withdraw(900);
// bankAccount.showBalance();
// bankAccount.deposit(700);
// bankAccount.showBalance();

// ===============================================

// const tempInput = document.querySelector('#input');

// const tempButton = document.querySelector('#button3');

// const weather = {
//   temperature: 0,
//   humidity: 40,
//   windSpeed: 5,
//   temp() {
//     tempButton.addEventListener('click', () => {
//       this.temperature = tempInput.value;
//       if (this.temperature < 0) {
//         return console.log('Температура нижче 0 градусів Цельсія');
//       } else {
//         return console.log('Температура вище або рівна 0 градусів Цельсія');
//       }
//     });
//   },
// };

// weather.temp();

// const body = document.querySelector('body');
// let k = 0;
// function func() {
//   return (k += 1);
// }
// body.addEventListener('click', () => {
//   func();
//   console.log(k);
// });
*/

//* ======= Об’єкти. Перебір об'єкту. Методи Object.keys(), Object.values(), Object.entries(). Операція …spread====

// const obj = {
//   name: 'gthj',
//   age: 20,
//   location: {
//     city: 'qwr',
//     country: 'Ukr',
//   },
// };

// const obj1 = Object.create(obj);

// obj1.book = 'sdfghjk';
// obj1.genres = 'gvhj';
// obj1.author = 'uiop[]';

// console.log(obj1);

// for (const key in obj1) {
//   console.log('key obj-1:>>', key);
// }

// ================== for in ==============================
//3 for (key in object) {
//3   // інструкції
//3 }

// for (const key in obj) {
//   console.log('key:>>', key);
// }
// for (const key in obj.location) {
//   console.log('key:>>', key);
// }
// ====== for in звернення до заначення ключа ===============

// for (const key in obj) {
//   console.log('value:>>', obj[key]);
// }

// =================== Метод Object.keys() ===============
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }

// =================== Метод Object.values() ===============

// const values = Object.values(book);

// console.log(values);

// for (const value of values) {
// Значення властивості
// console.log(value); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
// }

// =================== Метод Object.entries() ===============

// const entries = Object.entries(book);
// console.log(entries);
// [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// [
//   ['title', 'The Last Kingdom'],
//   ['author', 'Bernard Cornwell'],
//   ['rating', 8.38],
//   ['genres', ['historical prose', 'adventure']],
// ];

//* ====================== Операція spread ========================
//3 синтаксис ...

//* Розпилення можна використовувати всього в 3-х ситуаціях:

//* Під час виклику функції, для передачі масиву елементів окремими аргументами
// const temperatures = [18, 14, 12, 21, 17, 29];

// const max = Math.max(...temperatures);
// console.log(max);

//* У літералі масиву, при створенні нового масиву
// const arr1 = [1, 6, 9, 78, 48, 15, 155];
// const arr2 = [1, 6, 9, 78, 48, ...[12345, 34545, 67845], 15, 155];

// // const numbers = [11, 23, 45, 34].concat(arr1, arr2);
// const numbers = [11, 23, 45, 34, ...arr1, 478, ...arr2, 45889];
// console.log(numbers);

//* У літералі об'єкта, при створенні нового об'єкта

// const obj = {
//   a: 'Mango',
//   b: 45,
//   c: true,
// };

// const obj1 = {
//   y: 'Poly',
//   b: 999,
//   x: false,
// };

// const obj3 = { ...obj1, r: 45, ...obj, h: 87 };

// console.log(obj3);
// console.log(obj);

//*=========== Присвоєння за посиланням і за значенням =======
//! Примітиви: рядки, числа, булі,null і undefined, при присвоєнні копіюються цілком, за значенням (by value).

//! В змінній, якій присвоєно масив або об'єкт, зберігається не саме значення, а адрес його місця в пам'яті, іншими словами — посилання (покажчик) на нього, і передаються вони за посиланням (by reference).

// let number = 23;
// number = 26;

// посилальний  тип {} === {}

// console.log({ a: 1 } === { a: 1 });  //false
// console.log([] === []);  //false

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// b.hello = 150;
// a.hello = 100;

// console.log('a', a);
// console.log('b', b);

// for (const key in a) {
//   console.log(a[key]);
// }
/*
 * Масиви та функції це об'єкти
 */

// const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a);

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);
// =============================================================
// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

//4 ======================  Деструктуризація об'єктів  ================

//* ====================== Деструктуризація об'єктів ==============
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? 'публічному' : 'закритому';
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

//* ====================== Значення за замовчуванням ==============
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
// };

// // Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
// const { title, coverImage = 'https://via.placeholder.com/640/480', author } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480
//* ====================== Зміна імені змінної ==============

// const firstBook = {
//   title: 'The Last Kingdom',
//   coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
// };

// const { title: firstTitle, coverImage: firstCoverImage = 'https://via.placeholder.com/640/480' } =
//   firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

//2 =============
// const secondBook = {
//   title: 'Сон смішної людини',
// };

// const { title: secondTitle, coverImage: secondCoverImage = 'https://via.placeholder.com/640/480' } =
//   secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

//* ====================== Деструктуризація в циклах ==============

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На березі спокійних вод',
//     author: 'Роберт Шеклі',
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

//* ====================== Глибока деструктуризація ==============

// ========================================

// const person = { name: 'John', age: 30, qwe: [1, 2, 3] };
// let { name, age, qwe } = person;

// age = 31;
// qwe.push(9);

// console.log(age);
// console.log(qwe);
// console.log(person.age);
// console.log(person);

// const person = { name: 'John', age: 30 };

// // Деструктуризация объекта и извлечение свойства "age" в переменную "age"
// const { age } = person;

// // Теперь вы можете изменить переменную "age"
// age = 31;

// // Изменение переменной "age" также изменит значение в исходном объекте "person"
// console.log(person.age); // Выведет: 31

// =========================================

// // let name = '';
// const person = { name: 'John', age: 30, genre: ['pop', 'rock'] };

// // Деструктуризация объекта и извлечение свойства "name" в переменную "name"
// const { name: nameper, age, genre } = person;
// // name = 'Jane'; // помилка
// genre.push('qwerty');

// // Теперь вы можете изменить переменную "name", но это не повлияет на исходный объект

// console.log(person.name); // Выведет: "John"
// console.log(nameper); // Выведет: "Jane"
// console.log(genre);
// // console.log(name);

// ===========  Task ==================
/*
 * Працюємо з колекцією товарів у корзині:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  // метод який повертає карточку товару
  getItems() {
    const { items } = this;
    return items;
  },
  add(product) {
    const { items } = this;
    // for (const item of items) {
    //   if (item.name === product.name) {
    //     item.quantity += 1;
    //     return;
    //   }
    // }
    // const newProduct = {
    //   ...product,
    //   quantity: 1,
    // };
    // items.push(newProduct);
    items.push(product);
  },
  remove(prodactName) {
    const { items } = this;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      // const {name} = items[i];

      if (item.name === prodactName) {
        // if (name === prodactName) {
        items.splice(i, 1);
        return console.log('знайшли');
      }
    }
  },

  clear() {
    this.items = [];
  },

  countTotalPrice() {
    const { items } = this;
    let totalPrice = 0;
    for (const { price } of items) {
      totalPrice += price;
    }
    return totalPrice;
  },

  increaseQuantity(productName) {
    const { items } = this;
    for (const product of items) {
      if (product.name === productName) {
        product.quantity = (product.quantity || 1) + 1;
        break;
      }
    }
  },
  decreaseQuantity(productName) {
    const { items } = this;
    for (const product of items) {
      if (product.name === productName) {
        product.quantity = (product.quantity || 1) - 1;
        break;
      }
    }
  },
};

console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove('🍇');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

cart.increaseQuantity('🍎');
cart.increaseQuantity('🍎');
console.table(cart.getItems());

cart.decreaseQuantity('🍋');
cart.decreaseQuantity('🍋');
console.table(cart.getItems());
