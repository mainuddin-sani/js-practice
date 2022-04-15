// data loaded from api

const dataload = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayData(data))
}
dataload();

const displayData = getData => {
    console.log(getData);
    const qoute = document.getElementById('qoute');
    qoute.innerText = getData.quote;
}


const randomUser = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => randomDisplay(data))
}
randomUser();

const randomDisplay = (random) => {
    const randomUsers = random.results;
    const myList = document.getElementById('myList');
    for(const users of randomUsers){
        const createDiv = document.createElement('li')
        myList.appendChild(createDiv);
        createDiv.innerText = `${users.name.first} ${users.name.last} ${users.email}`;
        console.log(users);
    }
}