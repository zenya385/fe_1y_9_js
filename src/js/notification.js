import '../css/notification.css';




//  const userData = prompt("Введіть повідомлення, яке ми відтермінуємо у часі.");
// function delayMessage(message, delay) { 
// setTimeout(()=>{
//    alert(message) 
// }, delay )
// }
// delayMessage(userData, 3000)


// /**
//  * - Показуємо та приховуємо Додавання/Видалення клас is-visible
//  * - Приховуємо через певний час
//  * - Приховуємо при кліку
//  * - Не забуваємо чистити таймер
//  */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const notification = document.querySelector('.js-alert');

notification.addEventListener('click', onNotificatioClick);

showNotification();

function onNotificatioClick() {
    hideNotification();
    // console.log('timeoutId', timeoutId)
    clearTimeout(timeoutId); 
}

function showNotification() {
    notification.classList.add('is-visible'); 

 timeoutId =  setTimeout(()=>{
        // console.log('Нотіфікашка через 3 сек')
        hideNotification()
    }, NOTIFICATION_DELAY)
}

function hideNotification() {
       notification.classList.remove('is-visible'); 
}