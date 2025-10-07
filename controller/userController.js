const apiTest=(req,res)=> {
res.status(200).json({message : "User Controller Works"});
};


const apiUserCreate= (req,res) => {

    if(!req.body) {
        return res.status(400).json({message : "THat wont work"})
    }
    const {username,password,email}= req.body;


    if(!username|!password|!email){
        res.status(400).json ({ message : " Please check all fields are filled"})
    }
    else{
        res.status(201).json ({message :"User Created :" , article :{username:username , password:password , email:email}})
    }

};

const listUsers=(req,res) => {
    const articles=[
        {"username" : "username1" ,"password" : "password1" , "email":"email1"},
        {"username" : "username2" ,"password" : "password2" , "email":"email2"},
        {"username" : "username3" ,"password" : "password3" , "email":"email3"},
    ];

    res.status(200).json  (articles);
};

module.exports= {apiUserCreate, apiTest , listUsers};


// mohamed.benjazia@polytechnicien.tn