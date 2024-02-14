// import { nanoid } from 'nanoid';

// model.id = nanoid();

// const id = nanoid(10);

console.log('Hello JavaScript');

// console.log('id', id);

import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';

defaultModules.set(PNotifyMobile, {});

// alert({
//   text: 'Текст який покаже нотіфікашка!',
// });

const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', 'q', 'w', 'e'];
let currentKeyIndex;

document.getElementById('new-game-btn').addEventListener('click', () => {
  startNewGame();
});

function startNewGame() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  updateKeyDisplay();
}

function updateKeyDisplay() {
  document.getElementById('key').textContent = keys[currentKeyIndex];
}

function handleKeyDown(event) {
  const pressedKey = event.key.toLowerCase();
  if (pressedKey === keys[currentKeyIndex]) {
    currentKeyIndex++;
    if (currentKeyIndex >= keys.length) {
      PNotify.success({
        text: "Congratulations! You've pressed all the keys correctly!",
        delay: 2000,
      });
      startNewGame();
    } else {
      updateKeyDisplay();
    }
  } else {
    PNotify.error({
      text: 'Wrong key! Try again.',
      delay: 2000,
    });
  }
}

function handleKeyPress(event) {
  event.preventDefault();
}

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keypress', handleKeyPress);

// Start the game
startNewGame();
