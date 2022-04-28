// const addItems = ()=> {
//     const getIems = document.getElementById('getItemsVlue');
//     const getItemsValue = getIems.value;
//     getIems.value = "";
//     // add to cart items
//     displayItems(getItemsValue);

//     // local storage set items
//     addProductToCart(getItemsValue);
// }

// const displayItems = names => {
//     const ul = document.getElementById('products');
//     const li = document.createElement('li');
//     li.innerText = names;
//     ul.appendChild(li);
// }

// const getlocalItems = ()=>{
//     const setIems = localStorage.getItem('cart');
//     let cartObj;
//     if(setIems){
//         cartObj = JSON.parse(setIems);
//     }else {
//         cartObj = {};
//     }
//     return cartObj;
// } 

// const addProductToCart = name => {
//     const cart = getlocalItems();
//     if(cart[name]){
//         cart[name] = cart[name] + 1;
//     }
//     // cart[name] = 1;
//     const cartStringify = JSON.stringify(cart);
//     localStorage.setItem('cart', cartStringify);
//     console.log(cart);
// }