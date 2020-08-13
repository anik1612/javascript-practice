const person = {
    name: 'anik',
    Profession: 'student',
    age: 22,
    lover: {
        name: 'sathi',
        profession: 'doctor'
    },
    friend: ['sagor', 'kalfan', 'shamim', 'neymar'],


}
const friendCpy = [];

console.log(person.lover.profession)
person.friend.forEach(name => friendCpy.push(name));
console.log(friendCpy);