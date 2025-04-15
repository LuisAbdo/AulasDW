// curring
function finalprice(tax) {
    return function(price){
    return price * (1+tax)
}
}
const nycFinalPrice= finalprice(0.0875)
console.log(nycFinalPrice(25.1))
console.log(nycFinalPrice(21.7))
console.log(nycFinalPrice(107.9))