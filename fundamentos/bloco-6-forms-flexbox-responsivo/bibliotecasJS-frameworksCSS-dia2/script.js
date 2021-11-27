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

// Funcao enviar formulario
const divPessoal = document.createElement('div');
const divEmprego = document.createElement('div');

function dadosPessoais () {
    const inputs = document.querySelectorAll('.pessoal input');
    const select = document.getElementById('estado');
    let p = document.createElement('p');
    const radio = document.getElementsByName('tipo');

    for (let i of inputs) {
        const p = document.createElement('p');
        let name = i.name;
        let value = i.value;
        p.innerHTML = `<strong>${name}</strong>: ${value}`;
        divPessoal.appendChild(p);
    }
    for (let i = 0; i < radio.length; i += 1) {
        if (radio[i].checked) {
            let p = document.createElement('p');
            p.innerText = `Mora em: ${radio[i].value}`;
            divPessoal.appendChild(p);
        }
    }

    let optionValor = select.options[select.selectedIndex].value;
    p.innerText = `Estado: ${optionValor}`;
    divPessoal.appendChild(p);
}

function ultimoEmprego () {
    const inputEmprego = document.querySelectorAll('.emprego input');
    const textArea = document.querySelectorAll('.emprego textarea')[0];
    let textValor = textArea.value;
    let p = document.createElement('p');
    p.innerText = `resumo do curriculo: ${textValor}`;
    divEmprego.appendChild(p);

    for (let i of inputEmprego) {
        const p = document.createElement('p');
        let name = i.name;
        let value = i.value;
        p.innerHTML = `<strong>${name}</strong>: ${value}`;
        divEmprego.appendChild(p);
    }
}

// Acionador do formulario
const botao = document.getElementById('enviar');
function acionaFormulario (event) {
    event.preventDefault();
    dadosPessoais();
    ultimoEmprego();

    const secaoPessoal = document.getElementById('dados-pessoais');
    const secaoEmprego = document.getElementById('ultimo-emprego');

    secaoPessoal.appendChild(divPessoal);
    secaoEmprego.appendChild(divEmprego);
}
botao.addEventListener('click', acionaFormulario);

// Carregar depedencias do jQuery
window.onload = function () {
    $(document).ready(function(){
        $('select').formSelect();
    });
    var picker = new Pikaday({
        field: document.getElementById('datepicker'),
        format: 'DD/MM/YYYY',
        toString(date, format) {
            // you should do formatting based on the passed format,
            // but we will just return 'D/M/YYYY' for simplicity
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }
    });
}

