import {useState} from 'react'
import Article from "./components/article";
import Header  from "./components/header";
import Footer from "./components/footer";
import ProductCard from "./components/productCard";

function App(){
  // const articles = [
  //   {id: 1 , title : "Title 1" , author: 'Author 1' , content : " Contents of Article 1"},
  //   {id: 2 , title : "Title 2" , author: 'Author 2' , content : " Contents of Article 2"},
  //   {id: 3 , title : "Title 3" , author: 'Author 3' , content : " Contents of Article 3"},
  //   {id: 4 , title : "Title 4" , author: 'Author 4' , content : " Contents of Article 4"},
  //   {id: 5 , title : "Title 5" , author: 'Author 5' , content : " Contents of Article 5"}
  // ]; 
  const [articles , setArticles] = useState ([
    {id: 1 , title : "Title 1" , author: 'Author 1' , content : " Contents of Article 1" , likes : 5},
    {id: 2 , title : "Title 2" , author: 'Author 2' , content : " Contents of Article 2" , likes : 3},
    {id: 3 , title : "Title 3" , author: 'Author 3' , content : " Contents of Article 3" , likes : 11},
    {id: 4 , title : "Title 4" , author: 'Author 4' , content : " Contents of Article 4" , likes : 4},
    {id: 5 , title : "Title 5" , author: 'Author 5' , content : " Contents of Article 5" , likes : 2}
  ]);
  const currentYear = new Date().getFullYear();

  const products = [
        {id: 1 , productName : "productName 1" , price: 'price 1' , category: " category of Article 1"},
    {id: 2 , productName : "productName 2" , price: 'price 2' , category: " category of Article 2"},
    {id: 3 , productName : "productName 3" , price: 'price 3' , category: " category of Article 3"},
    {id: 4 , productName : "productName 4" , price: 'price 4' , category: " category of Article 4"},
    {id: 5 , productName : "productName 5" , price: 'price 5' , category: " category of Article 5"}
  ]; 

  const handleLike = (id) => {
    setArticles(articles.map(article => article.id === id ? {...article , likes: article.likes + 1 }
      :article));
    };
    
  
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

    {articles.map((article) => ( <Article key={article.id} title = {article.title} author= {article.author} content={article.content} likes={article.likes} onLike={() => handleLike(article.id)}/>)) }
    <hr />
  </div>

    {products.map((product) => ( <ProductCard key={product.id} productName = {product.productName} price= {product.price} category={product.category}/>)) }
    <hr />


  <Footer 
  author = "EPS"
  year = {currentYear}
  />
  
  </div>
  ) ;


}

export default App;