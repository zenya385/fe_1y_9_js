'use strict';

// const num = 15;
// const res = num < 10 && num > 20; //false
// console.log('res:>>', res);

// true && true;
// console.log('15===15 && 15!==15:>>', 15 === 15 && 15 !== 15);
// console.log('15==="15" || 15!==15:>>', 15 === '15' || 15 === 15);
// console.log('true && true:>>', true && true);

console.log('6 && 0:>>', 6 && 0); // 0
console.log('0 && 6:>>', 0 && 6); // 0
console.log('0 && null:>>', 0 && null); // 0
console.log('null && :>>0', null && 0); // null

console.log('6 || 0:>>', 6 || 0); // 6
console.log('0 || 6:>>', 0 || 6); // 6
console.log('0 || null:>>', 0 || null); // null
console.log('null || 0:>>', null || 0); // 0

//! 0, null, NaN, undefined, '', false - Ці значення прирівнюються до false, всі інші до true;
