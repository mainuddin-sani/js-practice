// feet to inches 

var feet = 4;
var convertInches = feet * 12;
console.log(convertInches);

var inches = 24;
var convertFeet = inches / 12;
console.log(convertFeet);

// how to use function feet to inches

function feetToinches(feet){
    var inches = feet * 12;
    return inches;
}

var incesValue = 20;
var totalInches = feetToinches(incesValue);
console.log(totalInches);

function inchesTofeet(inches){
    var feet = inches / 12;
    return feet;
}
var feetValue = 48;
var totalfeet = inchesTofeet(feetValue);
console.log(totalfeet);

// even & odd 

function isEvent(even) {
    if (even % 2 == 0)  {
        return true;
    }else {
        return false;
    }
}

var evenNumber = 87;
var totalFall = isEvent(evenNumber);
console.log(totalFall);

// odd 

function isOdd(num2){
    if (num2 % 2 !== 0) {
        return true;
    }else {
        return false;
    }
}
var inputNumber = 56;
var oddNumber = isOdd(inputNumber);
console.log(oddNumber);


// leap year 

function isLeapYear(year){
    if (year % 400 == 0 && year%100 !== 0) {
        return "Leap year";
    }else if(year%4 == 0){
        return "Leap year";
    }else {
        return 'not leap year';
    }
}
var inputLeapYear = 2023;
var leapYearResult = isLeapYear(inputLeapYear);
console.log(leapYearResult);

// celsius to fahernheit


function celsiusToFarhenheit(celsius){
    var farhenheitLow = celsius * (9/5) + 32;
    return farhenheitLow;
}

var inputCelsius = 3;
var outFarhenheit = celsiusToFarhenheit(inputCelsius);
console.log(outFarhenheit);


// fahernhei to celsius

function farhenheitTocelsius(farhenheit){
    var farhenheitLow = (farhenheit - 32) * .5556;
    return farhenheitLow;
}

var inputCelsius = 50;
var outputCelsius = farhenheitTocelsius(inputCelsius);
console.log(outputCelsius);


// grede system

function gradeSystem(number){
    if (number >= 80 ) {
        return 'A+';
    }
    else if(number >= 79){
        return "A"
    }
    else if(number >= 69){
        return "A-"
    }
    else if(number >= 59){
        return "B"
    }
    else if(number >= 49){
        return "B"
    }
    else if(number >= 39){
        return "C"
    }
    else if(number >= 39){
        return "D"
    }
    else {
        return 'F';
    }
}

var inputExamNumber = 55;
var result = gradeSystem(inputExamNumber);
console.log(result);

// simple principle interest calculate

function getItnerest(principle,interest,time){
    var perYearInterest = interest / 100;
    console.log(perYearInterest);
    var totalInterest = principle*(perYearInterest*time);
    return totalInterest;
}

var userPrinciple = 10000;
var userIntersest = 3.875;
var userTime = 6;

var userTotalInterest = getItnerest(userPrinciple, userIntersest, userTime);
console.log(userTotalInterest);


 
