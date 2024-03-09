
import throttle from "lodash.throttle"
import '../css/feedback.css';

const STORAGE_KEY = 'feedback-message'

// const form = document.querySelector('.js-feedback-form');
// const textarea = document.querySelector('.js-feedback-form textarea');
// const textarea = document.querySelector('[type="submit"]')

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea'),
};

popularTextaria()

refs.form.addEventListener('submit', onSubmitForm )
refs.textarea.addEventListener('input', throttle(onTextariaInput, 500) )


function onSubmitForm(e) {
  e.preventDefault()  
//   console.log('Відправилась форма');
  e.currentTarget.reset()
  localStorage.removeItem(STORAGE_KEY)
}


function onTextariaInput(e) {
    const message = e.target.value
   

   localStorage.setItem(STORAGE_KEY, message) 
}


function popularTextaria() {
  const savedMsg = localStorage.getItem(STORAGE_KEY)  
  
//   console.log(refs.textarea.value = savedMsg ?? "");

    if(savedMsg){
          refs.textarea.value = savedMsg
  }

}

// const someValue = null;
// const defaultValue = 'Default Value';
// const result = someValue ?? defaultValue;
// console.log('result', result)