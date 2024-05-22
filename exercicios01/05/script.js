let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let valorMaior = document.querySelector("#valorMaior");
let btComparar = document.querySelector("#btComparar");

btComparar.onclick = function(){
    compararValores();
}
function compararValores(){
    if(Number(valor1.value) < Number(valor2.value)){
        valorMaior.textContent = Number(valor2.value);
    }
    else{
        valorMaior.textContent = Number(valor1.value);
    }
}