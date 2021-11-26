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



