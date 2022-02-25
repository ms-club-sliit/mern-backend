const Employee = require("../models/Employee.model");

const addEmployee = (req, res) => {
  const { name, position, salary } = req.body;

  const employee = new Employee({
    name,
    position,
    salary,
  });

  employee
    .save()
    .then((createdEmployee) => {
      res.json(createdEmployee);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  addEmployee,
  getEmployees,
};
