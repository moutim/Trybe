const fs = require('fs').promises;

// Crie uma função que lê e escreve vários arquivos ao mesmo tempo.

// Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
// Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt. Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt.
// Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt.

const criarArquivos = async () => {
  const arrayPromises = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const promises = arrayPromises.map((palavra, index) => {
    return fs.writeFile(`file${index + 1}.txt`, palavra);
  });

  try {
    await Promise.all(promises);
    console.log('Arquivos criados com sucesso!');
  } catch(e) {
    console.log(`Ocorreu algum erro :/ . Erro: ${e}`);
  }
}

const lerArquivos = async () => {
  const nomesDosArquivos = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

  const promises = nomesDosArquivos.map((arquivo) => {
    return fs.readFile(arquivo, 'utf-8');
  });

  try {
    const fileContents = await Promise.all(promises);
    const novoArquivo = fileContents.join(' ');
    await fs.writeFile('./TodosArquivos.txt', novoArquivo);
    console.log('Arquivos lidos com sucesso!', fileContents);
    console.log('Arquivo criado com sucesso!');
  } catch(e) {
    console.log(`Ocorreu algum erro :/ . Erro: ${e}`);
  }
}

async function main() {
  // criarArquivos();
  lerArquivos()
}

main()