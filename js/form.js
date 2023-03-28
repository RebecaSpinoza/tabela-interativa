

//função anônima
titulo.addEventListener("click", function(){
    console.log("função anonima - O titulo foi clicado")
})

var botaoAdicionar = document.querySelector("#adicionar-encomenda");
var tabola = document.querySelector("#tabola");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("botão foi clicado");
    var nc = document.querySelector("#nomeCliente");
    var qt = document.querySelector("#quantItens");
    var it= document.querySelector("#itens")
    var val = document.querySelector("#valorItens")

    var linha = document.createElement("tr");
    var colunaNome = document.createElement("td");
    var colunaQuant = document.createElement("td");
    var colunaItens = document.createElement("td");
    var colunaValor = document.createElement("td");
    var colunaTotal = document.createElement("td");

    colunaNome.textContent = nc.value;
    colunaQuant.textContent = qt.value;
    colunaItens.textContent = it.value;
    colunaValor.textContent = val.value;
    colunaTotal.textContent = qt.value * val.value;
   
    linha.appendChild(colunaNome);
    linha.appendChild(colunaItens);
    linha.appendChild(colunaQuant);
    linha.appendChild(colunaValor);
    linha.appendChild(colunaTotal);
    

    tabola.appendChild(linha);
})
   
