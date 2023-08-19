require("dotenv").config();
const connection = require("./database/db");
const express = require("express");
const cors = require("cors");
const teacherRoute = require("./routes/teacherRoutes");
const userRoute = require("./routes/studentRoutes");
const questionRoute=require("./routes/questionRoutes");

const port=process.env.PORT||5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("hello!!!!");
})

app.use("/teacher", teacherRoute);
app.use("/student", userRoute);
app.use('/question',questionRoute)

connection();
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});
  