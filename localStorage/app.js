// const userNmae = localStorage.setItem('userName', 'Sani');
const getName = localStorage.getItem("userName");
console.log(getName);

// const users = localStorage.setItem('name', 'Main Uddin Sani',);
// const usersPassword = localStorage.setItem('password', 1234567);



// const usersPassword = localStorage.setItem('password', 1234567999999);
// localStorage.removeItem('password')
// const showUsers = localStorage.getItem('name');
// const showPassword = localStorage.getItem('password');
// set array local storage
const friendsName = ['Mainuddin Sani', 'Tanim', 'Zahid', 'Arif'];
localStorage.setItem('bondhu', JSON.stringify(friendsName))

// get item form localstorage
const parseFile = JSON.parse(localStorage.getItem('bondhu'));
console.log(parseFile);
