const button = document.getElementById("button");

function nome(){
    var name = prompt("Digite seu nome: ");
    alert("Olá " + name + "! Prazer em te conhecer.");
}

button.addEventListener("click", nome);