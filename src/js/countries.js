import '../css/common.css';
import '../css/countries.css';
import countries from './countries.json';
import itemsTemplate from '../templates/items-countries.hbs';

// const menuData = {
//   title: 'Eat it createElement, templates rule!',

//   items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html'],
// };

// const source = document.querySelector('#menu-template').innerHTML.trim();

// const template = Handlebars.compile(source);

// // console.log(template);

// const markup = template(menuData);

// // console.log(markup);

// const container = document.querySelector('#container');

// container.innerHTML = markup;

const itemsCountries = document.querySelector('.js-gallery');

const markup = itemsTemplate(countries);
itemsCountries.insertAdjacentHTML('beforeend', markup);

// document.body.innerHTML = templateFunction();
