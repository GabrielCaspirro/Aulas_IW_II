const button = document.getElementById("button");
const p = document.getElementById("p");
const r = document.getElementById("r");

function reajustar(){
    var nome = prompt("Digite o nome do funcionário:");
    var sal = prompt("Digite o salário atual de " + nome + ":");
    var aum = prompt("Digite o reajuste do salário em porcentagem: ");

    sal = Number(sal);
    aum = Number(aum);
    var porc = (sal/100)*aum;
    p.innerHTML = "O salário de " + nome + " era de R$" + sal + ",00. Acrescentando " + aum + "%, O salário irá aumentar R$"+ porc + ",00";
    r.innerHTML = "Agora seu salário será de R$" + (sal+porc) + ",00"
}

button.addEventListener("click", reajustar)