// setTimeOut

// const nameShow = ()=>{
//     setTimeout(()=>{
//         console.log('Md. ')
//     },1000)
//     setTimeout(()=>{
//         console.log('Mainuddin')
//     },2000)
//     setTimeout(()=>{
//         console.log('Sani')
//     },3000)
// }
// nameShow();

// take a number using prompt. add 200 then alert the result
// const takeNumber = prompt('Enter Your Number');
// const add = parseInt(takeNumber) + 200;
// alert(add);

// do you want to see the href . if ok . console.log href 

// const ans = confirm('do you want to see the href ?');
// if(ans){
//     console.log('href');
// }

// parmanent data
const parmanentData = ()=>{
    const product = getData();
    for(let name in product){
        const price = product[name];
        addDisplay(name, price);
    }
}

// input value

const input = (id)=>{
    const Inputid = document.getElementById(id);
    const inputValue = Inputid.value;
    Inputid.value = "";
    return inputValue;
}

const add = ()=>{
    const productName = input('productsName');
    const productPrice = parseInt(input('productsPrice'));
    addDisplay(productName, productPrice);

    // add display


    // add to local storage 
    setIemsData(productName, productPrice);
}

const addDisplay = (productName, productPrice)=> {
    const ul = document.getElementById('mylist');
    const li = document.createElement('li');
    li.innerText = ` Name: ${productName} => Price: ${productPrice}`;
    ul.appendChild(li);
}

// get data form local storage

const getData= ()=>{
    const product = localStorage.getItem('product');
    let productObj;
    if(product){
        productObj = JSON.parse(product)
    }else {
        productObj = {};
    }
    return productObj;
}

// product setItem local storage

const setIemsData = (name,price)=> {
    console.log(name);
    const productData = getData();
    console.log(productData);
    productData[name] = 1;
    productData[name] = productData[name] + price;
    const dataStringify = JSON.stringify(productData);
    localStorage.setItem('product', dataStringify);

}

parmanentData();