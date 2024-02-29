const Textnum1 = document.getElementById("num1");
const Textnum2 = document.getElementById("num2");
const somar = document.getElementById("somar");
const sub = document.getElementById("sub");
const mult = document.getElementById("mult");
const divi = document.getElementById("divi");
const limp = document.getElementById("limp");
const resultado = document.getElementById("resultado");

var num1 = 0;
var num2 = 0;
var result = 0;

function Soma(){
    num1 = Number(Textnum1.value);
    num2 = Number(Textnum2.value);
    if (result==0){
        result = num1 + num2;
    }else{
        result += num2;
    }
    resultado.innerHTML = result;
}

function Sub(){
    num1 = Number(Textnum1.value);
    num2 = Number(Textnum2.value);
    if (result==0){
        result = num1 - num2;
    }else{
        result -= num2;
    }
    resultado.innerHTML = result;
}

function Mult(){
    num1 = Number(Textnum1.value);
    num2 = Number(Textnum2.value);
    if (result==0){
        result = num1 * num2;
    }else{
        result *= num2;
    }
    resultado.innerHTML = result;
}

function Div(){
    num1 = Number(Textnum1.value);
    num2 = Number(Textnum2.value);
    if (result==0){
        result = num1 / num2;
    }else{
        result /= num2;
    }
    resultado.innerHTML = result;
}

function Limpar(){
    result = 0;
    resultado.innerHTML = result;
    Textnum1.value = "";
    Textnum2.value = "";
}

somar.addEventListener("click", Soma);
sub.addEventListener("click", Sub);
mult.addEventListener("click", Mult);
divi.addEventListener("click", Div);
limp.addEventListener("click", Limpar);