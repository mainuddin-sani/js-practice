var rollNumber = [12,30,40,56,88,89,90];

for(var i = 0; i < rollNumber.length; i++){
    var rollNumbers = rollNumber[i];
    if(rollNumbers == 89){
        break
    }
    console.log(rollNumbers);
}

var car = ['Toyta', 'sunny', 'mushbia', 'ferary', 'lumburginy'];
for(var i = 0; i < car.length; i++){
    var carName = car[i];
    console.log(carName);
    if(carName == 'Toyta'){
        break
    }
    console.log(carName);
}

function getReminder(num1, num2){
    num1 % num2;
}

const reminder = getReminder(12, 2);
console.log(reminder);

function addNumber(number1, number2) {
    return "Result is " + number1 + number2;
   }
   
   var result = addNumber(5, 4);
   console.log(typeof(result));