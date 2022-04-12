// template string

const users ={
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

const {id, name, age, position, salary, address, google} = users;
const userInfoShow = `${id} My name is ${name} and I am ${age} years old. I am a ${position} and I get ${salary} per month. I live in ${address} and I work at ${google.name}`;
console.log(userInfoShow);

// 2nd task

// arrow function with one parameter . will return the number after dividing by 5

const dividing = (x) => {
    return x/5
}
const result = dividing(10);
console.log(result);

const Number = (a, b) => {
    const firstNumber = a + 2;
    const secondNumber = b + 2;
    const multiplay = firstNumber * secondNumber;
    return multiplay;
}
const result2 = Number(10, 20);
console.log(result2);

// three parameters

const threeNumber = (a,b,c) =>(a*b*c);
const result3 = threeNumber(2,2,2);
console.log(result3);
// function declaration vs arrow function 
var add = function add(a, b){
    return a * b;
}
// Es6
const multiplay = (a,b) => a * b;


// map function

const numbers = [1, 2, 3, 4, 5];
const multiplayNumber = numbers.map(x => x * 5);
console.log(multiplayNumber);

const mixNumber = [1, 34, 9, 29, 25, 56, 54, 33, 11, 99];
const oddNumberOutput = [];
const oddNumbers = mixNumber.map(x =>{
    if(x % 2 !== 0){
        oddNumberOutput.push(x);
    }else {
        return;
    }
});
console.log(oddNumberOutput);

const thirtNumber = (a,b,c = 7) => {
    return a * b * c;
}
const result4 = thirtNumber(2,2);
console.log(result4);

