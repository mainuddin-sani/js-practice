// product match

let product = [
    {
        name: 'laptop in Bangladesh',
        price: 30000,
        brand: 'Lenevo',
        hardDisk: 1+"TB",
    },
    {
        name: 'watch in Caina',
        price: 1000,
        brand: 'rolax',
    },
    {
        name: 'laptop in Ausrtalia',
        price: 1000,
        brand: 'hp',
        hardDisk: 500+"GB",
    }
]

function matchingProduct(products, searching){
    let search = [];
    for(let pro of products){
        if (pro.name.includes(searching)) {
            search.push(pro);
        }
    }
    return search;
}
const searcingMatch = matchingProduct(product, 'watch');
console.log(searcingMatch);