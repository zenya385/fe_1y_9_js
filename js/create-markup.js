
const rootEl = document.querySelector(".root")

const titleEl = document.createElement("h1");
titleEl.textContent = 'Привіт, це перший мій створений елемент!';
titleEl.classList.add('title')

rootEl.append(titleEl)
console.log('titleEl', titleEl);