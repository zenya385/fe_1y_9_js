//*  Default import
import getValueAnyName from './js/defaultExport.js';

//* Named import
//* I спосіб імпорту
import { getValue1, getValue2, getValue3 } from './js/namedExport.js';

//* I спосіб імпорту (Синтаксис імпортує всі експорти модуля як об'єкт із зазначеним ім'ям. Це називається namespace import.)
import * as myModule from './js/namedExport.js';

const superHero = [
  { id: 123456, hero: 'batmen', power: 'money' },
  { id: 789010, hero: 'aqumen', power: 'fishpower' },
  { id: 789010, hero: 'supemen', power: 'superhuman' },
  { id: 789010, hero: 'supemen', power: 'cling to nearly any surface' },
];

console.log('getValue', getValueAnyName(superHero, 'power'));

console.log('getValue1', getValue1(superHero, 'hero'));
console.log('getValue2', getValue2(superHero, 'id'));
console.log('getValue3', getValue3(superHero, 'power'));

//* Наступний синтаксис імпортує всі експорти модуля як об'єкт із зазначеним ім'ям. Це називається namespace import.
console.log('myModule.getValue1', myModule.getValue1(superHero, 'hero'));

//* получаємо значення із масиву (банально)

// let res = [];
// for (let i = 0; i < superHero.length; i += 1) {
//   res.push(superHero[i][power]);
// }
// console.log('res', res);
