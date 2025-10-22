const express=require("express");
const routerUser=express.Router();

const {apiUserCreate, apiTest , listUsers,updateUser,deleteUser}= require("../controller/userController.js");


routerUser.get("/test" , apiTest);

routerUser.get("/" , listUsers);

routerUser.post("/create" , apiUserCreate );

routerUser.delete("/del" , deleteUser );

routerUser.put("/update" , updateUser);

module.exports=routerUser;