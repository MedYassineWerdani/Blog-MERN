const Article = require("../model/article");


const apiTest=(req,res)=> {
return res.status(200).json({message : "User Controller Works"});
};


const apiUserCreate= async (req,res) => {

    if(!req.body) {
        return res.status(400).json({message : "THat wont work"})
    }
    // const {username,password,email}= req.body;


    // if(!(username|password|email)){
    //     res.status(400).json ({ message : " Please check all fields are filled"})
    // }
    // else{
    //     res.status(201).json ({message :"User Created :" , article :{username:username , password:password , email:email}})
    // }
 
        try {
             const newArticle = new Article({
            title: req.body.title,
            content: req.body.content,  
            author: req.body.author
        });
        const savedArticle = await newArticle.save();
        res.status(201).json({ message: "Article Created", article: savedArticle });
        }
        catch (error) {

            res.status(400).json({ message: " Error Creating ", error: error.message });
} }


const listUsers=(req,res) => {
    const articles=[
        {"username" : "username1" ,"password" : "password1" , "email":"email1"},
        {"username" : "username2" ,"password" : "password2" , "email":"email2"},
        {"username" : "username3" ,"password" : "password3" , "email":"email3"},
    ];

    res.status(200).json  (articles);
};

const updateUser=(req,res) => {
    res.status(200).json  ({message : "Update User Works"});

}

const deleteUser=(req,res) => {
    res.status(203).json  ({message : "Delete User Works"});    }



module.exports= {apiUserCreate, apiTest , listUsers,updateUser,deleteUser};


// mohamed.benjazia@polytechnicien.tn