
// getFruits('apple').then(data=>data.json()).then(apple=>console.log('apple =>', apple)).catch()


// async/await

// try {
  
// } catch (error) {
  
// }

function getFruits(name) {
  const fruits = {
    strawberry: "🍓",
    kiwi: "🥝 ",
    apple: "🍎",
  };
  

  // return Promise.resolve(fruits[name])

return new Promise((resolve, reject)=>
setTimeout(()=>resolve(fruits[name]), 500)
)
}

// getFruits('apple').then(apple=>console.log('apple =>', apple))


async function makeSmoothi() {

  try {
    console.time('makeSmoothi')

    const apple =  getFruits('apple')
    // console.log(apple);
    const kiwi =   getFruits('kiwi')
    // console.log(kiwi);
    const berry =   getFruits('strawberry')
    // console.log(berry);
      
    //  getFruits('apple').then(apple=>{
    //   console.log('apple =>', apple);
    //   getFruits('kiwi').then(kiwi=>{
    //     console.log('kiwi =>', kiwi);
    //     getFruits('strawberry').then(strawberry=>
    //     {console.log('strawberry =>', strawberry)})
    //   })
    // })
    const fruits = await Promise.all([apple, kiwi, berry])
    console.log('fruits :>> ', fruits);
    
    
    console.timeEnd('makeSmoothi')
    return fruits
  } catch (error) {
    console.log('помилка :>> ', error);
  }

}


makeSmoothi()




// Function declaration
async function fn(params) {
  // await
}

// Functional expression
const fn = async function (){
  // await
}

// Arrow function
const fn = async ()=>{
  // await
}

// Object method
const obj = {
 async fn(){
  // await
  }
}

// Class method
class Hero {
 async fn(){
  // await
 }
}