/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Майно elements
 * - Клас FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // const formElements = event.currentTarget.elements;  // посилання на елементи форми (є тільки у форм)
  // console.dir(formElements);

  // const mail = formElements.email.value
  // const password = formElements.password.value

  // console.log( mail,
  // password,
  // subscription);

  // const formData={
  //   mail,
  //   password,
  //   subscription
  // }
  // console.log(formData);

  const formData = new FormData(event.currentTarget);

  console.log(formData);

  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });
}
