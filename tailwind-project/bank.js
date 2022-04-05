// handler deposit amount 

document.getElementById('deposit-button').addEventListener('click', function(){
    // get deposit amount
    const depositInputField = document.getElementById('deposit-amount');
    let depositAmount = parseFloat(depositInputField.value);
    console.log(depositAmount);
    // set deposit amount 
    const depositBalance = document.getElementById('deposit-balance');
    const previousBalance = parseFloat(depositBalance.innerText);
    const totalDepositbalnce = previousBalance + depositAmount;
    console.log(previousBalance);
    depositBalance.innerHTML = totalDepositbalnce;
    // empty deposit input
    depositInputField.value = " ";


    // balancce update
    const balance = document.getElementById('balance');
    const balanceText = parseFloat(balance.innerText);
    const totalBalance = balanceText + depositAmount;
    balance.innerHTML = totalBalance;
    console.log(balanceText);

});

// handler withdraw amount

document.getElementById('withdraw-button').addEventListener('click', function(){
     // get withdraw amount
     const withdrawInputField = document.getElementById('withdraw-amount');
     let withdrawtAmount = parseFloat(withdrawInputField.value);
     console.log(withdrawtAmount);

     const displayWitdraw = document.getElementById('withdraw-balance');
    const previousWithdraw = parseFloat(displayWitdraw.innerText);
    const totalWithdraw = previousWithdraw + withdrawtAmount;
    displayWitdraw.innerHTML = totalWithdraw;
    // get balance

    const balance = document.getElementById('balance');
    const balanceText = parseFloat(balance.innerText);
    const totalwithdrawBalance = balanceText - totalWithdraw;
    balance.innerHTML = totalwithdrawBalance;
    console.log('balance ', +  totalwithdrawBalance);

    console.log(previousWithdraw);
    withdrawInputField.value = " ";
});