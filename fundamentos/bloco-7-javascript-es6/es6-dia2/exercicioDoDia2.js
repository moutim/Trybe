const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const lesson4 = {
    materia: 'História',
    numeroEstudantes: 40,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const lesson5 = {
    materia: 'Matemática',
    numeroEstudantes: 60,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// 1 - Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function adicionaTurno (objetoDestino, chave, valor) {
    objetoDestino[chave] = valor;
    console.log(objetoDestino);
}
adicionaTurno(lesson2, 'turno', 'noite');

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listaKeys (objeto) {
    console.log(Object.keys(objeto)); 
}
listaKeys(lesson3)

// 3 - Crie uma função para mostrar o tamanho de um objeto.
function tamanhoObjeto (objeto) {
    console.log(Object.keys(objeto).length);
}
tamanhoObjeto(lesson2)

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listaValores (objeto) {
    console.log(Object.values(objeto));
}
listaValores(lesson1);

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3, lesson4, lesson5});
console.log(allLessons);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
function numeroEstudantes (objeto) {
    const listaLesson = Object.values(objeto);
    let alunos = 0;
    for (let key in listaLesson) {
        alunos += listaLesson[key].numeroEstudantes;
    }
    return console.log(alunos);
}
numeroEstudantes(allLessons)

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
function getValueByNumber (objeto, numero) {
    const valores = Object.values(objeto);
    return console.log(valores[numero]);
}
getValueByNumber(lesson3, 3)

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 
function verifyPair (objeto, chave, valor) {
    if (objeto[chave] !== undefined && objeto[chave] === valor) {
        return console.log(`${true}, existe uma entrada com esses valores`);
    }
    return console.log(`${false}, nao existe uma entrada com esses valores`);
}
verifyPair(lesson3, 'professor', 'Maria Clara');

// Bônus
// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
function contaAlunosMateria (nomeMateria) {
    let alunos = 0;
    for (let key in allLessons){
        if (allLessons[key].materia === nomeMateria) {
            alunos += allLessons[key].numeroEstudantes;
        }
    }
    return console.log(alunos);
}
contaAlunosMateria('Matemática');