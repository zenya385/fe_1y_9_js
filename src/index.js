

// async/await


function getFruits(name) {
  const fruits = {
    strawberry: "🍓",
    kiwi: "🥝 ",
    apple: "🍎",
  };
  

  // return Promise.resolve(fruits[name])

return new Promise((resolve, reject)=>
setTimeout(resolve(fruits[name]), 1500)
)
}

// getFruits('apple').then(apple=>console.log('apple =>', apple))


async function makeSmoothi() {
  console.time('makeSmoothi')

const apple = await getFruits('apple')
console.log(apple);
const kiwi =  await getFruits('kiwi')
console.log(kiwi);
const strawberry =  await getFruits('strawberry')
console.log(strawberry);
  
//  getFruits('apple').then(apple=>{
//   console.log('apple =>', apple);
//   getFruits('kiwi').then(kiwi=>{
//     console.log('kiwi =>', kiwi);
//     getFruits('strawberry').then(strawberry=>
//     {console.log('strawberry =>', strawberry)})
//   })
// })
console.timeEnd('makeSmoothi')
// return fruits
}


makeSmoothi()


