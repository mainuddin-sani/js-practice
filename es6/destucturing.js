const fish ={
    id: 1,
    name: 'Mianuddin',
    age: 20,
    position: 'Frontend Developer',
    salary: '$50,000',
    address: 'New York',
    google: {
        id: 1,
        name: 'Google',
        employees: ['mainuddin', 'kalam', 'malam'],
    }
}
console.log(fish);

const {id, name, age, position, salary, address, google} = fish;
console.log(google.name);


// destructuring array
const [a,b,c,d,e,f] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a,b,c,d,e,f);