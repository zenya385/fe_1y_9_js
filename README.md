# Імперативний і декларативний код. Чисті функції. Перебираючі методи масиву.

1. Імперативний і декларативний код.
2. Чисті функції.
3. Перебираючі методи масиву. forEach(), map(), filter(), find(), every(), some().

================ example ============================

<!--======================= Example 1 - Метод forEach ========================== -->

Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

function logItems(items) { console.log(items); for (let i = 0; i < items.length; i += 1) {
console.log(`${i + 1} - ${items[i]}`); } }

logItems(['Mango', 'Poly', 'Ajax']); logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

<!--======================= Example 2 - Метод forEach ========================== -->

Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

function printContactsInfo({ names, phones }) { const nameList = names.split(','); const phoneList =
phones.split(','); for (let i = 0; i < nameList.length; i += 1) {
console.log(`${nameList[i]}: ${phoneList[i]}`); } }

printContactsInfo({ names: 'Jacob,William,Solomon,Artemis', phones:
'89001234567,89001112233,890055566377,890055566300', });

<!--======================= Example 3 - Метод forEach ========================== -->

Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

function calсulateAverage(...args) { let total = 0; for (let i = 0; i < args.length; i++) { total +=
args[i]; } return total / args.length; }

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5 console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

================================================================================== Колекція об'єктів
для всіх прикладів з автомобілями const cars = [ { make: 'Honda', model: 'CR-V', type: 'suv',
amount: 14, price: 24045, onSale: true }, { make: 'Honda', model: 'Accord', type: 'sedan', amount:
2, price: 22455, onSale: true }, { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price:
24195, onSale: false }, { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520,
onSale: true }, { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale:
false }, { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
{ make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true }, { make:
'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true }, { make: 'Ford',
model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true }, { make: 'Ford', model:
'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false } ];


 Example 1 - Метод map Нехай
функція getModels повертає масив моделей (поле model) всіх автомобілів.

const getModels = cars => {};

console.table(getModels(cars)); Example 2 - Метод map Нехай функція makeCarsWithDiscount повертає
новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

const makeCarsWithDiscount = (cars, discount) => {};

console.table(makeCarsWithDiscount(cars, 0.2)); console.table(makeCarsWithDiscount(cars, 0.4));
Example 3 - Метод filter Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
значення параметра threshold.

const filterByPrice = (cars, threshold) => {};

console.table(filterByPrice(cars, 30000)); console.table(filterByPrice(cars, 25000)); Example 4 -
Метод filter Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких
true.

const getCarsWithDiscount = cars => {};

console.table(getCarsWithDiscount(cars)); Example 5 - Метод filter Нехай функція getCarsWithType
повертає масив автомобілів тип яких збігається зі значенням параметра type.

const getCarsWithType = (cars, type) => {};

console.table(getCarsWithType(cars, 'suv')); console.table(getCarsWithType(cars, 'sedan')); Example
6 - Метод find const getCarByModel = (cars, model) => {};

console.log(getCarByModel(cars, 'F-150')); console.log(getCarByModel(cars, 'CX-9')); Example 7 -
Метод sort Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за
зростанням значення якості amount.

const sortByAscendingAmount = cars => {};

console.table(sortByAscendingAmount(cars)); Example 8 - Метод sort Нехай функція
sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення
властивості price.

const sortByDescendingPrice = cars => {};

console.table(sortByDescendingPrice(cars)); Example 9 - Метод sort Нехай функція sortByModel
повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному
алфавітному порядку, в залежності від значення параметра order.

const sortByModel = (cars, order) => {};

console.table(sortByModel(cars, 'asc')); console.table(sortByModel(cars, 'desc')); Example 10 -
Метод reduce Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення
властивостей amount).

const getTotalAmount = cars => {};

console.log(getTotalAmount(cars)); Example 11 - Ланцюжки методів Нехай функція getAvailableCarNames
повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

const getModelsOnSale = cars => {};

console.table(getModelsOnSale(cars)); Example 12 - Ланцюжки методів Нехай функція
getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за
зростанням ціни.

const getSortedCarsOnSale = cars => {};

console.table(getSortedCarsOnSale(cars));
