import Article from "./components/article";

function App(){
  const articles = [
    {id: 1 , title : "Title 1" , author: 'Author 1' , content : " Contents of Article 1"},
    {id: 2 , title : "Title 2" , author: 'Author 2' , content : " Contents of Article 2"},
    {id: 3 , title : "Title 3" , author: 'Author 3' , content : " Contents of Article 3"},
    {id: 4 , title : "Title 4" , author: 'Author 4' , content : " Contents of Article 4"},
    {id: 5 , title : "Title 5" , author: 'Author 5' , content : " Contents of Article 5"}
  ]
  return (<div style={{
    maxWidth : '800px' ,
    margin : '0 auto' , 
    padding: '20px'
  }}> 
    <h1>MY REACT APP</h1>
    <Article title="introduction to react" author='YASSINE' content='Object oreineted programming is complete bs and needs to be abolished like slavery thanks for coming to my ted talk' />
    {articles.map((article) => ( <Article key={article.id} title = {articles.title} author= {article.author} content={article.content}/>)) }
    <hr />
  </div>)


}

export default App;