const express = require("express");
const router = express.Router();
const {
  addEmployee,
  getEmployees,
} = require("../controllers/Employee.controller");

//@route GET api/employee/all
//@desc Get all employees
router.get("/all", getEmployees);

//@route POST api/employee
//@desc Add an employee
router.post("/", addEmployee);

module.exports = router;