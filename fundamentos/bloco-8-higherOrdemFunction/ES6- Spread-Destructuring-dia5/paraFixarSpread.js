// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'laranja', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'manga', 'maca'];

const fruitSalad = (fruit, additional) => {
  const saladaDeFrutas = [...fruit, ...additional];
  return saladaDeFrutas
};

console.log(fruitSalad(specialFruit, additionalItens));