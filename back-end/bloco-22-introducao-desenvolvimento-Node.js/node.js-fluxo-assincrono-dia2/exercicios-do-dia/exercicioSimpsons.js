const fs = require('fs').promises;

const caminhoDoArquivo = './simpsons.json';

const lerArquivo = async () => {
  const data = await fs.readFile(caminhoDoArquivo, 'utf-8');
  const simpsons = JSON.parse(data);

  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

const lerUmSimpson = async (id) => {
  const data = await fs.readFile(caminhoDoArquivo, 'utf-8');
  const simpsons = JSON.parse(data);
  const simpsonEscolhido = simpsons.filter(({ id: idSimpson }) => Number(idSimpson) === Number(id));

  const promise = new Promise((resolve, reject) => {
    if (simpsonEscolhido.length > 0) resolve(simpsonEscolhido);
    reject(new Error('Id nao encontrado!'))
  });
  return promise;
}

const retirarSimpsons = async () => {
  const data = await fs.readFile(caminhoDoArquivo, 'utf-8');
  const simpsons = JSON.parse(data);
  const novaLista = simpsons.filter(({ id }) => {
    if (id === '6' || id === '10') return false;
    return true;
  });

  try {
    await fs.writeFile(caminhoDoArquivo, JSON.stringify(novaLista));
    console.log('Nova lista adicionada com sucesso!');
  } catch(e) {
    throw new Error(`Ocorreu um erro :/ Erro: ${e}`)
  }
}

const criaNovaList = async () => {
  const data = await fs.readFile(caminhoDoArquivo, 'utf-8');
  const simpsons = JSON.parse(data);
  const novaLista = simpsons.filter(({ id }) => {
    if (id === '1' || id === '2' || id === '3' || id === '4') return true;
    return false;
  });

  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(novaLista));
    console.log('Nova lista criada com sucesso!');
  } catch(e) {
    throw new Error(`Ocorreu um erro :/ Erro: ${e}`)
  }
}

const adicionaSimpson = async () => {
  const familiaData = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const familiaSimpsons = JSON.parse(familiaData);
  familiaSimpsons.push({ id: '8', name: 'Nelson Muntz' });
  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(familiaSimpsons));
    console.log('Lista atualizada com sucesso!');
  } catch(e) {
    throw new Error(`Ocorreu um erro :/ Erro: ${e}`)
  }
}

const adicionaMaggie = async () => {
  const familiaData = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const familiaSimpsons = JSON.parse(familiaData);
  const listaAtualizada = familiaSimpsons.filter(({ id }) => id !== '8');
  listaAtualizada.push({ id: '15', name: 'Maggie Simpson' });

  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(listaAtualizada));
    console.log('Lista atualizada com sucesso!');
  } catch(e) {
    throw new Error(`Ocorreu um erro :/ Erro: ${e}`)
  }
}

async function Simpsons() {
  // lerArquivo();
  // const result = await lerUmSimpson(1);
  // retirarSimpsons();
  // criaNovaList();
  // adicionaSimpson();
  adicionaMaggie()
}

Simpsons();
