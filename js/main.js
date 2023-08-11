'use strict';

// ======================== split(delimeter)  => array =============================

// const str = 'Java Script';

// console.log('split():>>', str.split('')); // ['J', 'a', 'v', 'a', ' ', 'S', 'c', 'r', 'i', 'p', 't'];
// console.log('split():>>', str.split(' ')); // ['Java', "Script"]
// console.log('split():>>', str.split('-'));

// const arr = str.split(' ');

// ======================== join(delimeter) => string =============================

// console.log('str:>>', arr.join(' ')); // "Java Script"
// console.log('str:>>', arr.join(',')); // "Java,Script"
// console.log('str:>>', arr.join('-')); // "Java-Script"
// console.log('str:>>', arr.join('_')); // "Java_Script"

// ======================== includes(value)  => boolen =============================
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const name = 'Poly';
// console.log(clients.includes(name)); // true
// console.log(clients.includes('Monkong')); // false

// ======================== indexOf() => number ==============================
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.indexOf('Poly')); // 2
// console.log(typeof clients.indexOf('Poly')); // number
// console.log(clients.indexOf('Monkong')); // -1

// const array = [];
// // ======================== push() => довжину масиву ==============================
// array.push('qwert');
// array.push(1);
// array.push(true);
// array.push(undefined, null, 155);
// console.log('array.push(undefined);:>>', array.push(undefined));
// console.log('array після push:>>', array);

// // ======================== pop() => видалений елемент ==============================
// array.pop('qwert');
// array.pop(1);
// array.pop(true);
// array.pop(undefined);

// console.log('array після pop:>>', array);

// // ======================== unshift() => number ==============================
// array.unshift('qwert');
// array.unshift(1);
// array.unshift(true);
// array.unshift(undefined);

// console.log('array після unshift:>>', array);
// console.log('array.unshift(1):>>', array.unshift(1));
// // ======================== shift() => видалений елемент ==============================

// array.shift('qwert');
// array.shift(1);
// array.shift(true);
// array.shift(undefined);

// console.table(array);

// ====================================== Метод slice() => new array =========================================
//      slice(begin, end)

const arrString = ['J', 'a', 'v', 'a', ' ', 'S', 'c', 'r', 'i', 'p', 't'];
arrString.slice(5);
console.log('slice:>>', arrString.slice(5));
console.log('arrString.slice(0, 4):>>', arrString.slice(0, 4));

const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const deleteTwoClient = clients.slice(2);
const copyArr = clients.slice();

console.log('deleteTwoClient:>>', deleteTwoClient);
console.log('copyArr:>>', copyArr);

// ====================================== Метод splice() => old modified array ===============================
// Видалення   splice(position, num);

const deleteEl = clients.splice(1, 2);
console.log('clients:>>', clients);
console.log('deleteEl:>>', deleteEl);

// clients.splice(2);

// Додавання елементів  splice(position, 0, new_element_1, new_element_2, ...)
console.log('clints:>>', clients);

clients.splice(1, 0, 'Ajax', 'Poly', 'Jon');

console.log('clints:>>', clients); // 'Mango', 'Ajax', 'Poly', 'Jon', 'Kiwi'

// Заміна елементів  splice(position, num, new_element_1, new_element_2, ...)

clients.splice(2, 1, 'Ajax', 'Poly', 'Jon');
console.table(clients); // 'Mango', 'Ajax', 'Poly', 'Jon', 'Kiwi'

// ========================= Метод concat() => new array ============================

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Monkong', 'Singu'];

const allArrays = oldClients.concat(newClients);

console.log('allArrays:>>', allArrays);
