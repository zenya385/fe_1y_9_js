const BASE_URL = 'http://localhost:5555'

// Реалізуйте функцію, яка виводить всі фільми з бази даних. Використайте HTTP-метод GET і адресу /movies.
// ========== getMovies =================

function getMovies() {
  return fetch(`${BASE_URL}/movies`).then(res=>res.json()).then(movies=>console.log('movies :>> ', movies))
}

getMovies()


// Реалізуйте функцію, яка додає новий фільм до бази даних. Використайте HTTP-метод POST і адресу /movies. Передайте дані нового фільму відповідному форматі.

// ========== postMovies =================

function addMovie(movie) {
  const options = {
    method:"POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(movie)
  }
  return fetch(`${BASE_URL}/movies`, options).then(res=>res.json())
  // .then(movies=>console.log('movies :>> ', movies))
}

// addMovie({
//     "title": "Superman",
//       "genre": "Action",
//       "director": "Zeno",
//       "year": 2023
// }).then(renderMovie)

function renderMovie(movie){
  console.log( 'Прийшла відповідь від бекенда, можна рендерити');
  console.log('movie :>> ', movie);

}

// Реалізуйте функцію, яка оновлює інформацію про фільм за його ідентифікатором. Використайте HTTP-метод PUT і адресу /movies/:id, де :id — ідентифікатор фільму.

// ========== putMovies =================


// function updatemovieById(update, movieId) {
//   const options = {
//     method:"PUT",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(update)
//   }
//   return fetch(`${BASE_URL}/movies/${movieId}`, options).then(res=>res.json())
//   // .then(movies=>console.log('movies :>> ', movies))
// }

// updatemovieById({ "genre": "Action", "director": "Zeno"}, 10 )




// ========== patchMovies =================

function updateMovieById(update, movieId) {
  const options = {
    method:"PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(update)
  }
  return fetch(`${BASE_URL}/movies/${movieId}`, options).then(res=>res.json())
  // .then(movies=>console.log('movies :>> ', movies))
}

// updateMovieById({ "genre": "Fantasi", "director": "Diana"}, '04d3' )



// =============== deleteMovies =====================


function removeMovie(movieId) {
  const options = {
    method:"DELETE"
  }
  return fetch(`${BASE_URL}/movies/${movieId}`, options).then(res=>res.json())
}

// removeMovie("04d3")