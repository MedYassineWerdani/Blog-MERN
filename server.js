const express = require('express');
const app = express();
const PORT = 3000;

require("dotenv").config();

const connectDB = require("./config/db");

connectDB();

const routerArticle =require("./Routes/articleRoutes");
const routerUser = require("./Routes/UserRoutes");
app.use(express.json())

// defining route GET

app.get('/welcome',(req,res)=>{
    res.status(200).send("<h1> Welcome Brothers and Sisters <h1>");
});

app.get('/',(req,res)=>{
    res.status(200).send("<h1> Welcome Brothers and Sisters <h1>");
});

app.use('/api/article', routerArticle);

app.use('/api/user' , routerUser);

app.use((req,res)=> {
  res.redirect('/');
})




app.listen(PORT, () => {
  console.log(`Serveur running on http://localhost:${PORT}`);
}); 