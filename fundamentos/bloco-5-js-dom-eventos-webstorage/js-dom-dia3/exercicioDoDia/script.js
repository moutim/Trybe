function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  createDaysOfTheWeek();
  
//   O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let ulDays = document.getElementById('days');
for (let i =0; i < dezDaysList.length; i +=1) {
    let liDays = document.createElement('li');
    liDays.className = 'day';
    if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
        liDays.className = 'day holiday';
    } else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18){
        liDays.className = 'day friday';
    } else if (dezDaysList[i] === 25) {
        liDays.className = 'day holiday friday'
    }
    liDays.innerText = dezDaysList[i];
    ulDays.appendChild(liDays);
}

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados"
let buttonContainer = document.getElementsByClassName('buttons-container')[0];
function criaBotao(feriados) {
    let botao = document.createElement('button');
    botao.id = 'btn-holiday';
    botao.innerText = feriados;
    buttonContainer.appendChild(botao);
}
criaBotao('Feriados');

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday"
let botaoFeriado = document.getElementById('btn-holiday');
let liHoliday = document.getElementsByClassName('holiday');

function destacaFeriado(){
    for (let i of liHoliday) {
        if (i.style.backgroundColor === 'lightgreen') {
            i.style.backgroundColor = 'rgb(238,238,238)';
        } else {
            i.style.backgroundColor = 'lightgreen';
        }
    }
}
botaoFeriado.addEventListener('click', destacaFeriado);


// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira"
function botaoSexta(sextaFeira){
    let botaoSexta = document.createElement('button');
    botaoSexta.id = 'btn-friday';
    botaoSexta.innerText = sextaFeira;
    buttonContainer.appendChild(botaoSexta);
}
botaoSexta('Sexta-feira');


// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira
let btnSexta = document.getElementById('btn-friday');
let liFriday = document.getElementsByClassName('friday');
let daysFriday = [4,11,18,25];
function mudaSexta(){
    for (let i =0; i < liFriday.length; i +=1) {
        if (liFriday[i].innerText === `SEXTOU (͡° ͜ʖ ͡°)`) {
            liFriday[i].innerText = daysFriday[i];
        } else {
            liFriday[i].innerText = `SEXTOU (͡° ͜ʖ ͡°)`;
        }
    }
}
btnSexta.addEventListener('click', mudaSexta);
