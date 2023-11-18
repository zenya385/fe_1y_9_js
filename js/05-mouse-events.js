/*
 * Події миші
 * - mouseenter и mouseleave (це ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - Балакуча подія)
 * - Дод. мат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хороша задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseover', onMouseEnter);
boxRef.addEventListener('mouseout', onMouseLeave);
boxRef.addEventListener('mousemove', onMouseMove);

const textDemo = document.querySelector('.js-demo');

function onMouseEnter(e) {
  const box = e.currentTarget;
  box.classList.add('box--active');
}

function onMouseLeave(e) {
  const box = e.currentTarget;
  box.classList.remove('box--active');
}
function onMouseMove(e) {
  // console.log('event', e);
  let xpos;
  let ypos;
  if (e) {
    xpos = e.screenX;
    ypos = e.screenY;
  }

  textDemo.innerHTML = xpos + ', ' + ypos;
}
