const data = require('../data/zoo_data');

const qtdAnimaisResidentes = (animal) => data.species
  .reduce((sum, spec) => ((spec.name === animal.species)
    ? (spec.residents) : (sum)), 0).length;

const countAnimals = (animal) => {
  if (!animal) {
    return data.species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }

  if (Object.values(animal).length === 1) {
    return qtdAnimaisResidentes(animal);
  }
  return data.species.find((specie) => specie.name === animal.species).residents
    .reduce((acc, sexo) => ((sexo.sex === animal.sex) ? (acc + 1) : (acc)), 0);
};

module.exports = countAnimals;
