/*
 * Об'єкт "посилань"
 * Види подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості KeyboardEvent.key та KeyboardEvent.code
 */

// const output = document.querySelector('.js-output');
// const clearBtn = document.querySelector('.js-clear');

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keydown', onKeyPress);
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeyPress(event) {
  console.dir(event);
  console.log('event.key', event.key);
  console.log('event.code', event.code);

  refs.output.textContent += event.key;
}

function onClearOutput() {
  refs.output.textContent = '';
}
