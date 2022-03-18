// array

var rollNumber = [1,2,3,4,5,6];
let index = rollNumber.indexOf(9);
rollNumber.push(59);
rollNumber.push(100);
for(var i = 0; i < rollNumber.length; i++){
    console.log(rollNumber);
}
console.log(rollNumber);


// string array

var nameInfo = ['sani', 'man', 'kalam', 'jamal'];
var nameResult = nameInfo[0];
var nameResultIndex = nameInfo.indexOf('mani');
console.log(nameResultIndex);
console.log(nameResult);
nameInfo.push('mala');
nameInfo.push('jala');
console.log(nameInfo);

//  push pop

let nameOfArray = ['java', 'pyton', 'javascript', 'C++', 'C#'];
nameOfArray.push('heads');
nameOfArray.push('name');
nameOfArray.push('typescript');
nameOfArray.push('react');
nameOfArray.push('react Native');
console.log(nameOfArray);


// empty array

let bdPlayer = [];
bdPlayer.push('Masrafee');
bdPlayer.push('Sakib');
bdPlayer.push('mushfiq');
bdPlayer.push('Rubel');
bdPlayer.push('Taskin');
bdPlayer.push('Tamim');
bdPlayer.push('Riyad');
console.log(bdPlayer);





// 

var favoriteBook = 'Amar sonar bangla';

var bookList = ['Math', 'javascript language', 'pyton', 'amar sonar bangla', 'history'];
var indexNumber =  bookList.indexOf('Math');
console.log(indexNumber);
var nameCange = bookList[2];
bookList[2] = 'main';
console.log(bookList);