const express=require("express");
const {getQuestions,askQuestions}=require("../controllers/questionController")

const router=express.Router();

router.route('/ask')
.get(getQuestions)
.post(askQuestions)

module.exports=router;