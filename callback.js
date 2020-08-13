// (function hello(){
//     name = 'anik sarker';
//     print(name);
// })();

// function print(args){
//     console.log(args);
// }
// function time() {
//     const date = new Date();
//     time = date.toLocaleTimeString();
//     console.log(time);
// }

// function fullName(name, greeting, time) {
//     greeting(name);
//     time();
// }

// function morning(name) {
//     console.log(`Hi, ${name}. Good Morning`);
// }

// function evening(name) {
//     console.log(`Hi, ${name}. Good evening`);
// }

// fullName('anik sarker', morning, time);


// function print(data, callback1, callback2) {
//     callback1(data);
//     callback2(data);
// }

// print('js is a awesome language to learn', data => {
//     const upperCase = data.toUpperCase();
//     console.log(upperCase);
// }, data => {
//     const lowerCase = data.toLowerCase();
//     console.log(lowerCase);
// })

const person = {
    name: 'anik sarker',
    age: 17
}

function print(person, callback){
    console.log(`name: ${person.name} \nage: ${person.age}`);
    if(person.age > 20){
        callback(person.age);
    }else{
        console.log('you are not a adult person');
    }
}

print(person, (age) => {
    console.log('your are a adult person');
})