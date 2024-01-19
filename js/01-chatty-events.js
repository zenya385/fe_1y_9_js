/*
 * Сhatty events
 * Прийоми throttling и debouncing c Lodash
 */
/*
 * Mousemove и throttle
 */

const coordOutput = document.querySelector('.js-coords');
let mouseMoveCounter = 0;
// const trottledOnMouseMove = _.throttle(onMouseMove, 500);

window.addEventListener('mousemove', _.throttle(onMouseMove, 500));

function onMouseMove(e) {
  mouseMoveCounter += 1;

  coordOutput.textContent = `
  К-ть викликів onMouseMove: ${mouseMoveCounter},
  X: ${e.clientX},
  Y: ${e.clientY},
  `;
}

/*
 * Input и debounce
 */

const refInput = document.querySelector('.js-input');
const refOutput = document.querySelector('.js-output');

let inputCounter = 0;
refInput.addEventListener('input', _.throttle(onInputChange, 1250));

function onInputChange(e) {
  inputCounter += 1;

  refOutput.textContent = `
  К-ть викликів onInputChange: ${inputCounter},
значення: ${e.target.value}
`;
}
