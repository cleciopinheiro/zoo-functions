const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species.filter((animal) => ids.includes(animal.id));

module.exports = getSpeciesByIds;
