const showData = ()=> {
    const cart = getdataFromLocalStorage();
    for(let name in cart){
        displayData(name);
    }
}

const addItems = () => {
  const getInput = document.getElementById("getItemsVlue");
  const getValues = getInput.value;
  getInput.value = "";
  if (!getValues) {
    return;
  }
  // add items from input data
  displayData(getValues);

  // set localstorage
  setInputDataLocalStorage(getValues);
};

const displayData = (input) => {
  const ul = document.getElementById("products");
  const li = document.createElement("li");
  li.innerText = input;
  ul.appendChild(li);
};

// get from localstorage data
const getdataFromLocalStorage = () => {
  const getValue = localStorage.getItem("mart");
  let cartObj;
  if (getValue) {
    cartObj = JSON.parse(getValue);
  } else {
    cartObj = {};
  }
  console.log("object", cartObj);
  return cartObj;
};

// set localstorage data
const setInputDataLocalStorage = (inputData) => {
  console.log(inputData);
  const cart = getdataFromLocalStorage();
  console.log("cart", cart);
  if(cart[inputData]){
    cart[inputData] = cart[inputData] + 1;
  }else {
    cart[inputData] = 1;
  }
  const stringify = JSON.stringify(cart);
  localStorage.setItem("mart", stringify);
};
showData();

// place order 
const placeOrder = ()=> {
    document.getElementById("products").textContent = '';
    localStorage.removeItem('mart');
}