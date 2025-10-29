const express=require("express");
const routerUser=express.Router();

const {addUser, getUsers,getUserInfo}= require("../controller/userController.js");


// routerUser.get("/test" , apiTest);

routerUser.get("/all" , getUsers);


routerUser.get("/:id" , getUserInfo);

routerUser.post("/create" , addUser );

// routerUser.delete("/del" , deleteUser );

// routerUser.put("/update" , updateUser);

module.exports=routerUser;