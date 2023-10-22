const products = [
    { id: 1, name: 'Xiomi Phone', price: 19000 },
    { id: 2, name: 'Realme Phone', price: 26000 },
    { id: 3, name: 'Xiomi laptop', price: 65000 },
    { id: 4, name: 'Apple Phone', price: 89000 },
    { id: 5, name: 'Walton tv', price: 25000 },
    { id: 6, name: 'Hp laptop', price: 44000 },
    { id: 7, name: 'Lenovo Frezz', price: 22000 },
    { id: 8, name: 'Nokia phone', price: 10000 },
    { id: 9, name: 'Own pHonE', price: 10000 },
]

function matchedProducts (products, search){
    const matched = [];
    for (product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'Phone');
console.log(result);