// Crie uma função que receba três parâmetros e retorna uma Promise.

// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function somaEmultiplica(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' && typeof b !== 'number' && typeof c !== 'number') {
      reject(new Error("Informe apenas números"))
    }

    const resultado = (a + b) * c;
    
    if (resultado < 50) reject(`O valor de ${resultado} eh muito baixo`);

    resolve(`Deu certo! resultado: ${resultado}`)
  })
}

// Escreva um código para consumir a função construída no exercício anterior.

// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1).
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

const execFuncaoComAleatorio = () => {
  const numeros = [
    Math.floor(Math.random() * 100 + 1),
    Math.floor(Math.random() * 100 + 1),
    Math.floor(Math.random() * 100 + 1)
  ];
  
  somaEmultiplica(...numeros)
    .then(result => console.log(`Resultado: ${result}`))
    .catch(error => console.log(error))
}


// Reescreva o código do exercício anterior para que utilize async/await.
const execFuncaoComAleatorioAsync = async () => {
  const numeros = [
    Math.floor(Math.random() * 100 + 1),
    Math.floor(Math.random() * 100 + 1),
    Math.floor(Math.random() * 100 + 1)
  ];
  
  const data = await somaEmultiplica(...numeros);
  console.log(data);
}
execFuncaoComAleatorioAsync()