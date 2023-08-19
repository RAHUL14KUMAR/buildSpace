const mongoose=require("mongoose");
const schema=mongoose.Schema;

const questionSchema=new schema({
    ask:{
        type:String
    },
    tags:[],
    askedBy:{
        type:String
    },
    solvedBy:{
        type:String
    }
},{
    timestamps:true
})

module.exports=mongoose.model("questions",questionSchema);