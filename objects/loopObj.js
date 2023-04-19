const obj = { a: 1, b: 2, c: 3 };

// цикл for-in для перебора свойств объекта
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

// цикл for-of для перебора значений объекта
for (const value of Object.values(obj)) {
  console.log(value);
}

// метод Object.keys для получения массива ключей объекта
const keys = Object.keys(obj);
console.log(keys); // выводит ['a', 'b', 'c']

// метод Object.values для получения массива значений объекта
const values = Object.values(obj);
console.log(values); // выводит [1, 2, 3]

// метод Object.entries для получения массива массивов ключ-значение
const entries = Object.entries(obj);
console.log(entries); // выводит [['a', 1], ['b', 2], ['c', 3]]
