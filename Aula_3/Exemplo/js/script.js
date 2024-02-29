const nome = document.getElementById("nome");
const botao = document.getElementById("button");
const p = document.getElementById("paragrafo");
var str = "";

function pegarValor(){
    str = nome.value
    p.innerHTML = str;
    console.log(str);
}

botao.addEventListener("click", pegarValor);
