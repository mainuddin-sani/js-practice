let sum = 0;
for (let i = 5; i>=1; i--) {
    sum = sum + i;
    // console.log(sum);
}

// function 

function add(i){
    if(i == 1){
        return 1;
    }
    return i + add(--i);
}
add(5);

// factorial

let factorial = 1;

for(let i = 4; i >= 1; i--){
    factorial = factorial* i;
}
console.log(factorial);

// function factorial
function factorialAdd(i){
    if(i == 1){
        return 1;
    }
    return i * factorialAdd(--i);
}   

console.log(factorialAdd(4));