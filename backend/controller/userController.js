const User = require("../model/user");
const asyncHandler = require("express-async-handler")

const addUser = asyncHandler(async(req,res) => {
    if (!req.body){
        // return res.status(400).json({message : "THat wont work"});
        res.status(400);
        throw new Error("That did NNOOOOOOOT Work");}


    const {username,email,password,role}= req.body;
    if (!(username && email && password)) {
    // if (!username || !email || !password) {
        //  return res.status(400).json({message : "THat wont work all fileds must be filled"});
        res.status(400);
        throw new Error("ALL FIELDS MUST BE FILLED MY DUDE");
    }
    const useradd= new User ({
        username: username ,
        email: email , 
        password : password ,
        role : role ,   
    });
    //sauveguarde 
    // try {
        const addResult = await useradd.save();
        return res.status(200).json({message : "UserCreated " , newuser : addResult});

    // }
    // catch(err){
        if (err.code == 11000) { return res.status(409).json({message :"Duplicate Username or Email Detected"});
    }
    else 
        {return res.status(400).json({message : "THat didn't work Internal server error" +err.message});}
    // }
});

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
        const userInfo = await User.findById(id);
        return res.status(200).json({message : "User Found" , user : userInfo})
}catch (err) {
            return res.status(400).json({message : "ERROR 06  " +err.message});
}
 }

const getUserInfoByMail = async(req,res) => {
    if(!req.body) {
        return res.status(400).json({message : "No data provided" });
    }
    const email = req.body.email;
    if(!email) 
    return res.status(400).json({message : "give user email" });

    try {
        const userInfo = await User.findOne({email: email});
        if(!userInfo) {
            return res.status(200).json({message : "No user with that email"});}

        return res.status(200).json({message : "User Found" , user : userInfo})
}catch (err) {
            return res.status(400).json({message : "ERROR 07  " +err.message});
    
};
}

const updateUser = async(req,res) => {
    const id = req.params.id;
    if(!id) {
        return res.status(404).json({message : "Please verify userID"});
    }
    if(!req.body) {
        return res.status(404).json({message : "No data provided for update!"})};
    const {username,email,role} = req.body;
    const userData = {
        username : username ,
        email : email ,
        role : role ,
    };
try {
    const userupdated = await user.findByIdAndUpdate(id,userData,{new:true});
    
    if (!userupdated) {
        return res.status(404).json({message : "User not found or not updated"});
    }

    return res.status(203).json({message : "User updated successfully" , user : userupdated});
}
catch(err) {
    return res.status(500).json({message : "Error updating user " + err.message});
}
}

const deleteUser = async(req,res) => {

    const id = req.params.id;
    // if(!id) {
    //     return res.status(404).json({message : "Please verify userID"});
    // }
    
try {
    const userDeleted = await user.findByIdAndDelete(id);
    
    if (!userDeleted) {
        return res.status(404).json({message : "User not found or not deleted"});
    }

    return res.status(200).json({message : "User deleted successfully" , user : userDeleted});
}
catch(err) {
    return res.status(500).json({message : "Error deleting user " + err.message});
}

 }

module.exports = {addUser, getUsers,getUserInfo ,getUserInfoByMail,updateUser,deleteUser};