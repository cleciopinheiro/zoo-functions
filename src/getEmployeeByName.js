const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((employees) => employees.firstName
  || employees.lastName.includes(employeeName));
};

module.exports = getEmployeeByName;
