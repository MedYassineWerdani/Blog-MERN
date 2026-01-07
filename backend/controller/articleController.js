const apiTest=(req,res)=> {
return res.status(200).json({message : "Test Works"});
};

const Article = require("../model/article");


const apiArticleCreate= (req,res) => {
    // const articleData = req.body;
    // console.log('Data received :' , articleData);

    
    // if(!articleData) {
        //     res.status(400).json( {message : "Article has no data"})
        // }
        
    if(!req.body | Object.keys.length==0 ) {
        return res.status(400).json({message : "THat wont work"})
    }
    const {title,content,author}= req.body;


    if(!title|!content|!author){
        res.status(400).json ({ message : " Please check all fields are filled"})
    }
    else{
        res.status(201).json ({message :"Article Created :" , article :{title:title , content:content , author:author}})
    }


    // res.status(201).json({ message : 'Article Created successfully!',
    //     article : {id: Date.now() , ...articleData}
    // });
};

const listArticles = async(req,res) => {
    const articles = await Article.find();
    if(!articles){return res.status(200).json({message : "No articles found"});}
    else {return res.status(200).json({message : "articles found  ",number_of_articles:articles.length , articles :articles});}

};

module.exports= {apiArticleCreate, apiTest , listArticles};


// mohamed.benjazia@polytechnicien.tn