let valor = document.querySelector("#valor");
let btVerificar = document.querySelector("#btVerificar");
let resultado = document.querySelector("#resultado");

btVerificar.onclick = function(){
    verificarSeImpar();
}
function verificarSeImpar(){
    if((Number(valor.value) % 2) != 0){
        resultado.textContent = valor.value + " é ímpar!"
    }
    else{
        resultado.textContent = valor.value + " é par!"
    }
}
