// const array = []; // пустий масив

// const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const arrStr = ['Jon', 'Vova', 'Iruna', undefined, undefined];

// console.log('name:>>', arrStr[2]);
// console.log('number:>>', arrayNum[6]);
// console.log('number:>>', arrayNum.length);

// =======================

const clients = ['Jon', 'Vova', 'Iruna', 'Vitaliy', 'Sergio', 'giygi'];
const numbers = [];

// console.log('clients:>>', clients.length);
// clients.length = 7;s
// console.log('clients:>>', clients.length);
// console.log('clients:>>', clients);
// console.log('clients:>>', clients[5]);
// clients.length = 2;
// console.log('clients:>>', clients);

// for (let i = 0; i < clients.length; i += 1) {
//   const element = clients[i];
//   console.log('>>', element);
// }

// for (let i = 0; i < 10; i += 1) {
//   numbers.push(`number-${i}`);
// }
// console.log('numbers:>>', numbers);

for (const client of clients) {
  console.log(client);
}

for (let index = 0; index < clients.length; index += 1) {
  const element = clients[index];
  console.log(':>>', element);
}
