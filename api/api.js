const users = {
    name: 'Mainuddin',
    age: 25,
    location: 'Dhaka',
    position: 'Software Engineer',
}
console.log(users);
const stringiFy = JSON.stringify(users);
console.log(stringiFy);
const convert = JSON.parse(stringiFy);
console.log(convert);