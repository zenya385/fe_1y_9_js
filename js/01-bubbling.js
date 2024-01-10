/*
 * Спливання подій
 * Event.target - цільовий (вихідний) елемент
 * Event.currentTarget - поточний елемент, слухачем якого вони спіймали подію
 */

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const innerChild = document.querySelector('#inner-child');
// const body = document.querySelector('body');

// body.addEventListener('click', function (event) {
//   console.log('onParetnClick -> event.target', event.target);
//   console.log('onParetnClick -> event.currentTarget', event.currentTarget);
// });

parent.addEventListener('click', onParetnClick);
child.addEventListener('click', onChildClick);
innerChild.addEventListener('click', onInnerChildClick);

function onParetnClick(event) {
  console.log('onParetnClick');
  console.log('onParetnClick -> event.target', event.target);
  console.log('onParetnClick -> event.currentTarget', event.currentTarget);
}

function onChildClick(event) {
  console.log('onChildClick');
  console.log('onChildClick -> event.target', event.target);
  console.log('onChildClick -> event.currentTarget', event.currentTarget);
}

function onInnerChildClick(event) {
  console.log('onInnerChildClick');
  console.log('onInnerChildClick -> event.target', event.target);
  console.log('onInnerChildClick -> event.currentTarget', event.currentTarget);
}
