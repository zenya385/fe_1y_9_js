/*
 * Делегування подій
 * - Загальний слухач
 * - Фільтр мети (цілі) кліка
 */

const container = document.querySelector('.js-container');
container.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log('event.currentTarget', e.target.nodeName);
  // console.log('event.currentTarget', e.target.textContent);
  // console.log('event.target', e.target);
  // console.log('event.currentTarget', e.currentTarget);
}

/*
 * Код добавлення кнопок
 */
const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  container.appendChild(btn);
  labelCounter += 1;
}
