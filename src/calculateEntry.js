const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;

  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  const params = countEntrants(entrants);
  const amountChild = params.child * data.prices.child;
  const amountAdult = params.adult * data.prices.adult;
  const amountSenior = params.senior * data.prices.senior;

  return amountChild + amountAdult + amountSenior;
};

module.exports = { calculateEntry, countEntrants };
