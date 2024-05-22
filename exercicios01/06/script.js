let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let valor3 = document.querySelector("#valor3");
let valor4 = document.querySelector("#valor4");
let valorMenor = document.querySelector("#valorMenor");
let btComparar = document.querySelector("#btComparar");

btComparar.onclick = function(){
    compararValores();
}
function compararValores(){
    let menor = Number(valor1.value);

    if(menor > Number(valor2.value)){
        menor = Number(valor2.value)
    }
    if(menor > Number(valor3.value)){
        menor = Number(valor3.value)
    }
    if(menor > Number(valor4.value)){
        menor = Number(valor4.value)
    }
    valorMenor.textContent = menor;
}