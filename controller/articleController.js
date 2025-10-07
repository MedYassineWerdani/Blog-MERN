const apiTest=(req,res)=> {
res.status(200).json({message : "Test Works"});
};


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

const listArticles=(req,res) => {
    const articles=[
        {"title" : "TITLE1" ,"content" : "CONTENT1" , "author":"AUTHOR1"},
        {"title" : "TITLE2" ,"content" : "CONTENT2" , "author":"AUTHOR2"},
        {"title" : "TITLE3" ,"content" : "CONTENT3" , "author":"AUTHOR3"},
    ];

    res.status(200).json  (articles);
};

module.exports= {apiArticleCreate, apiTest , listArticles};


// mohamed.benjazia@polytechnicien.tn