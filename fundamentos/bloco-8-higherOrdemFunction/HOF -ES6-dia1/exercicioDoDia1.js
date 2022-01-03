// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
const newEmployees = () => {
    const employees = {
      id1: createEmployees('Vitor Hugo Moutim'),
      id2: createEmployees('Silvania do Val Moutim'),
      id3: createEmployees('Jose Rodrigue da Silva'),
    }
    return employees;
};
const createEmployees = (nome) => {
    const primeiroNome = nome.split(' ');
    const employee = {
        nome: nome,
        email: `${primeiroNome[0]}@trybe.com`
    }
    return employee;
};
console.log(newEmployees());