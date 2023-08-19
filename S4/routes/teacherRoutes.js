const express = require("express");
const protect = require("../middleware/authMiddleware");
const {registerTeacher,loginTeacher,getTeacher} = require("../controllers/tutorController");


const router = express.Router();

router.post("/register", registerTeacher);
router.post("/login", loginTeacher);
router.get("/profile", protect, getTeacher);

module.exports = router;