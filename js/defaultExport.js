//*  Default export Експорт за замовчуванням - експортує всього одну сутність. Експортоване значення, яке може бути чим завгодно: змінною, функцією, класом тощо.

export default function getValue(array, key) {
  let res = [];
  for (let i = 0; i < array.length; i += 1) {
    // const element = array[i];
    res.push(array[i][key]);
  }
  return res;
}

// export default getValue;
