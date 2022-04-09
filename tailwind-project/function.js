// function to get the current date

function getInputValue(inputvalue){
    const inputValue = document.getElementById(inputvalue);
    const inputValueText = parseFloat(inputValue.value);
    console.log(inputValueText);
    inputValue.value = " "
    return inputValueText;
    
}

// update value

function valueUpdate(updateValue, amount){
    const upateValue = document.getElementById(updateValue);
    const upateValueText = upateValue.innerText;
    const previusTotal = parseFloat(upateValueText);
    const newUpdateValue = previusTotal + amount;
    upateValue.innerText = newUpdateValue;
}

function updateBalance(amount, isAdding){
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const previousBalance = parseFloat(balanceText);
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }else {
        newBalance = previousBalance - amount;
    }
    
    balance.innerText = newBalance;
}

document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-amount');
    valueUpdate('deposit-balance', amount);
    updateBalance(amount, true);
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-amount');
    valueUpdate('withdraw-balance', amount);
    updateBalance(amount, false);
});