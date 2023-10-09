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

// console.log('obj.name:>>', obj.name);
// console.log('obj.name:>>', array[2].favorite);

// document.body.style.backgroundColor = 'red'; //Змінює фон нашої сторінки

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

const str = 'qwerty';
console.log('typeof:>>', typeof str);

const magicBtn = document.querySelector('.magic-btn');

magicBtn.addEventListener('click', () => {
  const titleEl = document.querySelector('.title');
  titleEl.style.fontSize = '50px';
  titleEl.style.color = 'tomato';

  const imageEl = document.querySelector('img');
  imageEl.alt = 'я солоденький кексик';
  imageEl.src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0hrVafD5d6tPZwec3YCGbv7RaNo1ea70Kzs9t92O7P-0TpZwVEcctBqrdyywAmq9urs&usqp=CAU';
  imageEl.title = 'тут якийсь опис картинки';
});

// const titleEl = document.querySelector('.title');
// titleEl.style.fontSize = '50px';
// titleEl.style.color = 'tomato';

// const imageEl = document.querySelector('img');
// imageEl.alt = 'я солоденький кексик';
// imageEl.src =
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0hrVafD5d6tPZwec3YCGbv7RaNo1ea70Kzs9t92O7P-0TpZwVEcctBqrdyywAmq9urs&usqp=CAU';
// imageEl.title = 'тут якийсь опис картинки';

const paragraph = document.createElement('p');
paragraph.textContent = 'lorem ipsym';
paragraph.style.fontSize = '30px';
paragraph.style.color = 'teal';
magicBtn.before(paragraph);
console.log('paragraph:>>', paragraph);
