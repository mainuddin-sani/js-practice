
const getvar = (calback)=>{
    setTimeout(function(){
        console.log('ami aschi');
        calback();
    }, 1000);
}

const textFunc = ()=>{
    console.log('ami aschi age');
}
getvar(textFunc);




const isTrue='false'; 

if(!isTrue){
    console.log('true');
}

function sum(p, q) {
    p + q;
   }
   const result = sum(2, 3);
   console.log(result);