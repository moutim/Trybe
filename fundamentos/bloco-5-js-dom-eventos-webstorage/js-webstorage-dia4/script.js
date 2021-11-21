let inputBackground = document.getElementById('backgroundColor');
let inputFontColor = document.getElementById('fontColor');
let inputFontSize = document.getElementById('fontSize');
let inputFontStyle = document.getElementById('fontStyle');
let inputLineHeight = document.getElementById('lineHeight');

let btnBackground = document.getElementById('btn-background');
let btnFontColor = document.getElementById('btn-fontColor');
let btnFontSize = document.getElementById('btn-fontSize');
let btnFontStyle = document.getElementById('btn-fontStyle');
let btnLineHeight = document.getElementById('btn-lineHeight');

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

function lineHeight () {
    let tamanho = inputLineHeight.value;
    for (let i of p){
        i.style.lineHeight = tamanho;
    }
    localStorage.setItem('lineHeight', tamanho);
}
btnLineHeight.addEventListener('click', lineHeight);

window.onload = function () {
    function loadUserOptions () {
        let userBackground = localStorage.getItem('backgroundColor');
        body.style.backgroundColor = userBackground;

        let userFontColor = localStorage.getItem('fontColor');
        body.style.color = userFontColor;

        let userFontSize = localStorage.getItem('fontSize');
        body.style.fontSize = userFontSize;

        let userFontStyle = localStorage.getItem('fontStyle');
        let userLineHeight = localStorage.getItem('lineHeight');
        for (let i of p) {
            i.style.fontFamily = userFontStyle;
            i.style.lineHeight = userLineHeight;
        }

        
    }
    loadUserOptions();

}