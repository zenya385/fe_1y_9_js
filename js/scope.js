// ============================= область видимості=======================

// const value = 5; // глобальна область видимості

// if (true) {
//   const value1 = 'qwe';

//   // console.log('Block scope: ', value); // 5
//   console.log('Block value1:>>', value1);
// }

// // console.log('Global scope: ', value); // 5
// console.log('Global value1:>>', value1); // scope.js:12 Uncaught ReferenceError: value1 is not defined
// {
//   let x = 2; //
// }

// console.log('x:>>', x);

// console.log('myName:>>', myName);  //// код тут НЕ МОЖЕ використовувати myName

// if (true) {
//   const myName = 'Roman';
//   let age = 18;
//   console.log(`Привіт я ${myName} і мені ${age} років`);
//   // console.log('myName:>>', myName);
// }

// console.log(`Привіт я ${myName} і мені ${age} років`);
// // console.log('myName:>>', myName);

// const global = 'global';

// if (true) {
//   const blockA = 'block A';

//   console.log(global);
//   console.log(blockA);
//   console.log(blockB);
//   console.log(blockC);

//   if (true) {
//     const blockB = 'block B';
//     console.log(global);
//     console.log(blockA);
//     console.log(blockB);
//     console.log(blockC);
//   }
// }
// if (true) {
//   const blockC = 'block C';
//   console.log(global);
//   console.log(blockC);
//   console.log(blockA);
//   console.log(blockB);
// }

// console.log(global);
// console.log(blockA);
// console.log(blockB);

let res;
function num(a, b) {
  res = a + b;
}

res = num(2, 8456);

res;

console.log('res:>>', res);
