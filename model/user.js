const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    title : {
        type:String,
        required:[ true , ' the title is required'] , trim : true 

    }
    , content : {
        type: String ,
        required: [ true , 'Content is required'] 
    }
    , author : {
        type:String , 
        default : 'Anonymous'

    }
    , createdAt : {
        type : Date ,
        default : Date.now  
    }
});

module.exports = mongoose.model('Article' , userSchema);