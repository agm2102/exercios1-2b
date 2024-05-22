let valorKilo = document.querySelector('#valorKilo');
let quantidadeKilo = document.querySelector('#quantidadeKilo');
let total = document.querySelector('#total');
let btCalcular = document.querySelector('#btCalcular');

function calcularKilo(){

    let resultado = parseFloat(quantidadeKilo.value) * parseFloat(valorKilo.value)

    total.textContent = resultado;
}
btCalcular.onclick = function(){
    calcularKilo();
}