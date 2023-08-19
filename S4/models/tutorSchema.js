const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tutorSchema = new Schema(
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
      unique: true,
    },
    skills: [],
    education: {
      type: String,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("tutor", tutorSchema);
