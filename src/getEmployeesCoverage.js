const { employees } = require('../data/zoo_data');

const getEmployeesCoverage = (responsible) => {
  const findEmployee = employees.filter((employee) => employee.firstName === responsible.name
  || employee.lastName === responsible.name || employee.id === responsible.id);

  return findEmployee;
};
console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
