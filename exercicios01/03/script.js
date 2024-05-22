let valor = document.querySelector('#valor');
let btCalcular = document.querySelector('#btCalcular');
let resultado = document.querySelector('#resultado');

function calcularReajuste(){
    resultado.textContent = Number(valor.value) + ((Number(valor.value) * 1) / 100);
}
btCalcular.onclick = function(){
    calcularReajuste();
}