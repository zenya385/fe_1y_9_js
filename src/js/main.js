// console.log('hello')


fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(response=>{
  // console.log('response =>', response)
  return response.json();
}).then(pokemon=>{
console.log('pokemon', pokemon)
}).catch(
error=>{
  console.log('error', error)
}
)