import '../css/common.css';
import pokemonCardTpl from '../templates/pokemon.handlebars';


const cardContainer = document.querySelector('.js-card-container')
const searchForm = document.querySelector('.js-search-form')

searchForm.addEventListener("submit", onSearch)

function onSearch(e) {
  e.preventDefault()
  const form = e.currentTarget;
 const serchQuery = form.elements.query.value; 
 console.log('serchQuery', serchQuery)
 fetchPokemon(serchQuery)
 .then(renderPokemonCard)
 .catch(onFetchError)
 .finally(
  ()=> form.reset()
);
}




  function fetchPokemon (pokemonId) {
   return  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
   .then(response => {
       if (!response.ok) {
         throw new Error(response.status);
       }
       return response.json();
     })
  }

  function renderPokemonCard(pokemon) {
    const makrup = pokemonCardTpl(pokemon);
cardContainer.innerHTML = makrup;
  }

  function onFetchError(error) {
    alert("Упс, все зламалось. Немає покемона з таким ім'ям.")
  }
// ============================================================================


// fetch('https://pixabay.com/api/?key=23313503-fe93316d6899b77e3854f09dc').then(res=>res.json()).then(console.log)
// fetch('https://api.privatbank.ua/p24api/exchange_rates?date=01.03.2024').then(res=>res.json()).then(console.log)
// fetch('https://api.privatbank.ua/p24api/exchange_rates?json&date=01.12.2014').then(res=>res.json()).then(console.log)



const url = 'https://api.privatbank.ua/p24api/exchange_rates?date=01.03.2023';
const option = {
  headers: {
    'Access-Control-Allow-Origin': " "
  }
}
fetch(url,option).then(console.log)