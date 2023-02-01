const { employees, species } = require('../data/zoo_data');

const verifyEmployees = employees.map((employee) => {
  const array = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).name),
    locations: employee.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).location),
  };
  return array;
});

const getEmployeesCoverage = (responsible) => {
  if (responsible === undefined) {
    return verifyEmployees;
  }

  const result = verifyEmployees.find((element) => element.fullName
    .includes(Object.values(responsible))
  || element.id.includes(Object.values(responsible)));

  if (!result) {
    throw new Error('Informações inválidas');
  }

  return result;
};

module.exports = getEmployeesCoverage;
