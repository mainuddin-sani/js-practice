// get input value
function getInputValue(id) {
  const getInput = document.getElementById(id);
  const getInputValue = parseFloat(getInput.value);
  getInput.value = " ";
  return getInputValue;
}

// get inner text
function getInnerText(id, amount) {
  const getInnerText = document.getElementById(id);
  const getInnerTextValue = parseFloat(getInnerText.innerText);
  const previousTotalValue = getInnerTextValue + amount;
  getInnerText.innerText = previousTotalValue;
}

// Main balance update
function getMainValue(amount, isAdding) {
  const getMainValue = document.getElementById("balance");
  const getMainTextValue = parseFloat(getMainValue.innerText);
  let newBalance;
  if (isAdding == true) {
    newBalance = getMainTextValue + amount;
  } else {
    newBalance = getMainTextValue - amount;
  }

  getMainValue.innerText = newBalance;
}

// click addEventListener
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const setInputAmount = getInputValue("deposit-amount");
    if (setInputAmount > 0) {
      getInnerText("deposit-balance", setInputAmount);
      getMainValue(setInputAmount, true);
    } else {
      alert("Please enter a valid amount");
    }
  });

document    
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const setInputAmount = getInputValue("withdraw-amount");
    const blance = getInputValue("balance");
    if (setInputAmount > 0 && setInputAmount <= blance) {
      getInnerText("withdraw-balance", setInputAmount);
      getMainValue(setInputAmount, false);
    }
  });
