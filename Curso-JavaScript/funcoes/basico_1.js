
let a =4
console.log(a)

// function declaration
function  bomDia() {
console.log('Bom Dia!')
}

// function expression
const boaTarde = function () {
    console.log('Boa tarde!')
}


let x= boaTarde() //undefined
console.log(x)
function somar(a= 0, b=0) {
    return a + b
}
let resultado = somar(3,5,5,6,7,8)
console.log(resultado)

resultado = somar(3,5,5,6,7,8)
console.log(resultado)

resultado = somar(3)
console.log(resultado)
//resultado = somar(3)
// console.log(resultado)