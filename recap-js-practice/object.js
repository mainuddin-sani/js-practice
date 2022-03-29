const usersInfo = [
    {
        name: 'mainuddin sani',
        salary: 500,
        age: 23,
        position: 'Frontend Developer',
    },
    {
        name: 'Jalal',
        salary: 600,
        age: 24,
        position: 'Frontend Developer',
    },
    {
        name: 'sadi',
        salary: 700,
        age: 21,
        position: 'Frontend Developer',
    },
    {
        name: 'madi',
        salary: 800,
        age: 20,
        position: 'Frontend Developer',
    }
]


function sumSalary(salary){
    var usersSalary = 0;
    for(const user of salary){
        usersSalary = usersSalary + user.salary;
    }
    return usersSalary;
}

const totalUserSalary = sumSalary(usersInfo)
console.log(totalUserSalary);

// all user big amount salary
 
function bigAmountSalary(bigAmount){
    let bigSalary = usersInfo[0];
    for(const big of bigAmount){
        if(bigSalary.salary > big.salary){
            bigSalary = big;
        }
    }
    return bigSalary;
}

const userBigSalary = bigAmountSalary(usersInfo);
console.log(userBigSalary);