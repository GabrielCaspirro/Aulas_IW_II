const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const p = document.getElementById("p");

function bot1() {
    p.innerHTML = "Você apertou o botão 1!"
}

function bot2() {
    p.innerHTML = "Você apertou o botão 2!"
}

function bot3() {
    p.innerHTML = "Você apertou o botão 3!"
}

b1.addEventListener("click", bot1)
b2.addEventListener("click", bot2)
b3.addEventListener("click", bot3)