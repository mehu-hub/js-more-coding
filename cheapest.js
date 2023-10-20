const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 16000, color: "white" },
    { name: 'Mi', camera: 48, storage: '64gb', price: 26000, color: "Blue" },
    { name: 'iPhone', camera: 48, storage: '128gb', price: 45000, color: 'Silver' },
    { name: 'Walton', camera: 22, storage: '16gb', price: 10000, color: 'black' },
    { name: 'Asus', camera: 48, storage: '128gb', price: 22000, color: 'Silver' },
    { name: 'Realme', camera: 50, storage: '228gb', price: 47000, color: 'White-blue' }
];

function cheapestPhone(phones){
    let cheapest = phones[0];   
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);