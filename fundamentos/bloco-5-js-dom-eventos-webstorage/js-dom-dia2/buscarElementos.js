// 1 - Acesse o elemento elementoOndeVoceEsta .
// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// 4 - Acesse o primeiroFilho a partir de pai .
// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// 8 - Agora acesse o terceiroFilho a partir de pai .

console.log(document.getElementById('elementoOndeVoceEsta'));

console.log(document.getElementById('elementoOndeVoceEsta').parentNode);

document.getElementById('primeiroFilhoDoFilho').innerText = 'Texto generico';

console.log(document.getElementById('pai').firstElementChild);

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

console.log(document.getElementById('pai').lastElementChild.previousElementSibling);

// --------------------------------

// 1 - Crie um irmão para elementoOndeVoceEsta .
// 2 - Crie um filho para elementoOndeVoceEsta .
// 3 - Crie um filho para primeiroFilhoDoFilho .
// 4 - A partir desse filho criado, acesse terceiroFilho .

let pai = document.getElementById('pai');
let irmao = document.createElement('section');
irmao.id = 'elemento-irmao';
pai.appendChild(irmao)

let segundoPai = document.getElementById('elementoOndeVoceEsta');
let filho = document.createElement('div');
filho.id = 'filho';
segundoPai.appendChild(filho);

let terceiroPai = document.getElementById('primeiroFilhoDoFilho');
let segundoFilho = document.createElement('div');
segundoFilho.id = 'segundo-filho';
terceiroPai.appendChild(segundoFilho);

console.log(document.getElementById('segundo-filho').parentElement.parentElement.nextElementSibling);