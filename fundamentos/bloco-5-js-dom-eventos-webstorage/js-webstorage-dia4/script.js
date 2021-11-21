let inputBackground = document.getElementById('backgroundColor');
let inputFontColor = document.getElementById('fontColor');
let inputFontSize = document.getElementById('fontSize');
let inputFontStyle = document.getElementById('fontStyle');

let btnBackground = document.getElementById('btn-background');
let btnFontColor = document.getElementById('btn-fontColor');
let btnFontSize = document.getElementById('btn-fontSize');
let btnFontStyle = document.getElementById('btn-fontStyle');

let body = document.getElementsByTagName('body')[0];
let p = document.getElementsByTagName('p');


function backgroundColor () {
    let cor = inputBackground.value;
    body.style.backgroundColor = cor;
    localStorage.setItem('backgroundColor', cor);
}
btnBackground.addEventListener('click', backgroundColor);

function fontColor () {
    let cor = inputFontColor.value;
    body.style.color = cor;
    localStorage.setItem('fontColor', cor);
}
btnFontColor.addEventListener('click', fontColor);

function fontSize () {
    let tamanho = inputFontSize.value;
    body.style.fontSize = tamanho;
    localStorage.setItem('fontSize', tamanho);
}
btnFontSize.addEventListener('click', fontSize);

function fontStyle () {
    let estilo = inputFontStyle.value;
    for (let i of p) {
        i.style.fontFamily = estilo;
    }
    localStorage.setItem('fontStyle', estilo);
}
btnFontStyle.addEventListener('click', fontStyle);


window.onload = function () {

}