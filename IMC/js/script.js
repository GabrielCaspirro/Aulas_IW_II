const h = document.getElementById("h");
const p = document.getElementById("p");
const sexo = document.getElementById("sexo");
const result = document.getElementById("calc");
const reset = document.getElementById("reset");
const img = document.getElementById("img");

var resp = document.getElementById("result");
var diag = document.getElementById("diag");

var altura;
var peso;
var sex;
var imc;

function final(){
    if (altura >=0 && altura<=25 && peso > 0){
        if(sex == "masc"){
            if (imc<=18.4){
                diag.innerHTML = "Abaixo do peso!"
                img.src = "img/abaixo do peso.PNG"
            }
            else if(imc >= 18.5 && imc <= 24.9){
                diag.innerHTML = "Peso Ideal!"
                img.src = "img/ideal.PNG"
            }
            else if(imc >= 25.0 && imc <= 29.9){
                diag.innerHTML = "Sobrepeso!"
                img.src = "img/sobrepeso.PNG"
            }
            else if(imc >= 30.0 && imc <= 34.9){
                diag.innerHTML = "Obesidade"
                img.src = "img/obeso.PNG"
            }
            else if(imc >= 35.0 && imc <= 39.9){
                diag.innerHTML = "Obesidade Severa"
                img.src = "img/obesidade severa.PNG"
            }
            else if(imc >= 40.0){
                diag.innerHTML = "Obesidade Mórbida"
                img.src = "img/obm.PNG"
            }
        }else{
            if (imc<=18.4){
                diag.innerHTML = "Abaixo do peso!"
                img.src = "img/abaixo do peso.PNG"
            }
            else if(imc >= 18.5 && imc <= 23.9){
                diag.innerHTML = "Peso Ideal!"
                img.src = "img/ideal.PNG"
            }
            else if(imc >= 24.0 && imc <= 28.9){
                diag.innerHTML = "Sobrepeso!"
                img.src = "img/sobrepeso.PNG"
            }
            else if(imc >= 29.0 && imc <= 33.9){
                diag.innerHTML = "Obesidade"
                img.src = "img/obeso.PNG"
            }
            else if(imc >= 34.0 && imc <= 38.9){
                diag.innerHTML = "Obesidade Severa"
                img.src = "img/obesidade severa.PNG"
            }
            else if(imc >= 40.0){
                diag.innerHTML = "Obesidade Mórbida"
                img.src = "img/obm.PNG"
            }
        }
    }
}

function calcular(){
    altura = Number(h.value.replace(",", "."));
    peso = Number(p.value.replace(",", "."));
    sex = sexo.value;
    imc = peso/(altura*altura);
    if (altura < 0 || altura >= 25){resp.innerHTML = "Digite a altura novamente"}else{
        resp.innerHTML = "Seu IMC é: " + imc.toFixed(2);
    };
    final();
}

function novo(){
    h.value = "";
    p.value = "";
    resp.innerHTML = "";
    diag.innerHTML = "";
    img.src = ""
}

result.addEventListener("click", calcular)
reset.addEventListener("click", novo)