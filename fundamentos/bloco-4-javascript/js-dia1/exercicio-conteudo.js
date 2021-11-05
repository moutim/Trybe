// Exercicio do conteudo "Variáveis"
const myName = "Vitor Moutim";
const birthCity = "Sao Paulo/SP";
let birthYear = 2001;
birthYear = 2030;
console.log(myName);
console.log(birthCity);
console.log(birthYear);


// Exercicio do conteudo "Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas"
const base = 5;
let height = 8;
const area = base * height;
console.log(area);
const perimeter = base + height + area;
console.log(perimeter);


// Exercicio do conteudo "Condições If e Else"
const nota = 40;
if (nota >= 80){
    console.log("Parabéns, você foi aprovada(o)!");
} else if(nota >= 60 && nota < 80){
    console.log("Você está na nossa lista de espera");
} else{
    console.log("Você foi reprovada(o)");
}


// Exercicio do conteudo "Operadores lógicos"
// Operador && (AND)
const currentHour = 2;
let message = "";
if (currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir";
} else if(currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D";
} else if(currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?";
} else if(currentHour >= 11 && currentHour < 14){
    message = "Hora do almoço!!!";
} else if(currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
}
console.log(message);

// Operador || (OR)
let weekDay = "segu-feira";
if(weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay ===  "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
    console.log("FINALMENTE, descanso merecido UwU");
}



// Exercicio do conteudo "Switch e Case"
let status = "lista";
switch (status) {
    case "aprovado":
        console.log("VOCE FOI APROVADO!");
        break;
    case "reprovado":
        console.log("Infelizmente voce nao foi aprovado");
        break;
    case "lista":
        console.log("Voce esta na lista de espera");
        break;
        
    default:
        console.log("Nao se aplica");    
}
