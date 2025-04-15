// function declaration
function sayHello() {
console.log('Hello!')
}
sayHello()

function sayHelloTo(name) {
    console.log('hello ${name}!')

}
sayHellTo('Mike')

function returnHi() {
    return 'hi!'
}
const greeting=returnHi()
console.log(greeting)
console.log(returnHi)

function returnHiTo(name) {
    return 'Hi ${name}'
}
console.log(returnHiTo('John'))