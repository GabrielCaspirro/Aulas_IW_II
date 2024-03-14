const bt = document.getElementById("calc");
const p = document.getElementById("p");
const r = document.getElementById("r");

function calc(){
    var a = prompt("Digite o valor de a:");
    var b = prompt("Digite o valor de b:");
    var c = prompt("Digite o valor de c:");

    var del = b*b - 4*a*c;
    p.innerHTML = "O cálculo realizado será &Delta; = " + b + "<sup>2</sup> - " + "4." + a + "." + c
    r.innerHTML = "O valor calculado foi &Delta; = " + del;
}

bt.addEventListener("click", calc);