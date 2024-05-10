import './css/common.css';


const serchForm = document.querySelector('.js-search-form')

serchForm.addEventListener('submit', onSearch)



function onSearch(e) {
   e.preventDefault();
   
 const searchQuery = e.currentTarget.elements.query.value;  

const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=ru&pageSize=10&page=1`;

const options = {
headers: {
    Authorization: "d0205bfe10a640c49097fdd9880f430c",
}
}

   fetch(url, options)
  .then(response => {
    // Response handling
    if (!response.ok) {
        throw new Error(response.status);
      }
    // console.log('response', response)
  return response.json();
  })
  .then(data => {
    // Data handling
    console.log('data', data)
  })
  .catch(error => {
    // Error handling
  });
}


