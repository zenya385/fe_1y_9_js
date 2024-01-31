// // налаштування
// let options = {
//   root: document.querySelector('.scroll-list'),
//   rootMargin: '5px',
//   threshold: 0.5,
// };

// // Функція зворотного виклику
// let callback = function (entries, observer) {
//   entries.forEach(entry => {
//     // entry (запись) - изменение
//     //   entry.boundingClientRect
//     //   entry.intersectionRatio
//     //   entry.intersectionRect
//     //   entry.isIntersecting
//     //   entry.rootBounds
//     //   entry.target
//     //   entry.time
//   });
// };

// let target = document.querySelector('.list-item');
// observer.observe(target);

// // ждем полной загрузки страницы
// window.onload = () => {
//   // устанавливаем настройки
//   const options = {
//     // родитель целевого элемента - область просмотра
//     root: null,
//     // без отступов
//     rootMargin: '0px',
//     // процент пересечения - половина изображения
//     threshold: 0.5,
//   };

//   // создаем наблюдатель
//   const observer = new IntersectionObserver((entries, observer) => {
//     // для каждой записи-целевого элемента
//     entries.forEach(entry => {
//       // если элемент является наблюдаемым
//       if (entry.isIntersecting) {
//         const lazyImg = entry.target;
//         // выводим информацию в консоль - проверка работоспособности наблюдателя
//         console.log(lazyImg);
//         // меняем фон контейнера
//         lazyImg.style.background = 'deepskyblue';
//         // прекращаем наблюдение
//         observer.unobserve(lazyImg);
//       }
//     });
//   }, options);

//   // с помощью цикла следим за всеми img на странице
//   const arr = document.querySelectorAll('img');
//   arr.forEach(i => {
//     observer.observe(i);
//   });
// };

const box = document.querySelector('.box');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.backgroundColor = 'red';
    } else {
      entry.target.style.backgroundColor = 'transparent';
    }
  });
}, options);

observer.observe(box);
