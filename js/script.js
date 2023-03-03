var titulo = document.querySelector(".titulo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Lista de Encomendas";

var clientes = document.querySelectorAll(".cliente");
console.log(clientes.length); //conta a quantidade de itens que tem dentro do meu array

for(var i=0; i < clientes.length; i++){
//captura a quantidade encomendada
 var qtde = clientes[i].querySelector(".qtde").textContent;
//captura o valor unitário do produto
 var valor = clientes[i].querySelector(".valor").textContent;

//verifica se a quantidade recebida é valida
if (!isNaN(qtde) && !isNaN(valor)){
    //calcula o valor total caso os valores estejam todos inseridos corretamente
    var total = qtde * valor;
    clientes[i].querySelector('.total').textContent = total.toLocaleString("pt-BR",{style:'currency', currency: 'BRL'});

}else if (isNaN(qtde) && isNaN(valor)){
    //trata o erro caso os 2 elementos sejam inseridos errados 
    clientes[i].querySelector(".qtde").textContent = "Qtde invalida";
    clientes[i].querySelector(".valor").textContent = "Valor invalido";
    console.log("A quantidade e o valor unitário inseridos pelo cliente "+clientes[i].querySelector(".nome").textContent+" é invalida");
    
    
}else if (isNaN(qtde)){
    //trata o erro caso a quantidade esteja errada
    clientes[i].querySelector(".qtde").textContent = "Qtde invalida";
    console.log("A quantidade inserida pelo cliente "+clientes[i].querySelector(".nome").textContent+" é invalida");

}else if (isNaN(valor)){
    //trata o erro caso o valor unitário esteja errado 
    clientes[i].querySelector(".valor").textContent = "Valor invalido";
    console.log("O valor unitário inserido pelo cliente "+clientes[i].querySelector(".nome").textContent+" é invalida");
    
}
}

// var valorFormat = parseFloat(valor);
// clientes[i].querySelector('.valor').textContent = valorFormat.toLocaleString("pt-BR",{style:'currency', currency: 'BRL'});

