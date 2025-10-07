const express=require("express");
const routerUser=express.Router();

const {apiTest, apiUserCreate , listUsers}= require("../controller/userController.js");


routerUser.get("/test" , apiTest);

routerUser.get("/" , listUsers);

routerUser.post("/create" , apiUserCreate );

module.exports=routerUser;