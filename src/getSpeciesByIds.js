const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const speciesId = data.species.filter((animal) => ids.some((id) => animal.id === id));
  return speciesId;
};
module.exports = getSpeciesByIds;
