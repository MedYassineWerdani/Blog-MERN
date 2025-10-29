const express=require("express");
const routerUser=express.Router();

const {addUser, getUsers,getUserInfo ,getUserInfoByMail,updateUser,deleteUser}= require("../controller/userController.js");


// routerUser.get("/test" , apiTest);

routerUser.get("/all" , getUsers);

routerUser.get("/find" ,getUserInfoByMail);

routerUser.put("/update/:id" , updateUser);

routerUser.get("/:id" , getUserInfo);

routerUser.post("/create" , addUser );

routerUser.delete("/del/:id" , deleteUser );


module.exports=routerUser;