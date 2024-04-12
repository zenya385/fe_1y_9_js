// const promise = new Promise((resolve, reject)=>{

// // setTimeout(()=>{
  // const canFulFill = Math.random() > 0.5;

//   if(canFulFill){
//     resolve('resolve => Обіцянка виконалась успішно!'); 
//   }else{
//     reject('reject => Обіцянка не виконалась, помилка!'); }
// // }, 1000)
// })
// console.log(promise);


// promise.then(
//   (result)=>{
//     console.log( `✅ ${result}`);
//   }).catch(    
//    (error)=>{
//     console.log(`❌ ${error}`);
//   }
//       )


  
       

      

      // Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {

  // const canFulFill = Math.random() > 0.5;

//     if (canFulFill) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
 
// });

// promise
//   .then(value => {
//     console.log( `✅ ${value}`);
//     return 12;
//   }).then(result => {
//     console.log( `✅ ${result}`);
//     return  60;
//   }).then(value => {
//     console.log( `✅ ${value}`);
//   })
//   .catch(error => {
//     console.log(`❌ ${error}`);
//   }).finally(()=>{
//     console.log('finally => виконається незалежно від результату виконання then та catch')
//   });


//   console.log('promise => ', promise)



  // const fetchUserFromServer = username => {


  //   return new Promise((res, rej) => {
  //     console.log(`Fetching data for ${username}`);
  
  //     setTimeout(() => {
  //       // Change value of isSuccess variable to simulate request status
  //       // const isSuccess = true;
  // const canFulFill = Math.random() > 0.5;

  
  //       if (canFulFill) {
  //         res("success value");
  //       } else {
  //         rej("error");
  //       }
  //     }, 1000);
  //   });
  
  // };
  
  // fetchUserFromServer("Mango")
  //   .then(user => console.log(user))
  //   .catch(error => console.error(error));

//* ========================================================================================

//   const delay = ms => {
//     return new Promise( res=> {
//       // console.log(`Fetching data for ${username}`);
  
//       setTimeout(() => {
//         // Change value of isSuccess variable to simulate request status
//         // const isSuccess = true;
//   // const canFulFill = Math.random() > 0.5;

  
//         // if (canFulFill) {
//           res(ms);
//         // } else {
//           // rej("error");
//         // }
//       }, ms);
//     });
  
//   };

//   const logger = time => console.log(`Resolved after ${time}ms`);
  
//   // fetchUserFromServer("Mango")
//     // .then(user => console.log(user))
//     // .catch(error => console.error(error));


//     delay(2000).then(time => console.log(`Resolved after ${time}ms`)); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

//* ================================== Promise.all() ================================================

// const makePromise = (text, delay) => {
  //   return new Promise(resolve => {
    //     setTimeout(() => resolve(text), delay);
    //   });
    // };
    
    // const promiseA = makePromise("promiseA value", 1000);
    // const promiseB = makePromise("promiseB value", 3000);
    
    // Promise.all([promiseA, promiseB])
    //   .then(value => console.log(value)) //["promiseA value", "promiseB value"]
    //   .catch(error => console.log(error));


    //* =============================== Promise.race() ===================================================
    
    // const makePromise = (text, delay) => {
    //   return new Promise(resolve => {
    //     setTimeout(() => resolve(text), delay);
    //   });
    // };

    
    // const promiseA = makePromise("promiseA value", 1000);
    // const promiseB = makePromise("promiseB value", 2000);
    // const promiseC = makePromise("promiseC value", 3000);
    // const promiseD = makePromise("promiseD value", 4000);
    
    // Promise.all([promiseA, promiseB, promiseC, promiseD])
    // .then(value => console.log(value)) // "promiseA value"
    // .catch(error => console.log(error));


    //* =============================== Promise.resolve() і Promise.reject() =======================================

// // Fulfilled promise
// new Promise(resolve => resolve("success value")).then(value =>
//   console.log(value)
// );

// Promise.resolve("success value").then(value => console.log(value));

// // Rejected promise
// new Promise((resolve, reject) => reject("error")).catch(error =>
//   console.error(error)
// );

// Promise.reject("error").catch(error => console.error(error));


// ================================= промісифікація функцій ==================================


const makeGreeting = guestName => {
  if (guestName === "" || guestName === undefined) {
    return {
      success: false,
      message: "Guest name must not be empty",
    };
  }

  return {
    success: true,
    message: `Welcome ${guestName}`,
  };
};

const result = makeGreeting("");

if (result.success) {
  console.log(result.message);
} else {
  console.error(result.message);
}

// ===================================================================

const makeGreeting1 = (guestName, onSuccess, onError) => {
  if (guestName === "" || guestName === undefined) {
    return onError("Guest name must not be empty");
  }
  onSuccess(`Welcome ${guestName}`);
};

makeGreeting1(
  "Mango",
  greeting => console.log(greeting),
  error => console.error(error)
);


// ===================================================================

const makeGreeting3 = guestName => {
  if (guestName === "" || guestName === undefined) {
    return Promise.reject("Guest name must not be empty");
  }

  return Promise.resolve(`Welcome ${guestName}`);
};

makeGreeting3("Mango")
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));