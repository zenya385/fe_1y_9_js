const menuData = {
  title: 'Eat it createElement, templates rule!',

  items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html'],
};

const source = document.querySelector('#menu-template').innerHTML.trim();

const template = Handlebars.compile(source);

// console.log(template);

const markup = template(menuData);

// console.log(markup);

const container = document.querySelector('#container');

container.innerHTML = markup;
