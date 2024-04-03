const promise = new Promise((resolve, reject)=>{

// setTimeout(()=>{
  const canFulFill = Math.random() > 0.5;

  if(canFulFill){
    resolve('resolve => Обіцянка виконалась успішно!'); 
  }else{
    reject('reject => Обіцянка не виконалась, помилка!'); }
// }, 1000)
})
// console.log(promise);


promise.then(
  (result)=>{
    console.log( `✅ ${result}`);
  }).catch(    
   (error)=>{
    console.log(`❌ ${error}`);
  }
      )
