const ligar = document.getElementById("ligar");
const restaurar = document.getElementById("rest");
const lampada = document.getElementById("lamp");
let texto = document.getElementById("texto");
var ligada = false;

function estourada(){
    return lampada.src.indexOf('quebrada') > -1
}

function LigarOuDesligar(){
    if (!estourada()){
        if (!ligada){
            lampada.src = "img/ligada.jpg"
            ligada = true
            texto.innerHTML = "A lampada está ligada!"
        }
        else if(ligada)
        {
            lampada.src = "img/desligada.jpg"
            ligada = false
            texto.innerHTML = "A lampada está desligada!"
        }
    }
}

function Explodir(){
    lampada.src = "img/quebrada.jpg"
    ligada = false
    texto.innerHTML = "A lampada está quebrada!"
}

function Restaurar(){
    lampada.src = "img/desligada.jpg"
    texto.innerHTML = "A lampada foi restaurada!"
}

ligar.addEventListener('click', LigarOuDesligar)
lampada.addEventListener('mouseover', LigarOuDesligar)
lampada.addEventListener("dblclick", Explodir)
restaurar.addEventListener("click", Restaurar)

