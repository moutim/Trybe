# Dia 2 - Bloco 7



## JavaScript ES6 - Objects

Manipular objetos no JavaScript se tornou mais fácil com a chegada do ES6. Com o uso das novas propiedades conseguimos retornar chaves e valores sem o uso de uma laço de repetição, copiar todos os valores de um objeto e etc. As funcionalidades que vi hoje foram: 

* Adicionar novas chaves: 
  * `const customer = {
      firstName: 'Roberto',
      age: 22,
      job: 'Teacher',
    };` `customes.'nomeDaNovaChave' = 'valor'`
* Pegar todas as chaves de um objeto:
  * `Object.keys(customer)` - retorna um array  com todas as chaves
  * Retorno: `['firstName', 'age', 'job']`;
* Pegar o valor de todas as chaves:
  * `Object.values(customer)` - retorna um array com o valor de todas as chaves
  * Retorno: `['Roberto', 22, 'Teacher']`;
* Pegar todas as entradas de um objeto:
  * `Object.entries(customer)` - retorna um array com arrays dentro
  * Retorno: `[['firstName', 'Roberto'], ['age', 22], ['job', 'teacher']]`;
* Copiar todas as entradas de um objeto:
  * `Object.assign(destino, objeto, objeto1)` - Coloca todas as entradas de um objeto no destino
  * Exemplo: `const cloneObj = Object.assign({}, customer)` - Adiciona todas as entradas ao objeto vazio;





​		



