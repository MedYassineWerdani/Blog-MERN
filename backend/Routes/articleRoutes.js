const express=require("express");
const routerArticle=express.Router();

const {apiTest, apiArticleCreate , listArticles}= require("../controller/articleController");


routerArticle.get("/test" , apiTest);

routerArticle.get("/" , listArticles);

routerArticle.post("/add" , apiArticleCreate );

module.exports=routerArticle;