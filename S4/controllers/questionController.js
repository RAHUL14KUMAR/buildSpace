const expressAsyncHandler = require("express-async-handler");
const questionModel = require("../models/questionSchema");
const tutorModel = require("../models/tutorSchema");

const askQuestions=expressAsyncHandler(async(req,res)=>{
    try{
        const {ask,askedBy,tags}=req.body;
        const question=await questionModel.create({
            ask,
            tags,
            askedBy
        })
        const teachers=await tutorModel.find({})
        const teacher=teachers.filter(teacher=>{
            return tags.some(tag=>teacher.skills.includes(tag))
        })
        res.status(200).json({"question":question,"teacher":teacher});
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
})

// we use "some" keyword because we have to match that any one value present in the tag array must be present in the teacher skills array then we have shown it.

// if we use "every" keywords instead of "some" then for every tag values must match that teacher contain equal values of skills or not

const getQuestions=expressAsyncHandler(async(req,res)=>{
    try{
        const question=await questionModel.find({});
        question.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateB - dateA;
        });
        res.status(200).json(question)
    }catch(error){
        res.status(500).json(error);
    }
})
module.exports={
    askQuestions,getQuestions
}