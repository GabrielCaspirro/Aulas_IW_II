const button = document.getElementById("button");
const p = document.getElementById("p");

function nome(){
    var name = prompt("Digite seu nome: ");
    p.innerHTML = "Olá " + name + "! Prazer em te conhecer"
}

button.addEventListener("click", nome);