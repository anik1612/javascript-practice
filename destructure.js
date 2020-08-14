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

//parsing an array returned form a function

function f(){
    return [1, 2, 3];
}

const [value,value2] = f();
console.log(value,value2);


//ignoring some return values
const [value3, , value4] = f();
console.log(value3,value4);

//object destructuring 
const user = {
    name: 'anik sarker',
    id: 1,
    isVerified: true
};

const {id, isVerified, name} = user;

console.log(id,isVerified, name);

//assign to new variable names 

const o = {p: 42, q: true};

const {p: foo, q: bar} = o;

console.log(foo, bar);

const  {a = 10, b = 5} = {a: 3}

console.log(a,b);

