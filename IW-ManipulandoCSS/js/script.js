/* Arquivo JS + alterar CSS */
let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'
titulo.innerHTML = 'Aula Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/bom.jpg')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "red";
titulo.style.color = "white";
titulo.style.backgroundColor = "#012";
titulo.style.borderBottom = "2px solid red";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector('#btlight')
let btnRosa = document.querySelector('#btrose')
let btnBlue = document.querySelector('#btblue')
let btnYel = document.querySelector('#btyellow')



btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnRosa.addEventListener('click', modoRosa)
btnBlue.addEventListener('click', modoAzul)
btnYel.addEventListener('click', modoAmarelo)

function modoDark() {
    //event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    imagem.setAttribute('src', 'img/sadness.jpg')
    tela.classList.remove("light");
    tela.classList.remove("rose");
    tela.classList.remove("azul");
    tela.classList.remove("amarelo");
}

function modoLight() {
    //event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    imagem.setAttribute('src', 'img/bom.jpg')
    tela.classList.remove("rose");
    tela.classList.remove("azul");
    tela.classList.remove("amarelo");
    tela.classList.add("light");
}

function modoRosa(){
    console.log('modo rosa')
    tela.classList.remove("dark");
    imagem.setAttribute('src', 'img/rosa.jpg')
    tela.classList.remove("light");
    tela.classList.remove("azul");
    tela.classList.remove("amarelo");
    tela.classList.add("rose");
}

function modoAzul(){
    tela.classList.remove("dark");
    imagem.setAttribute('src', 'img/azul.jpg')
    tela.classList.remove("light");
    tela.classList.remove("rose");
    tela.classList.remove("amarelo");
    tela.classList.add("azul");
}

function modoAmarelo(){
    tela.classList.remove("dark");
    imagem.setAttribute('src', 'img/yoki.png')
    tela.classList.remove("light");
    tela.classList.remove("rose");
    tela.classList.add("amarelo");
    tela.classList.remove("azul");
}
/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/
