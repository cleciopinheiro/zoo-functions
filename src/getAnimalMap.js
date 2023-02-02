const { species } = require('../data/zoo_data');

const getRegion = () => species.reduce((acc, region) => {
  const filterAnimals = species.filter((specie) => specie.location === region.location)
    .map((nameSpecie) => nameSpecie.name);
  acc[region.location] = filterAnimals;
  return acc;
}, {});

const getNames = (options) => species.reduce((acc, region) => {
  const filterAnimals = species.filter((specie) => specie.location === region.location)
    .map((nameSpecie) => {
      if (options.sorted === true) {
        const array = {
          [nameSpecie.name]: nameSpecie.residents.map((nameAnimal) => nameAnimal.name).sort(),
        };
        return array;
      }
      const array = {
        [nameSpecie.name]: nameSpecie.residents.map((nameAnimal) => nameAnimal.name),
      };
      return array;
    });
  acc[region.location] = filterAnimals;
  return acc;
}, {});

const getSex = (options) => species.reduce((acc, region) => {
  const filterAnimals = species.filter((specie) => specie.location === region.location)
    .map((nameSpecie) => {
      if (options.sorted) {
        const array = {
          [nameSpecie.name]: nameSpecie.residents.filter((sexAnimal) =>
            sexAnimal.sex === options.sex).map((names) => names.name).sort(),
        };
        return array;
      }
      const array = {
        [nameSpecie.name]: nameSpecie.residents.filter((sexAnimal) =>
          sexAnimal.sex === options.sex).map((names) => names.name),
      };
      return array;
    });
  acc[region.location] = filterAnimals;
  return acc;
}, {});

console.log(getRegion());

const getAnimalMap = (options) => {
  if (options === undefined || options.includeNames === undefined) {
    return getRegion();
  }

  if (options.sex !== undefined) {
    return getSex(options);
  }

  return getNames(options);
};
module.exports = getAnimalMap;
