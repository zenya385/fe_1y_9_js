import heroes from "./heroes.json";
import '../css/style.css';
import itemsTemlate from "../templates/hero.hbs"



// JSON.parse(heroes)
// JSON.stringify(heroes)
const formBtn = document.querySelector('.btn-form')


formBtn.addEventListener('click', function(e) {
    e.preventDefault();
    handleFormData();
} )

renderHeroes();

function handleFormData() {
    const form = document.querySelector('#myForm');
    const formData = new FormData(form);
    const dataObj = {};

    formData.forEach(function(value, key){
        dataObj[key] = value;
    })

    heroes.push(dataObj)
    renderHeroes() 
    form.reset()
}

console.log(heroes);



function renderHeroes() {
    const itemHeroes = document.querySelector('.hero-table')
    itemHeroes.innerHTML = "";
    const markup = itemsTemlate(heroes);
itemHeroes.insertAdjacentHTML("beforeend", markup)
}



