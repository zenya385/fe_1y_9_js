const openModalBtn = document.querySelector("[data-action='open-modal']");
const closeModalBtn = document.querySelector('[data-action=close-modal]');
const backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');

// console.log('openModalBtn:>>', openModalBtn);
// console.log('closeModalBtn:>>', closeModalBtn);

openModalBtn.addEventListener('click', () => {
  body.classList.toggle('show-modal');
});
closeModalBtn.addEventListener('click', () => {
  body.classList.remove('show-modal');
});
backdrop.addEventListener('click', () => {
  body.classList.remove('show-modal');
});
