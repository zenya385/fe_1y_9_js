# Числа. Основні оператори

1. Основні оператори

- Математичні оператори `( + - * / % += -=)`

- Оператори порівняння "(> < >= <=)"
- == і === Cувора рівність та рівність по типам

2. Числа
3. Приведення до числа
4. Number.parseInt() і Number.parseFloat()
5. Перевірка на число
6. Додавання чисел з плаваючою точкою
7. Об'єкт Math

<!--* ====================================* -->

isNaN(NaN); // true isNaN(undefined); // true isNaN({}); // true

isNaN(true); // false isNaN(null); // false isNaN(37); // false

// strings isNaN("37"); // false: "37" преобразуется в число 37 которое не NaN isNaN("37.37"); //
false: "37.37" преобразуется в число 37.37 которое не NaN isNaN(""); // false: пустая строка
преобразуется в 0 которое не NaN isNaN(" "); // false: строка с пробелом преобразуется в 0 которое
не NaN isNaN("37,5"); // tзовано в число. // При парсинге преобразуется в число при неудаче
возвращает NaN
