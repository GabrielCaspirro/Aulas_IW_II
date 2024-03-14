const comp = document.getElementById("comp");
const p = document.getElementById("p");

function comprar(){
    var prod = prompt("Digite o nome do produto: ");
    var val = prompt("Digite o valor do produto: ");
    var pagou = prompt("O quanto você pagou?")
    var troco = pagou - val;
    if(troco >= 0){
        p.innerHTML = "Você irá comprar " + prod + " por R$" + val + ". Pagou R$" + pagou + ",00. Você vai receber R$"+troco+",00 de troco";
    }else{
        p.innerHTML = "Você irá comprar " + prod + " por R$" + val + ". Pagou R$" + pagou + ",00. Você ainda deve R$"+(troco*-1)+",00";
    }
}

comp.addEventListener("click", comprar);