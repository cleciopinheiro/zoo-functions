const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const result = data.species.find((specie) => specie.name === animal);
  return result.residents.every((animale) => animale.age >= age);
};

module.exports = getAnimalsOlderThan;
