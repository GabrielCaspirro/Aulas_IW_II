const comp = document.getElementById("comp");
const p = document.getElementById("p");

function comprar(){
    var prod = prompt("Digite o nome do produto: ");
    var val = prompt("Digite o valor do produto: ");
    p.innerHTML = "Você irá comprar " + prod + " por R$" + val;
}

comp.addEventListener("click", comprar);