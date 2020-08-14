let p = 5;
let q = 7;

[p, q] = [q, p];
console.log(p, q);

let a, b, rest;

const x = [1, 2, 3, 4, 5];

[a, b, ...rest] = x;

console.log(a, b, rest);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const c = [...arr1, ...arr2];
console.log(c);