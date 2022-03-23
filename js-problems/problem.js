// var addNumbrs = [30,40,65,2,3];
// var sum = 0;
// for(var i = 0; i < addNumbrs.length; i++){
//     var getNumbers = addNumbrs[i];
//     sum = sum + getNumbers;
//     console.log(sum);
// }


function addNumbrs(numbers){
    var adNumber = 0;
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        adNumber = adNumber + element;
    }
    return adNumber;
} 
var result = addNumbrs([10,20,30,40]);

console.log(result);

// larged number

function largedNumber(num){
    var larged = 0;
    for(var i =0; i < num.length; i++){
        var element = num[i];
        if(element > larged){
            larged = element;
        }
    }
    return larged;
}

var bigNumber = largedNumber([10,30,19]);
console.log(bigNumber);

// small number

function smallNumber(num2){
    let small = num2[0];
    for(let i = 0; i <num2.length; i++){
        var element = num2[i];
        if (element < small) {
            small = element;
        }
    }
    return small;
}
var smallNumber = smallNumber([40,93,4]);
console.log('small ' + smallNumber);