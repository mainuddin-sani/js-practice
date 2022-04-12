// arrow function

const numbers = [1, 2, 3, 4, 5];

const frineds_Array = ['Mianuddin', 'Kalam', 'Malam'];


function add(x) {
    return x + 2;
}
const friends = frineds_Array.map(num => num + ' is a friend');
console.log(friends);

const add_sum = numbers.map(add);
console.log(add_sum);

const multiplay = numbers.map(x => x*2);
console.log(multiplay);

let users = [
    {name: 'Mianuddin', age: 20},
    {name: 'Kalam', age: 30},
    {name: 'Malam', age: 40},
    {name: 'Mani', age: 50},
]

const user_age = users.map(user => {
    return `${user.name} is ${user.age} years old`;
});

console.log(user_age);

// filter

const filter = numbers.filter(x => x < 5);
console.log(filter);

const filterNames = users.filter(user => user.name == "Mani");
console.log(filterNames);

// find 

const find = users.find(user => user.name == "Mani");
console.log('find', find);