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

