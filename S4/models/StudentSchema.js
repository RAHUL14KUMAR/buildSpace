const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      unique:true
    },
    
  },
  { timeStamps: true }
);

module.exports = mongoose.model("users", studentSchema);