// load data

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data));
}

function displayData(data){
    const myList = document.getElementById('myList');
    for(user of data){
    console.log(user)
        const li = document.createElement('li');
        li.innerText = `My Name is a ${user.name}. I live ${user.address.city}`;
        myList.appendChild(li);
    }
    console.log(myList)
}