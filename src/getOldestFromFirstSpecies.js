const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  // Primeiro passo: fiz o matcher para encontrar o id do meu parametro, já capturando a primeira espécie da chave ResponsibleFor
  const firstAnimal = data.employees.find((func) => func.id === id).responsibleFor[0];
  // Segundo passo: Caputrei todos os animais daquela espécie
  const objectAnimal = data.species.find((specie) => specie.id === firstAnimal).residents;
  // Terceiro passo: Pra identificar quem é o mais velho, eu organizei a array com 'sort' em ordem crescente e depois fiz um 'length - 1' pra pegar o último dessa lista.
  return Object.values(objectAnimal.sort((a, b) => a.age - b.age)[objectAnimal.length - 1]);
};

module.exports = getOldestFromFirstSpecies;
