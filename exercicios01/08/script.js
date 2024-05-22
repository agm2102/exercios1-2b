let codigo = document.querySelector("#codigo");
let nomeProduto = document.querySelector("#nomeProduto");
let btPesquisar = document.querySelector("#btPesquisar");

btPesquisar.onclick = function () {
    perquisarProduto();
}

function perquisarProduto() {
    if (String(codigo.value) == "001") {
        nomeProduto.textContent = "Produto: 001 - Parafuso";
    }
    else if (String(codigo.value) == "002") {
        nomeProduto.textContent = "Produto: 002 - Porca";
    }
    else if (String(codigo.value) == "003") {
        nomeProduto.textContent = "Produto: 003 - Prego";
    }
    else {
        nomeProduto.textContent = "Diversos";
    }
}