/*
    Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

function paragrafo () {
    let paragrafo = document.getElementsByTagName("p");
    paragrafo[0].innerText = "Como me vejo daqui a dois anos?";
    paragrafo[0].style.fontWeight = 700;
    paragrafo[1].innerHTML = "Um programador pleno em uma boa empresa.";
    paragrafo[2].innerText = "Vitor Moutim - 2021"
};
paragrafo();

function blockYellow () {
    let bloco = document.getElementsByClassName("main-content");
    bloco[0].style.backgroundColor = 'rgb(76,164,109)';
};
blockYellow();

function blockRed () {
    let bloco = document.getElementsByClassName("center-content");
    bloco[0].style.backgroundColor = 'white';
}
blockRed();

function corrigeTitulo () {
    let titulo = document.getElementsByTagName("h1");
    titulo[0].innerText = 'Exercício 5.1 - JavaScript';
}
corrigeTitulo();

function paragrafoMaiusculo () {
    let paragrafo = document.getElementsByTagName("p");
    for (let i =0; i < paragrafo.length; i +=1) {
        paragrafo[i].style.textTransform = 'uppercase';
    }
}
paragrafoMaiusculo();

function exibeParagrafo () {
    let paragrafo = document.getElementsByTagName("p");
    for (let i =0; i < paragrafo.length; i +=1) {
        console.log(paragrafo[i].innerText);
    }
}
exibeParagrafo();