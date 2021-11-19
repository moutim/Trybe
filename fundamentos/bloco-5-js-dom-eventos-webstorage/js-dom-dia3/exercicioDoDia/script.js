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