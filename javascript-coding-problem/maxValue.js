var sani = 10;
var mani = 20;

if (sani > mani) {
    console.log('sani is big');
}else {
    console.log('mani is big');
}

var elonMask = 100;
var billGates =190;
var stipJoss = 50;

if (elonMask > billGates && elonMask > stipJoss) {
    console.log('elon mask is bllioner');
}else if(billGates > elonMask && billGates > stipJoss){
    console.log('Bill gueds is bllioner');
}else {
    console.log('stipjoss is billioner');
}

function threePeramitters(first, second, three){
    if(first > second && first > three){
        return first;
    }else if(second > first && second > three) {
        return second;
    }else {
        return three;
    }
}

var threeMax = threePeramitters(12,3, 40);
console.log('big Number ' + threeMax);



// small number two smallist number

function twoNumberSmall(num1, num2){
    if (num1 < num2) {
        return num1;
    }else {
        return num2;
    }
}

var twoNumberResult = twoNumberSmall(13,12);
console.log('small ' + twoNumberResult);

function threeNumbersamll(one, two, three){
    if (one <= two && one <= three) {
        return one;
    }else if(two <= one && two <= three){
        return two;
    }else {
        return three;
    }
}

var threeNumber = threeNumbersamll(4,3,5);
console.log('Thre number of small ' + threeNumber);
