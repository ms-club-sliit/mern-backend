const express = require("express");
const router = express.Router();
const { addEmployee, getEmployees, updateEmployee, removeEmployee } = require("../controllers/Employee.controller");

//@route GET api/employee/all
//@desc Get all employees
router.get("/all", getEmployees);

//@route POST api/employee
//@desc Add an employee
router.post("/", addEmployee);

//@route PUT api/employee/:id
//@desc Update Employee
router.put("/:id", updateEmployee);

//@route DELETE api/employee/:id
//@desc Update Employee
router.delete("/:id", removeEmployee);

module.exports = router;
