function Dicount(discount){
    return function (price){
        return price - price * (discount / 100);
    }
}

let discount = Dicount(10);
console.log(discount(200));