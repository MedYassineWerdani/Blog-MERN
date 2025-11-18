import Article from "./components/article";

function App(){
  const articles = [
    {id: 1 , title : "Title 1" , author: 'Author 1' , content : " Contents of Article 1"},
    {id: 2 , title : "Title 2" , author: 'Author 2' , content : " Contents of Article 2"},
    {id: 3 , title : "Title 3" , author: 'Author 3' , content : " Contents of Article 3"},
    {id: 4 , title : "Title 4" , author: 'Author 4' , content : " Contents of Article 4"},
    {id: 5 , title : "Title 5" , author: 'Author 5' , content : " Contents of Article 5"}
  ]; 
  const currentYear = new Date().getFullYear();
  return (<div style={{
    minHeight : '100vh' ,
    display : 'flex' ,
    flexDirection : "column" ,}}>
      <div style ={{
    maxWidth : '800px' ,
    margin : '0 auto' , 
    padding: '20px' ,
    flex :1
  }}> 
  <Header title = "Mon Blog React" 
  subtitle = "Apprendre React avec des exemples pratiques" />

  <div style= {{ marginBottom : '20px' , padding : '15px' , backgroundColor : '#f0f9ff', borderRadius : '8px' }}>
    <strong>{articles.length} </strong> articles disponibles
  </div>

    {articles.map((article) => ( <Article key={article.id} title = {articles.title} author= {article.author} content={article.content}/>)) }
    <hr />
  </div>

  <Footer 
  author = "EPS"
  year = {currentYear}
  />
  
  </div>
  ) ;


}

export default App;