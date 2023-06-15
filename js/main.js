'use strict';
//2 ========================== .length ==================

const string = 'Hello Java Script';
const lengthStr = string.length; //*  довжина рядка

// console.log('string:>>', string);
// console.log('lengthStr:>>', lengthStr);
// console.log('lengthStr:>>', string.length);

//2 ========================== .toLowerCase() .toUpperCase() ==================
const toLowerStr = string.toLowerCase();
const toUperStr = string.toUpperCase();
// console.log('toLower:>>', toLowerStr);
// console.log('toUperStr:>>', toUperStr);
// console.log('string:>>', string);

//2 ========================== конкотенація рядків ==================

const message = 'Hello ' + 'Java' + ' Script';
const message1 = 'Hello' + ' ' + 'Java' + ' ' + 'Script';
const str1 = 'Hello';
const str2 = 'Java';
const str3 = 'Script';

const str4 = '4' + 5; //   '45'
const str5 = 8 + '8' + 8; // '888'
const str6 = 8 + 8 + '8'; // "168"

console.log('str4:>>', str4);
console.log('str5:>>', str5);
console.log('str6:>>', str6);

console.log('message:>>', message);
console.log('message:>>', message1);
// console.log('message:>>', str1 + ' ' + str2 + str3); // не працює помилка

//2 ========================== шаблонний рядок або інтерполяція ==================

const messageInt = `${str1}  ${str2} ${str3}`;

console.log('str+str:>>', `${str1} Dony, i'am a  ${str2} ${str3}`); //   ` `

console.log('str+str:>>', 'Hello ' + 'Dony,' + " i'am" + ' a' + ' Java' + ' Script');
