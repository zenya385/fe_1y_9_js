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

const array = [];
// ======================== push() => довжину масиву ==============================
array.push('qwert');
array.push(1);
array.push(true);
array.push(undefined, null, 155);
console.log('array.push(undefined);:>>', array.push(undefined));
console.log('array після push:>>', array);

// ======================== pop() => видалений елемент ==============================
array.pop('qwert');
array.pop(1);
array.pop(true);
array.pop(undefined);

console.log('array після pop:>>', array);

// ======================== unshift() => number ==============================
array.unshift('qwert');
array.unshift(1);
array.unshift(true);
array.unshift(undefined);

console.log('array після unshift:>>', array);
// ======================== shift() => видалений елемент ==============================

array.shift('qwert');
array.shift(1);
array.shift(true);
array.shift(undefined);

console.log('array після shift:>>', array);
