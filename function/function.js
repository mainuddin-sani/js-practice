// simple function decleartion

function getTaka(taka){
    console.log('amar kace ' + taka + ' acay');
    var chips = 10;
    var getChips = taka / chips;
    console.log(getChips);
}

var setTaka = 400;
getTaka(setTaka);

// add, multiple, sustract ,  moduleus , divide 

// multiple pera meeter

//  add funtion
function addNumber(num1, num2){
    console.log(num1);
    var addResult = num1 + num2;
    return addResult;
};

var grandTotal = addNumber(2, 3);
console.log(grandTotal);

// multiple funtion

function multipleNumber(multi1, multi2){
    var total = multi1 * multi2;
    return total;
};

var multiGrand = multipleNumber(40, 2);
console.log(multiGrand);

// deivid
function divideNumber(divide1, divide2){
    var totalFal = divide1 / divide2;
    return totalFal;
};

var totalDivide = divideNumber(500, 10);
console.log(totalDivide);

// moudleus 

function moduleusNumber(module1, module2){
    var vagSesh = module2 % module1;
    return vagSesh;
};

var totalfal = moduleusNumber(20, 43);
console.log(totalfal);
