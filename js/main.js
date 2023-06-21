'use strict';
//2 ========================== .length ==================

// const string = 'Hello Java Script';
// const lengthStr = string.length; //*  довжина рядка

// console.log('string:>>', string);
// console.log('lengthStr:>>', lengthStr);
// console.log('lengthStr:>>', string.length);

//2 ========================== .toLowerCase() .toUpperCase() ==================
// const toLowerStr = string.toLowerCase();
// const toUperStr = string.toUpperCase();
// console.log('toLower:>>', toLowerStr);
// console.log('toUperStr:>>', toUperStr);
// console.log('string:>>', string);

//2 ========================== конкотенація рядків ==================

// const message = 'Hello ' + 'Java' + ' Script';
// const message1 = 'Hello' + ' ' + 'Java' + ' ' + 'Script';
// const str1 = 'Hello';
// const str2 = 'Java';
// const str3 = 'Script';

// const str4 = '4' + 5; //   '45'
// const str5 = 8 + '8' + 8; // '888'
// const str6 = 8 + 8 + '8'; // "168"

// console.log('str4:>>', str4);
// console.log('str5:>>', str5);
// console.log('str6:>>', str6);

// console.log('message:>>', message);
// console.log('message:>>', message1);
// console.log('message:>>', str1 + ' ' + str2 + str3); // не працює помилка

//2 ========================== шаблонний рядок або інтерполяція ==================

// const messageInt = `${str1}  ${str2} ${str3}`; // інтерполяція

// console.log('str+str:>>', `${str1} Dony, i'am a  ${str2} ${str3}`); //   ` `  шаблонний рядок

// console.log('str+str:>>', 'Hello ' + 'Dony,' + " i'am" + ' a' + ' Java' + ' Script'); // конкатинація рядків

//2 ========================== Метод indexOf() ==================

// const message = 'Hello world!';
// const indexOfWo = message.indexOf('wo'); // 6
// const indexOfW = message.indexOf('W'); // -1
// console.log(indexOfW);

//2 ========================== Метод includes() ================== //true   //false

const userName = 'Roman Zeno.js';
// console.log('include(zeno):>>', userName.includes('zeno')); //false
// console.log('include("Zen"):>>', userName.includes('Zen')); //true
// console.log('include("Roman"):>>', userName.includes('Roman')); //true
// console.log('include("Rom"):>>', userName.includes('Rom')); //true
// console.log('include("Ram"):>>', userName.includes('Ram')); //false
// console.log('include("RoMan"):>>', userName.includes('RoMan')); //false
// console.log('include("RoMan"):>>', userName.includes('.js')); //false

//2 ========================== Метод endsWith() та startsWith() ==================

// const jsFileName = 'script.js';
// console.log('jsFileName:>>', jsFileName.endsWith('.js'));

// const cssFileName = 'style.css';
// console.log('cssFileName:>>', cssFileName.endsWith('.js'));
// console.log('cssFileName:>>', cssFileName.startsWith('st'));

//2 ========================== Метод trim() ==================

// const login = ' zen ';

// console.log('login:>>', login);
// console.log('login:>>', login.trim());

//2 ========================== Метод padStart() та padEnd() ==================

// const jsFileName = 'script.js';

// console.log(':>>', jsFileName.padStart(20, ')'));
// console.log(':>>', jsFileName.padEnd(19, ' qwe'));

//2 ========================== Метод replace() та replaceAll() ==================

// const jsFileName = 'script.js';
// const newJsFileName = jsFileName.replace('.js', '.min.js');
// // console.log('jsFileName:>>', jsFileName.replace('.js', '.min.js'));
// console.log('newJsFileName:>>', newJsFileName);
// console.log('jsFileName:>>', jsFileName);

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

//2 ========================== Метод slicel()   slice(startIndex, endIndex)==================

const prodName = 'Repair droid';
const newName = prodName.slice(0, 6);

const fileName = 'styles.min.css, about.min.css, portfolio.min.css';

console.log('newName:>>', newName);
console.log('prodName:>>', prodName.slice(0, 6));
console.log('fileName:>>', fileName.slice(0, fileName.length));

const str = fileName.toLocaleUpperCase();
const str1 = fileName.toUpperCase();

const obj = {
  name: 'Roman',
  age: 15,
  favorite: 'red',
  isStudent: false,
};

const array = [
  {
    name: 'Roman',
    age: 15,
    favorite: 'red',
    isStudent: false,
  },
  {
    name: 'Sergio',
    age: 20,
    favorite: 'green',
    isStudent: true,
  },
  {
    name: 'Max',
    age: 25,
    favorite: 'yellow',
    isStudent: false,
  },
];

console.log('obj.name:>>', obj.name);
console.log('obj.name:>>', array[2].favorite);

document.body.style.backgroundColor = 'red';

const mainHead = document.querySelector('#head');
// const mainHead = document.querySelector('li');
mainHead.textContent = 'Я змінив заголовок!!!';
mainHead.style.color = 'yellowGreen';

const item = document.querySelectorAll('li');
item.forEach(li => {
  li.classList.add('yellow-text');
  li.style.color = 'white';
});

// console.log('item:>>', item);
