// calculadora com inputs//
var num1=document.getElementById('num1');
var num1=document.getElementById('num2');
var resultado2=document.getElementById('resultado');

var btnsomar=document.getElementById('somar');
var btnSub=document.getElementById('sub');
var btnDiv=document.getElementById('div');
var btnMult= document.getElementById('mult');

btnsomar.addEventListener('click', function(){
    resultado2.textContent="Resultado:" + (parseInt(num1.value) + parseFloat(num2.value));

});