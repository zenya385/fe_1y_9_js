import '../css/colorpicker.css';
import '../css/common.css';
import colors from './colorpicker.json';
import itemsTemplate from '../templates/items-colorpicker.hbs';

const itemsColorpicker = document.querySelector('.js-palette');

const markup = itemsTemplate(colors);

itemsColorpicker.insertAdjacentHTML('beforeend', markup);
