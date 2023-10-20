/*
1. If ticket number is less than 100, per ticket price 100;
2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/ticket
   rest tickets will be 90 taka per piece
3. if you purchase more than 200 tickets
    first 100 ----> 100tk
    101-200 -----> 90tk
    200+ ------> 70tk
*/  

function ticketPrice(ticketQuantity){
    const first100 = 100;
    const second100 = 90;
    const restRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100price = 100 * first100;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100;
        const totalPrice = first100price + restTicketPrice;
        return totalPrice;
         
    }
    else{
        const first100Price = 100 * first100;
        const second100Price = 100 * second100;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}
const price = ticketPrice(300);
console.log(price);