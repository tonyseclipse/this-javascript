const lastElement = arr => arr[arr.length - 1];
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));