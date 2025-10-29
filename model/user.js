const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    username : {
        type:String,
        required:[ true , ' the username is required'] , trim : true ,
        lowercase: true,
        unique: true

    }
    ,email : {
        type:String,
        required:[ true , ' the email is required'] , trim : true ,
        lowercase: true,
        unique: true

    }
    , password : {
        type:String , 
        required : true,
        minlength : [8, " Password cannot be shorter than 8 characters"] ,
        select:false,


    }
    , role : {
        type : String ,
        required :true  ,
        lowercase: true ,
        default : "user" ,
    }
},{
timestamps:true,
collection:"users"
}
);

module.exports = mongoose.model('User' , userSchema);