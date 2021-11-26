// Funcao para criar options do select
const estados = {   
'AC': 'Acre',
'AL': 'Alagoas',
'AP': 'Amapá',
'AM': 'Amazonas',
'BA': 'Bahia',
'CE': 'Ceará',
'DF': 'Distrito Federal',
'ES': 'Espírito Santo',
'GO': 'Goías',
'MA': 'Maranhão',
'MT': 'Mato Grosso',
'MS': 'Mato Grosso do Sul',
'MG': 'Minas Gerais',
'PA': 'Pará',
'PB': 'Paraíba',
'PR': 'Paraná',
'PE': 'Pernambuco',
'PI': 'Piauí',
'RJ': 'Rio de Janeiro',
'RN': 'Rio Grande do Norte',
'RS': 'Rio Grande do Sul',
'RO': 'Rondônia',
'RR': 'Roraíma',
'SC': 'Santa Catarina',
'SP': 'São Paulo',
'SE': 'Sergipe',
'TO': 'Tocantins'
}
const select = document.getElementById('estado');
function criaOptions () {
    for (let i in estados) {
        const option = document.createElement('option');
        option.setAttribute('value', i);
        option.innerText = estados[i];
        select.appendChild(option);
    }
}
criaOptions();

// Funcao para verificar data 
const data = document.getElementById('data');
function verificaData () {
    const valorData = data.value;
    const dia = parseInt(valorData.slice(0, 2));
    console.log(dia);
    const mes = parseInt(valorData.slice(3, 5));
    console.log(mes);
    const ano = parseInt(valorData.slice(6,10));
    console.log(ano);

    if ((dia > 0 && dia <= 31) && (mes > 0 && mes <= 12) && (ano > 1930)) {
        return true;
    }
    return alert('Insira uma data valida!')
}

// Funcao enviar formulario
const botao = document.getElementById('enviar');
const div = document.createElement('div');

function valorInputs() {
    const inputs = document.getElementsByTagName('input');
    for (let i of inputs) {
        const p = document.createElement('p');
        let name = i.name;
        let value = i.value;
        p.innerHTML = `<strong>${name}</strong>: ${value}`;
        div.appendChild(p);
    }
}
function valorOption () {
    const select = document.getElementById('estado');
    let optionValor = select.options[select.selectedIndex].value;
    let p = document.createElement('p');
    p.innerText = `Estado: ${optionValor}`;
    div.appendChild(p);
}
function valorRadio () {
    const radio = document.getElementsByName('tipo');
    for (let i = 0; i < radio.length; i += 1) {
        if (radio[i].checked) {
            let p = document.createElement('p');
            p.innerText = `Mora em: ${radio[i].value}`;
            div.appendChild(p);
        }
    }
}
const infos = document.getElementById('secao-info');
function acionaFormulario (event) {
    event.preventDefault();
    verificaData();
    valorInputs();
    valorOption();
    valorRadio();

    const textArea = document.getElementsByTagName('textarea');
    let textValor = textArea.innerText;
    let p = document.createElement('p');
    p.innerText = textValor;
    div.appendChild(p);

    infos.appendChild(div);
}
botao.addEventListener('click', acionaFormulario);

