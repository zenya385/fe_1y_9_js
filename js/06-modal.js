/*
 * 1. Відкритя та закритя по кнопці
 * 2. Закритя по кліку в бекдроп: onBackDropClick
 * 3. Закритя по ESC: onEscapeKeypress
 *
 * В CSS є клас show-modal, який необхідно добавити body при відкриті модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscapeKeypress);
  document.body.classList.toggle('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscapeKeypress);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    console.log('Клікнули у бекдроп');
    onCloseModal();
  }
}

function onEscapeKeypress(event) {
  const ESC_KEY_CODE = 'Escape';
  // const isKeyEsc = vent.code === ESC_KEY_CODE;

  if (event.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}
