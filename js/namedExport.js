//* Named export Модуль може експортувати декілька сутностей, які відрізняються своїми іменами і називаються іменованими експортами. Щоб імпортувати їх в інший модуль, необхідно знати імена експортованих сутностей, які ми хочемо імпортувати.

export function getValue1(array, key) {
  let res = [];
  for (let i = 0; i < array.length; i += 1) {
    // const element = array[i];
    res.push(array[i][key]);
  }
  return res;
}

export function getValue2(array, key) {
  let res = [];
  for (let i = 0; i < array.length; i += 1) {
    // const element = array[i];
    res.push(array[i][key]);
  }
  return res;
}

export const getValue3 = function (array, key) {
  let res = [];
  for (let i = 0; i < array.length; i += 1) {
    // const element = array[i];
    res.push(array[i][key]);
  }
  return res;
};

// export { getValue1, getValue2, getValue3};
