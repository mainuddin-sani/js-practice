var mathNumber = Math.random() * 10;
console.log(mathNumber);
var floorNumber = Math.floor(mathNumber);
console.log(floorNumber);
var ceilNumber = Math.ceil(mathNumber);
console.log(ceilNumber);
var roundNumber = Math.round(mathNumber);
console.log(roundNumber);


function randomNumber(num){
    var lotari = Math.floor(Math.random() * num);
    return lotari;
}

var inputNumber = 10;
var lotariNumber = randomNumber(inputNumber);
console.log(lotariNumber);

