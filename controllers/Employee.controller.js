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

const updateEmployee = async (req, res) => {
  const empId = req.params.id;

  try {
    const employee = await Employee.findById(empId);

    if (!employee) {
      return res.status(404).json("There is no employee");
    }

    const { name, position, salary } = req.body;

    const emp = await Employee.findByIdAndUpdate(empId, { name, position, salary });

    res.status(200).json(emp);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeEmployee = async (req, res) => {
  const empId = req.params.id;

  try {
    const employee = await Employee.findById(empId);

    if (!employee) {
      return res.status(404).json("There is no employee to remove");
    }

    const removedEmployee = await Employee.findByIdAndDelete(empId);
    res.status(200).json(removedEmployee);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  addEmployee,
  getEmployees,
  updateEmployee,
  removeEmployee,
};
