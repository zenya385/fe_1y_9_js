import users from './users.js';
import cars from './cars.js';

//* ============================== Процедурне програмування ===============================

//3 Процедурне програмування - набір не пов'язаних явно функцій і змінних для зберігання і обробки інформації. Цей підхід - простий і прямолінійний, і може використовуватись для задач, в яких немає тісно пов'язаних сутностей (даних і функцій для їх обробки).

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (sal, time, rate) => {
//   return sal + time * rate;
// };

// console.log('getWage>>', getWage(baseSalary, overtime, rate));

//* ============================== Об'єктно-орієнтоване програмування (ООП) ===============================
//3 Об'єктно-орієнтоване програмування (ООП) - методологія, яка описує програму як сукупність об'єктів, кожен з яких містить дані (властивості) і методи для взаємодії з ними.
const emploee = {
  // baseSalary: 30000,
  // overtime: 10,
  // rate: 20,
  // getWage() {
  //   const { baseSalary, overtime, rate } = this;
  //   return baseSalary + overtime * rate;
  //   // return this.baseSalary + this.overtime * this.rate;
  // },
};

// console.log('getWage>>', emploee.getWage());
// console.log('emploee>>', emploee);

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog); // {name: 'Манго'}
// // console.log(dog.name); // 'Манго'
// // console.log(dog.legs); // 4

// for (const key in dog) {
//   const element = key;
//   console.log('element:>>', element);
// }

//4 =================== Прототип об'єкта ======================================

/*
 * Прототип об'єкта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Прототип]] і __proto__
 * - Object.getPrototypeOf()
 * - Собственні властивості і Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

const objC = {
  z: 5,
};

// const objA = {
//x: 1,
// };

// const objB = {
//   y: 2,
// };

const objB = Object.create(objC);
objB.y = 2;

// console.log('objC:>>', objC);
// console.log('objB:>>', objB.z);

// const objA = Object.create(objB);
// objA.x = 1;

// // console.log('objA', objA.z);

// for (const key in objA) {
//   // if (Object.hasOwnProperty.call(object, key)) {
//   const element = key;
//   console.log('objA:>>', element);
//   // }
// }
// console.log('objA:>>', objA);

// console.log('objA', objA);

// console.log(objA.hasOwnProperty('x'));

// const dummyObj = Object.create({ message: 'Ето властивість об'єкта протортипа' });
// dummyObj.message = 'Це власне властивість об'єкта';
// console.log('dummyObj', dummyObj);

// console.log(dummyObj.message);

// 'Ето власне властивість об'єкта'
// 'Це властивість об'єкта-прототипу'

/*
 * Алгоритм пошуку властивості в цепочці прототипов:
 * 1. Пошук починається у власних властивостях
 * 2. Якщо властивостей немає в власних, пошук переходить до цепочки прототипов
 * 3. Пошук закінчується при першому совпадении (є таке властивість)
 * 4. Возвращается значення властивості
 */

// const objA = Object.create({ z: 5 });
// objA.y = 100;
// console.log('objA', objA);

// console.log(objA.x);

//4 =================== Класи =============================

/*
 * Класси
 * 🐷 - оголошення
 * 🐷 - конструктор
 * 🐷 - методи
 * 🐷 - статична
 * 🐷 - приватні властивості
 * 🐷 - синтаксис публічних властивостей і методів класів
 * 🐷 - геттери та сеттери
 */

class Car {
  constructor({ brand, model, price }) {
    // const {brand, model, price} = params;
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return `Бренд: ${this.brand}, Модель: ${this.model}, Ціна: ${this.price}`;
  }
}

const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });
const car2 = new Car({ brand: 'Honda', model: 'CR-V', price: 24045 });
const car3 = new Car({ brand: 'Toyota', model: 'Sequoia', price: 45560 });
const car4 = new Car({ brand: 'Mazda', model: 'CX-9', price: 31520 });

console.log(car1); // {brand: 'Audi', model: 'Q3', price: 35000 }
console.log(car2); // { brand: 'Honda', model: 'CR-V', price: 24045  }
console.log(car3); // {brand: 'Toyota', model: 'Sequoia', price: 45560  }
console.log(car4); // {brand: 'Mazda', model: 'CX-9', price: 31520 }
console.log(car4.getBrand()); // Бренд: Mazda Модель: CX-9 Ціна: 31520

// class Car {
//   static description = 'Клас описуючий автомобіль';

//   static logInfo(carObj) {
//     console.log('Car.logInfo -> carObj', carObj);
//   }

//   constructor({ brand, model, price } = {}) {
//     this.brand = brand;
//     this._model = model;
//     this._price = price;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(newPrice) {
//     this._price = newPrice;
//   }

//   get model() {
//     return this._model;
//   }

//   set model(newModel) {
//     this._model = newModel;
//   }
// }

// const carInstance = new Car({
//      марка: "Ауді",
//      модель: 'Q3',
//      ціна: 35000,
// });

// console.log(carInstance.model);
// carInstance.model = 'Q4';
// console.log(carInstance.model);

// console.log(carInstance.price);
// carInstance.price = 50000;
// console.log(carInstance.price);

// console.log(carInstance);

//4 =================== Функції-конструктори =============================

/*
 * Основи ООП: клас, екземпляр (об'єкт), інтерфейс
 */

/*
 * Функції-конструктори
 * - Именование
 * - Оператор новий
 * - Свойство Function.prototype
 */

// const Car = function ({ марка, модель, ціна } = {}) {
//    // const { марка, модель, ціна } = config;
//    // 2. Функція викликається в контексті створеного об'єкта,
//    // то є в цьому записується ссылка на него
//    this.brand = бренд;
//    this.model = модель;
//    this.price = ціна;

//    // 3. У властивості this.__proto__ записується посилання на об'єкт Car.prototype
//    // тобто Car.prototype це ПРОТОТИП майбутнього об'єкта (екземпляра)

//    // 4. Посилання на об'єкт виклику повертається в місце нового автомобіля
// };

// Car.prototype.sayHi = функція () {
//    console.log('Car.prototype.sayHi -> це', це);
//    console.log('Привіт :) ');
// };

// Car.prototype.changePrice = функція (новаЦіна) {
//    this.price = newPrice;
// };

// console.log(Car.prototype);

// 1. Якщо функція викликається через new, створюється пустий об'єкт
// const myCar = new Car({
// марка: 'Audi',
// модель: 'Q3',
// ціна: 35000,
// });
// console.log(myCar);

// myCar.sayHi();
// myCar.changePrice(10000);

// const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
// console.log(myCar2);

// myCar2.sayHi();

// const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
// console.log(myCar3);

// myCar3.sayHi();

//2 ================================ ===========================================

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// console.log(User.prototype);

// User.prototype.changeEmail = function (newMail) {
//   this.email = newMail;
// };

// const mango = new User({ email: 'mango@mail.com', password: 1111111 });

// mango.changeEmail('my-new-mail@mail.com');
// // console.log(mango);

/*
 * Статичні властивості і методи
 * - Статичні властивості та методи доступні тільки на самому конструкторі
 * - У статичних методах це не потрібно
 */

// User.message =
//    'Я статична властивість, мене немає в екземплярах або в прототипі.';

// User.logInfo = function (obj) {
//    console.log('User.logInfo -> obj', obj);
//    console.log('Пошта: ', obj.email);
//    console.log('Пароль: ', obj.password);
// };

// User.logInfo(mango);

// Object.keys()
// Object.value()

//* 1. У кожного об'єкта є властивість __proto__
//* 2. В цій властивості лежить посилання на його ПРОТОТИП, то є інший об'єкт
//* 3. При створенні літера об'єкта, у властивість __proto__ записується посилання на Функція.prototype
//* 4. Функція-конструктор це просто функція :)
//* 5. Всю магію робить оператор new
//* 6. Якщо функція викликається через new, створюється пустий об'єкт
//* 7. Функція викликається в контексті створеного об'єкта
//* 8. У властивості this.__proto__ записується посилання на об'єкт Функция.prototype
//* 9. Посилання на об'єкт виклику повертається в місце new Функція()
