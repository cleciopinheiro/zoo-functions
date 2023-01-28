const data = require('../data/zoo_data');

const gridHours = () => {
  const object = Object.keys(data.hours).reduce((acc, elemento) => {
    acc[elemento] = {
      officeHour: `Open from ${data.hours[elemento].open}am until ${data.hours[elemento].close}pm`,
      exhibition: data.species.filter((animal) => animal.availability
        .includes(elemento)).map((a) => a.name),
    };
    return acc;
  }, {});

  object.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return object;
};

const getSchedule = (scheduleTarget) => {
  const hours = Object.keys(data.hours);
  if (scheduleTarget === undefined) {
    return gridHours();
  }

  const verifySpecie = data.species.some((specie) =>
    specie.name === scheduleTarget);
  if (!verifySpecie && !hours.includes(scheduleTarget)) {
    return gridHours();
  }

  if (hours.includes(scheduleTarget)) {
    return { [scheduleTarget]: gridHours()[scheduleTarget] };
  }

  return data.species.find((specie) => specie.name === scheduleTarget).availability;
};
module.exports = getSchedule;
