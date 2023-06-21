'use strict';
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

document.body.style.backgroundColor = 'red'; //Змінює фон нашої сторінки

const mainHead = document.querySelector('#head');
// const mainHead = document.querySelector('li');
mainHead.textContent = 'Я змінив заголовок!!!'; //Змінює заголовок h1
mainHead.style.color = 'yellowGreen'; //Змінює колір заголовоку h1

const item = document.querySelectorAll('li');
item.forEach(li => {
  li.classList.add('yellow-text'); // Добавляє клас yellow-text всім li
  li.style.color = 'white'; //Змінює колір li
});

// console.log('item:>>', item);
