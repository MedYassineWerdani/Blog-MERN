const User = require("../model/user");

const addUser = async (req,res) => {
    if (!req.body)
        return res.status(400).json({message : "THat wont work"});

    const {username,email,password,role}= req.body;
    if (!username || !email || !password) {
         return res.status(400).json({message : "THat wont work all fileds must be filled"});
    }
    const useradd= new User ({
        username: username ,
        email: email , 
        password : password ,
        role : role ,

    });
    //sauveguarde 
    try {
        const addResult = await useradd.save();
        return res.status(200).json({message : "UserCreated " , newuser : addResult});

    }
    catch(err){
        if (err.code == 11000) { return res.status(409).json({message :"Duplicate Username or Email Detected"});
    }
    else 
        {return res.status(400).json({message : "THat didn't work Internal server error" +err.message});}
    }
}

const getUsers = async(req,res) => {
    const users = await User.find();
    if(!users){return res.status(200).json({message : "No users found"});}
    else {return res.status(200).json({message : "users found  ",number_of_users:users.length , users :users});}

};

const getUserInfo = async(req,res) => {
    const id =req.params.id;
    if(!id) 
    return res.status(400).json({message : "give user id" });
    try {
        const userInfo = User.findById(id);
        return res.status(200).json({message : "User Found" , user : userInfo})
}catch (err) {
            return res.status(400).json({message : "ERROR  " +err.message});
}
 }

const getUserInfoByMail = async(req,res) => {
    //implement now
    const email = req.body.email;
    if(!email) 
    return res.status(400).json({message : "give user email" });

    try {
        const userInfo = User.findOne({email: email});
        return res.status(200).json({message : "User Found" , user : userInfo})
}catch (err) {
            return res.status(400).json({message : "ERROR  " +err.message});
    
};}

module.exports = {addUser, getUsers,getUserInfo ,getUserInfoByMail};