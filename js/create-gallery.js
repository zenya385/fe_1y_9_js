import pictures from './data/pictures.js';

// console.log('pictures', pictures);

/*
<li class="gallery-item">
  <a href="#">
    <img src="" alt="" width="" height="">
  </a>
</li>
*/

// {
//   width: 700,
//   height: 460,
//   url: 'https://picsum.photos/id/0/700/460',
//   alt: 'laptop',
// }

const galleryListEl = document.querySelector('.js-gallery');

// Функція для створення карточки makeGalleryCard(pictures)
// const makeGalleryCard = picture => {
// const { width, height, url, alt } = picture;
const makeGalleryCard = ({ width, height, url, alt }) => {
  // Створення li
  const galleryItemEl = document.createElement('li');
  galleryItemEl.classList.add('gallery-item');

  // Створення a
  const galleryLinkEl = document.createElement('a');
  galleryLinkEl.href = '#';

  galleryItemEl.append(galleryLinkEl);

  // Створення img
  const galleryImgEl = document.createElement('img');

  galleryImgEl.src = url;
  galleryImgEl.alt = alt;
  galleryImgEl.width = width;
  galleryImgEl.height = height;

  galleryLinkEl.append(galleryImgEl);

  return galleryItemEl;
};

// console.log('makeGalleryCard()', makeGalleryCard());

// Перебір масиву pictures через map
const galleryCardArr = pictures.map(picture => makeGalleryCard(picture));
console.log('galleryCardArr', galleryCardArr);
// Вставка колекції карток на сторінку

galleryListEl.append(...galleryCardArr);

// console.log('galleryListEl', galleryListEl.append(galleryCardArr));



//% ====================== DOM_2 ===============================

const mango = {
  username: 'Mango',
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

const btn = document.querySelector('.js-btn');

// ✅ Працює
mango.showUsername();

// ❌ this буде посилатися на button, якщо використовувати showUsername як callback
btn.addEventListener('click', mango.showUsername); // не працює

// ✅ Не забувайте прив'язувати контекст методів об'єкта
btn.addEventListener('click', mango.showUsername.bind(mango));


