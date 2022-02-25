const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: String,
  position: String,
  salary: Number,
});

module.exports = Employee = mongoose.model('Employee', employeeSchema);
